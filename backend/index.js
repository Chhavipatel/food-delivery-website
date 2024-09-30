import express from 'express';
import cors from 'cors';
import { connectDB } from './config/db.js';
import foodrouter from './routes/foodroute.js';
import userrouter from './routes/userroute.js';

import 'dotenv/config.js'
import cartrouter from './routes/cartroute.js';
import orderrouter from './routes/orderroute.js';
const app=express();
const port=process.env.PORT || 8080;


app.use(express.json());
app.use(cors());

connectDB();



//api endpoint
app.use('/api/food',foodrouter);
app.use("/images",express.static('uploads'));
app.use('/api/user',userrouter);
app.use("/api/cart",cartrouter);
app.use("/api/order",orderrouter)
app.get("/",(req,res)=>{
    res.send("api working");
})

app.listen(port,()=>{
    console.log("server started ");
})

