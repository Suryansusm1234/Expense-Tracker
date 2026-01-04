import express from "express"
import ExpenseModel from "./modules/expense.js"
import IncomeModel from "./modules/income.js"
import CategoryModel from "./modules/category.js"
import connectDB from "./modules/Db.js"
const app = express()
//Connection to the database
await connectDB();


app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.get("/api/categories", async (req, res) => {
    try {
        const categories = await CategoryModel.find({})
        res.status(200).json(categories)
    } catch (error) {
        res.status(500).json({ message: "Server Error" })
    }
})

app.post("/api/data", async (req, res) => {
    const data = req.body;
    console.log(req.body);
    if (data.type === "expense") {
        try {
            await ExpenseModel.create(data)
            res.status(201)
        } catch (error) {
            res.status(500).json({ message: "Server Error" })
        }

    }
    else {
        try {
            await IncomeModel.create(data)
            res.status(201)
        } catch (error) {
            res.status(500).json({ message: "Server Error" })
        }

    }
})

app.listen(8080, () => {
    console.log("Running at port 8080");

})


