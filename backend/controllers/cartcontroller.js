import usermodel from '../models/usermodel.js';

//add item to cart

const addtocart=async(req,res)=>{
try{
    let userdata=await usermodel.findById(req.body.userid)
    let cartdata=await userdata.cartdata;
    if(!cartdata[req.body.itemId]){
        cartdata[req.body.itemId]=1;
    }
    else{
        cartdata[req.body.itemId]+=1;
    }
    await usermodel.findByIdAndUpdate(req.body.userid,{cartdata});
     res.json({ success: true, message: "added to cart" });
}
catch(error){
    console.log(error);
    res.json({ success: false, message: "Error" });
}
}

//remove items

const removefromcart=async(req,res)=>{
try{
    let userdata=await usermodel.findById(req.body.userid);
  let cartdata=await userdata.cartdata;
  if(cartdata[req.body.itemId]>0){
    cartdata[req.body.itemId]-=1;

  }
  await usermodel.findByIdAndUpdate(req.body.userid,{cartdata});
  res.json({ success: true, message: "removed successsfully" });
}
catch(error){
    console.log(error);
    res.json({ success: false, message: "Error" });
}
}

//fetch user cart data
const getcart=async(req,res)=>{
    try{
    let userdata=await usermodel.findById(req.body.userid);
    let cartdata=await userdata.cartdata;
    res.json({success:true,cartdata});
    }

catch(error){
    console.log(error);
    res.json({ success: false, message: "Error" });
}
}
export {addtocart,removefromcart,getcart};