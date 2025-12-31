import mongoose from "mongoose";
const IncomeSchema = new mongoose.Schema({
    title: {
    type: String,
    required: [true, 'Please add a title'],
    trim: true
  },
  amount: {
    type: Number,
    required: [true, 'Please add a positive or negative number']
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
 const IncomeModel = mongoose.model("income", IncomeSchema)
 export default IncomeModel