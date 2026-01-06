import mongoose from "mongoose";
const CategorySchema = new mongoose.Schema({
    title :{
        type :String,
        trim :true
    },
    colour :{
        type :String,
        trim : true,
    },
    budgeted:{
        type :Number,
    },
    actual:{
        type:Number,
    },
    utilization:{
        type :Number,
    }
    
})
const CategoryModel = mongoose.model("category", CategorySchema)
export default CategoryModel