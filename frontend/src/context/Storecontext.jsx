import { createContext, useEffect, useState } from "react";

import axios from'axios';
import { useContext } from "react";

export const StoreContext=createContext(null)
const StoreContextProvider=(props)=>{

const [cartItems,setcartItems]=useState({});
const url="https://fooddelivery-backend-826d.onrender.com";
const [token,settoken]=useState("");
const [food_list,setfoodlist]=useState([]);



const addtocart=async(itemId)=>{
    if(!cartItems[itemId]){
        setcartItems((prev)=>({...prev,[itemId]:1}));
    }else{
        setcartItems((prev)=>({...prev,[itemId]:prev[itemId]+1}));

    }if(token){
        await axios.post(url+"/api/cart/add",{itemId},{headers:{token}});
    }

   
}


const removefromcart=async(itemId)=>{
    setcartItems((prev)=>({...prev,[itemId]:prev[itemId]-1}))
    if(token){
        await axios.post(url+"/api/cart/remove",{itemId},{headers:{token}});
        
    }
    
}

const gettotal=()=>{
let totalam=0;

for(const item in cartItems){
    if(cartItems[item]>0){
    let iteminfo=food_list.find((product)=>product._id===item);
    totalam += iteminfo.price * cartItems[item];


    }
   
}

return totalam;
}

const fetchfoodlist=async()=>{
const response=await axios.get(url+"/api/food/list");
setfoodlist(response.data.data);
}

const loadcartdata=async(token)=>{
    const response=await axios.post(url+"/api/cart/get",{},{headers:{token}});
    setcartItems(response.data.cartdata);
}
useEffect(()=>{


    async function loaddata(){
        await fetchfoodlist();
        if(localStorage.getItem("token")){
            settoken(localStorage.getItem("token"));
            await loadcartdata(localStorage.getItem("token"));
        }
    }
    loaddata();
},[])
const contextValue={
    food_list,
    cartItems,
    setcartItems,
    addtocart,
    removefromcart,
    gettotal,
    url,
    token,
    settoken
};

return(
    <StoreContext.Provider value={contextValue}>
        {props.children}
    </StoreContext.Provider>
)
}

export default StoreContextProvider;
