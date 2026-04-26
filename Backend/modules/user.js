import mongoose from "mongoose";
const UserSchema = new mongoose.Schema({
    username :{
        type :String,
        trim :true
    },
    balance :{
        type :Number,
    },
    password :{
        type :String,
    }
})
const UserModel = mongoose.model("user", UserSchema)
export default UserModel   