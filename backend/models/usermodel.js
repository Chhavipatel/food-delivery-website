import mongoose from "mongoose";

const userSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true

    },
    email:{
        type:String,
        required:true,
        unique:true

    },
    Password:{
        type:String,
        required:true

    },
    cartdata:{
        type:Object,
        default:{}

    },
},{minimize:false})

const Usermodel=mongoose.models.user || mongoose.model("user",userSchema);

export default Usermodel;