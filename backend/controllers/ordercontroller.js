import ordermodel from "../models/ordermodel.js";
import Usermodel from "../models/usermodel.js";

import Stripe from 'stripe';

const stripe=new Stripe(process.env.STRIPE_SECRET_KEY);
const placeorder=async(req,res)=>{
    const frontend_url="http://localhost:5174"
try{
    const neworder=new ordermodel({
        userid:req.body.userid,
        items:req.body.items,
        amount:req.body.amount,
        address:req.body.address

    })
    await neworder.save();
    await Usermodel.findByIdAndUpdate(req.body.userid,{cartdata:{}})

    const line_items=req.body.items.map((item)=>({
          price_data:{
            currency:"inr",
            product_data:{
                name:item.name
            },
            unit_amount:item.price*100*80
          },
          quantity:item.quantity
    }))
    line_items.push({
        price_data:{
            currency:"inr",
            product_data:{
                name:"delivery charges"
            },
            unit_amount:2*100*80
          },
          quantity:1

    })
    const session=await stripe.checkout.sessions.create({
        line_items:line_items,
        mode:'payment',
        success_url:`${frontend_url}/verify?success=true&orderid=${neworder._id}`,
           cancel_url:`${frontend_url}/verify?success=false&orderid=${neworder._id}`

    })
    res.json({success:true,session_url:session.url})
}
catch(error){
    console.log(error);
    res.json({ success: false, message: "Error" });
}
}

const verifyorder=async(req,res)=>{
const {orderid,success}=req.body;
try{
    if(success=="true"){
        await ordermodel.findByIdAndUpdate(orderid,{payment:true});
        res.json({success:true,message:"paid"})
    }
    else{
        await ordermodel.findByIdAndDelete(orderid);
        res.json({success:false,message:" not paid"})
    }
}
catch(error){
    console.log(error);
    res.json({success:false,message:"error"});
}
}
//user orders for frotnedn
const userorders=async(req,res)=>{
try{
    const orders=await ordermodel.find({userid:req.body.userid});
    res.json({success:true,data:orders})
}catch(error){
console.log(error);
res.json({success:false,message:"error"});

}
}
//listing orders for admin
const listorders=async(req,res)=>{
try{
    const orders=await ordermodel.find({});
    res.json({success:true,data:orders})
}catch(error){
    console.log(error);
    res.json({success:false,message:"error"});
}
}
//api 
const updatestatus=async(req,res)=>{
try{
    await ordermodel.findByIdAndUpdate(req.body.orderId,{status:req.body.status});
    res.json({success:true,message:"updated"});
}catch(error){
    console.log(error);
    res.json({success:false,message:"error"});
}

}
export {placeorder,verifyorder,userorders,listorders,updatestatus};