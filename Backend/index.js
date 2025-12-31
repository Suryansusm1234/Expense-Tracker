import express from "express"
import ExpenseModel from "./modules/expense.js"
import IncomeModel from "./modules/income.js"
import CategoryModel from "./modules/category.js"
import connectDB from "./modules/Db.js"
const app  =  express()
//Connection to the database
await connectDB();


app.use(express.json())
app.use(express.urlencoded({extended:true}))



app.post("/api/data",(req, res)=>{
    console.log(req.body);
    res.send("Post Request Received")    
})

app.listen(8080,()=>{
    console.log("Running at port 8080");
    
})


