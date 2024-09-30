import React, { useContext, useEffect } from 'react'
import './Verify.css';
import axios from 'axios';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { StoreContext } from '../../context/Storecontext';

const Verify = () => {
    const [searchparams,setsearchparams]=useSearchParams();
    const success=searchparams.get("success");
    const orderid=searchparams.get("orderid")
    const {url}=useContext(StoreContext);
    const navigate=useNavigate();
    const verifypayment=async()=>{
        const response=await axios.post(url+"/api/order/verify",{success,orderid});
if(response.data.success){
navigate("/myorders");
}
else{
    navigate("/");
}
    }

    useEffect(()=>{
        verifypayment();
    },[])
  return (
    <div className='verify'>
<div className='spinner'>
    </div>      
    </div>
  )
}

export default Verify
