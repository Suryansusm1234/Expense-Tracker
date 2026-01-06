import express from "express"
import CategoryModel from "./modules/category.js"
import TransactionModel from "./modules/Transaction.js"
import connectDB from "./modules/Db.js"
import UserModel from "./modules/user.js"
const app = express()
//Connection to the database
await connectDB();

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.get("/api/initaldata", async (req, res) => {
    try {
        const categories = await CategoryModel.find({})
        const user = await UserModel.findOne({})
        console.log(user);

        const transactions = await TransactionModel.find({})
        res.status(200).json({ categories, user, transactions })
    }

    catch (error) {
        res.status(500).json({ message: "Server Error" })
    }
})

app.post("/api/transaction", async (req, res) => {
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

app.listen(8080, () => {
    console.log("Running at port 8080");

})

