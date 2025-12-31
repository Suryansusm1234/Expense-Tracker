import mongoose from "mongoose";
 const Expense = new mongoose.Schema({
    title: {
    type: String,
    required: [true, 'Please add a title'],
    trim: true
  },
  amount: {
    type: Number,
    required: [true, 'Please add a positive or negative number']
  },
  category: {
    type: String,
    required: [true, 'Please select a category']
  },
  remarks:{
    type: String ,
    trim :true
  },
  createdAt :{
    type : String
  },
  updatedAt :{
    type :String,
  }
 })
 const ExpenseModel = mongoose.model("Expense",Expense)
 export default ExpenseModel;