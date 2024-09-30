import express from 'express';
import authmiddleware from '../middlewares/auth.js';
import { placeorder, verifyorder,userorders, listorders, updatestatus } from '../controllers/ordercontroller.js';


const orderrouter=express.Router();
orderrouter.post("/place",authmiddleware,placeorder);
orderrouter.post("/verify",verifyorder);
orderrouter.post("/userorders",authmiddleware,userorders)
orderrouter.get("/list",listorders);
orderrouter.post("/status",updatestatus);
export default orderrouter;
