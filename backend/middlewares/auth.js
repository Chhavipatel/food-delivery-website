import jwt from 'jsonwebtoken';

const authmiddleware=async(req,res,next)=>{
const {token}=req.headers;
if(!token){
    return res.json({ success: false, message: "not authorized login again" });
    return ({success:false,message:""})
}

try{
    const token_decode=jwt.verify(token,process.env.JWT_SECRET);
    req.body.userid=token_decode.id;
    next();

}
catch(error){
    console.log(error);
    res.json({ success: false, message: "Error" });
}
}

export default authmiddleware;