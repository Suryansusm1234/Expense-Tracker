import mongoose from 'mongoose'
async function connectDB() {
    try {
        await mongoose.connect("mongodb+srv://compass:compass1234@cluster0.g8e2imf.mongodb.net/ExpenseTracker?appName=Cluster0")
        console.log("Connected");
    } catch (error) {
        console.log(error);
    }
}
    
export default connectDB;