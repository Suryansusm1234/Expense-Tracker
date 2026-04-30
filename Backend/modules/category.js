import mongoose from "mongoose";
const CategorySchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true
    },

    colour: {
      type: String,
      required: true,
      trim: true
    },

    budgeted: {
      type: Number,
      required: true,
      min: 0
    },

    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "user",
      required: true
    }
  }
);
const CategoryModel = mongoose.model("category", CategorySchema)
export default CategoryModel