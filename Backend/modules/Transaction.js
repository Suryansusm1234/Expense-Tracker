import mongoose from "mongoose";
const TransactionSchema = new mongoose.Schema({
     title: {
    type: String,
    required: [true, 'Please add a title'],
    trim: true
  },
  type:{
    type:String,
    required:[true,'Please specify the type of transaction'],
    trim:true
  },
  amount: {
    type: Number,
    required: [true, 'Please add a positive or negative number']
  },
  category: {
    type: String,
  },
  desc:{
    type: String ,
    trim :true
  },
  createdAt :{
    type : String
  },
  userId :{
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
    required: true
  }
})
const TransactionModel = mongoose.model("Transaction", TransactionSchema)
export default TransactionModel;