// import Usermodel from'../models/usermodel.js';
// import jwt from 'jsonwebtoken'
// import bcrypt from 'bcrypt'
// import validator from 'validator'

// //login user

// const loginuser=async(req,res)=>{
// const {email,Password}=req.body;
// try{
// const user=await Usermodel.findOne({email});
// if(!user){
//     return res.json({success:false,message:"user doesn't exists"});
// }
// const isMatch = await bcrypt.compare(password, user.Password);
// if(!isMatch){
//     return res.json({success:false,message:"invalid credentials"});
// }
// const token=createtoken(user._id);
// res.json({success:true,token});
// }catch(error){
//     console.log(error);
//     res.json({success:false,message:"error"})
// }
// }

// const createtoken=(id)=>{
//     return jwt.sign({id},process.env.JWT_SECRET)
// }

// const registeruser=async(req,res)=>{
//     const {name,Password,email}=req.body;
//     console.log(Password);
//     try{
//     const exists=await Usermodel.findOne({email});

//     if(exists){
// return res.json({success:false,message:"user already exists"});
//     }

// if(!validator.isEmail(email)){
//     return res.json({success:false,message:"please enter a valid email"});
// }

// if(Password.length<8){
//     return res.json({success:false,message:"plz enter a strong password"});
// }

// const salt=await bcrypt.genSalt(10)
// const hashedpassword=await bcrypt.hash(Password,salt);
// const newuser=new Usermodel({
// name:name,
// email:email,
// Password:hashedpassword
// })
// const user=await newuser.save();
// const token=createtoken(user._id)
// res.json({success:true,token});

// }
// catch(error){
//     console.log(error);
//     res.json({success:false,message:"error"})
// }
// }

// export{loginuser,registeruser};

import Usermodel from '../models/usermodel.js';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import validator from 'validator';

// login user
const loginuser = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await Usermodel.findOne({ email });
    if (!user) {
      return res.json({ success: false, message: "User doesn't exist" });
    }

    const isMatch = await bcrypt.compare(password, user.Password);
    if (!isMatch) {
      return res.json({ success: false, message: "Invalid credentials" });
    }

    const token = createtoken(user._id);
    res.json({ success: true, token });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: "Error" });
  }
};

const createtoken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET);
};

// register user
const registeruser = async (req, res) => {
  const { name, password, email } = req.body;
  console.log(password);
  try {
    const exists = await Usermodel.findOne({ email });

    if (exists) {
      return res.json({ success: false, message: "User already exists" });
    }

    if (!validator.isEmail(email)) {
      return res.json({ success: false, message: "Please enter a valid email" });
    }

    if (password.length < 8) {
      return res.json({ success: false, message: "Please enter a strong password" });
    }

    const salt = await bcrypt.genSalt(10);
    const hashedpassword = await bcrypt.hash(password, salt);
    const newuser = new Usermodel({
      name: name,
      email: email,
      Password: hashedpassword
    });
    const user = await newuser.save();
    const token = createtoken(user._id);
    res.json({ success: true, token });

  } catch (error) {
    console.log(error);
    res.json({ success: false, message: "Error" });
  }
};

export { loginuser, registeruser };

