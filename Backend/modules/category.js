import mongoose from "mongoose";
const CategorySchema = new mongoose.Schema({
    title :{
        type :String,
        trim :true
    },
    colour :{
        type :String,
        trim : true,
    }
})
const CategoryModel = mongoose.model("category", CategorySchema)
export default CategoryModel