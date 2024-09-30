import Foodmodel from "../models/foodmodel.js";
import fs from 'fs';

//add food item

const addfood=async(req,res)=>{
let img_filename=`${req.file.filename}`;

const food=new Foodmodel({
    name:req.body.name,
    description:req.body.description,
    price:req.body.price,
    category:req.body.category,
    image:img_filename
})
try{
    await food.save();
    res.json({success:true,message:"food added"});
}catch(error){
    console.log(error);
    res.json({success:false,message:"error"})
}
}

//all food list

const listfood=async(req,res)=>{
try{
    const foods=await Foodmodel.find({});
        res.json({success:true,data:foods})

}catch(error){
console.log(error);
res.json({success:false,message:error});
}
}
//remove food
const removefood=async(req,res)=>{
try{
    const food=await Foodmodel.findById(req.body.id);
fs.unlink(`uploads/${food.image}`,()=>{})

await Foodmodel.findByIdAndDelete(req.body.id);
res.json({success:true,message:"food removed"});
}catch(error){
    console.log(error);
    res.json({success:false,message:error});
}
}

export {addfood,listfood,removefood};