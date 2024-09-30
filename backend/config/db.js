import mongoose from "mongoose";

 export const connectDB=async()=>{
    await mongoose.connect('mongodb+srv://patelchhavi485:fooddelivery@cluster0.n8dh4k3.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0').then(()=>console.log("db connected"));
}