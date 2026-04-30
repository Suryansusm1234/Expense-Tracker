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
import { analyzeWithPython } from './analysicservice.js';
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

    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
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
           const user = await UserModel.findById(req.userId)

        const categories = await CategoryModel.find({userId: req.userId})
       
        const transactions = await TransactionModel.find({userId: req.userId}).sort({ createdAt: -1 })
        const response = await analyzeWithPython(transactions, categories);
        user.balance = response.balance;
        const updatedCategories = categories.map(category => {
            const categoryData = response.categoryBreakdown.find(cat => cat.category === category.title);
            return {
                ...category.toObject(),
                actual: categoryData ? categoryData.actual : 0,
                utilization: categoryData ? categoryData.utilization : 0
            };
        });
        res.status(200).json({ updatedCategories, user, transactions});
       
    }

    catch (error) {
        res.status(500).json({ message: "Server Error" })
    }
})

app.post("/api/transaction", auth, async (req, res) => {
    
    try {
        const userId = req.userId;
    const data = { ...req.body, userId };
        const transaction = await TransactionModel.create(data)
        res.status(201).json(transaction)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
})

app.post("/api/update", auth, async (req, res) => {
   
    try {
         const { username, bankBalance, updatedCategories } = req.body;
        const userId = req.userId;
        const updatedUser = await UserModel.findByIdAndUpdate(
            userId,
            {
                username: username,
            },
            { new: true }
        );

        if (!updatedUser) {
            return res.status(404).json({ message: "User not found" });
        }
        const categoriesToUpdate = updatedCategories.filter(cat => {
            return typeof cat.budgeted === 'string' || typeof cat.actual === 'string';
        });
       for (const cat of updatedCategories) {
      await CategoryModel.findOneAndUpdate(
        { _id: cat._id, userId },
        {
          budgeted: Number(cat.budgeted)
        }
      );
    }
        const finalCategories = await CategoryModel.find({ userId });
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

