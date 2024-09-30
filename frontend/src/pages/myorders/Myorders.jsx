import React, { useContext, useEffect, useState } from 'react'
import './Myorders.css';
import axios from 'axios';
import { StoreContext } from '../../context/Storecontext';
import { assets } from '../../assets/frontend_assets/assets';
const Myorders = () => {
const {url,token}=useContext(StoreContext);
    const [data,setdata]=useState([]);

    const fetchorders=async()=>{
        const response=await axios.post(url+"/api/order/userorders",{},{headers:{token}});
        setdata(response.data.data);
    }

    useEffect(()=>{
        if(token){
            fetchorders();
        }
    },[token])
  return (
    <div className='my-orders'>
      <h2>my orders</h2>
      <div className='container'>
        {data.map((order,index)=>{
            return (
               <div key={index}className='my-orders-order'>
                <img src={assets.parcel_icon} alt=""/>
                <p>{order.items.map((item,index)=>{
                    if(index===order.items.length-1){
                        return item.name+" x "+item.quantity
                    }
                    else{
                        return item.name+" x "+item.quantity+","
                    }
                })}
                    </p>

                    <p>${order.amount}.00</p>
                    <p>Items:{order.items.length}</p>
                    <p><span>&#x25cf;</span><b>{order.status}</b></p>
                    <button onClick={fetchorders}>track order</button>
                </div>
            )
        })}
      </div>
    
    </div>
  )
}

export default Myorders
