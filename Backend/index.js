import dotenv from 'dotenv';
dotenv.config()
import cors from "cors";
import express from "express"
import CategoryModel from "./modules/category.js"
import TransactionModel from "./modules/Transaction.js"
import connectDB from "./modules/Db.js"
import UserModel from "./modules/user.js"
import jwt from 'jsonwebtoken';
import { auth } from "./middleware.js"
import cookieParser from 'cookie-parser';
const app = express()
app.set("trust proxy", 1);
app.use(
  cors({
    origin: process.env.CLIENT_URL,
    credentials: true,
  })
);
//Connection to the database
await connectDB();
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cookieParser())
//LOgin route
app.post("/api/login", async (req, res) => {
    const { username, password } = req.body;
    
    let user;
    if (username === process.env.DEMO_USERNAME && password === process.env.DEMO_PASSWORD) {
        user = { username: process.env.DEMO_USERNAME };
    } else {
        user = await UserModel.findOne({ username, password });
       
        
    }

    // Check if user exists
    if (!user) {
        return res.status(401).json({ message: "Invalid credentials" });
    }

    const token = jwt.sign({ username: user.username }, process.env.JWT_SECRET, { expiresIn: '1h' });
    const isProd = process.env.NODE_ENV === "production";
    res.cookie("token", token, { 
        httpOnly: true,  
        secure: isProd,
        sameSite: isProd ? "none" : "lax",
        maxAge: 60 * 60 * 1000,
    });
    res.json({ success: true });
});
app.get("/api/initaldata", auth, async (req, res) => {
    try {
        const categories = await CategoryModel.find({})
        const user =   await UserModel.findOne({ username: req.user })
        const transactions = await TransactionModel.find({}).sort({ createdAt: -1 })
        res.status(200).json({ categories, user, transactions })
    }

    catch (error) {
        res.status(500).json({ message: "Server Error" })
    }
})

app.post("/api/transaction", auth, async (req, res) => {
    const data = req.body;
    try {
        const transaction = await TransactionModel.create(data)
        if (transaction.type === 'expense') {
            await UserModel.updateOne({}, { $inc: { balance: -transaction.amount } })
            const updatedCategory = await CategoryModel.findOneAndUpdate(
                { title: transaction.category },
                { $inc: { actual: transaction.amount } },
                { new: true })
            if (updatedCategory) {
                const newUtilization = Math.floor((updatedCategory.actual / updatedCategory.budgeted) * 100);
                updatedCategory.utilization = newUtilization;
                await updatedCategory.save();
            }
        } else {
            await UserModel.updateOne({}, { $inc: { balance: transaction.amount } })
        }
        res.status(201).json(transaction)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
})

app.post("/api/update", auth, async (req, res) => {
    const { username, bankBalance, updatedCategories } = req.body;
    try {
        const updatedUser = await UserModel.findOneAndUpdate(
            {},
            {
                username: username,
                balance: Number(bankBalance)
            },
            { new: true }
        );

        if (!updatedUser) {
            return res.status(404).json({ message: "User not found" });
        }
        const categoriesToUpdate = updatedCategories.filter(cat => {
            return typeof cat.budgeted === 'string' || typeof cat.actual === 'string';
        });
        
        for (const cat of categoriesToUpdate) {
            // 1. Fetch the document first
            const categoryDoc = await CategoryModel.findById(cat._id);

            if (categoryDoc) {
                // 2. Apply the new values (converting strings to numbers)
                categoryDoc.budgeted = Number(cat.budgeted);
                categoryDoc.actual = Number(cat.actual);

                // 3. Recalculate utilization
                // Handle division by zero just in case budget is 0
                if (categoryDoc.budgeted > 0) {
                    categoryDoc.utilization = Math.round((categoryDoc.actual / categoryDoc.budgeted) * 100);
                } else {
                    categoryDoc.utilization = 0;
                }
                await categoryDoc.save();
            }
        }
        const finalCategories = await CategoryModel.find({});
        res.status(200).json({
            success: true,
            message: "Settings updated successfully",
            categories: finalCategories
        });
    } catch (error) {
        console.error("Update Error:", error);
        res.status(500).json({ message: "Server Error", error: error.message });
    }
})
app.listen(process.env.PORT || 8080)

