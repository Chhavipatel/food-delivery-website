import express from 'express'
import { addtocart,removefromcart,getcart } from '../controllers/cartcontroller.js'
import authmiddleware from '../middlewares/auth.js';


const cartrouter=express.Router();

cartrouter.post("/add",authmiddleware,addtocart);
cartrouter.post("/remove",authmiddleware,removefromcart);
cartrouter.post("/get",authmiddleware,getcart);


export default cartrouter;