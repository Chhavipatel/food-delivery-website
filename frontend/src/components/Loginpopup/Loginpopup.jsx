import React, { useContext, useState } from 'react'
import { assets } from '../../assets/frontend_assets/assets'
import './Loginpopup.css'
import { StoreContext } from '../../context/Storecontext'
import axios from 'axios';
const Loginpopup = ({setshowlogin}) => {

  const {url,settoken}=useContext(StoreContext);
    const [currstate,setcurrstate]=useState("login");
    const [data,setdata]=useState({
      name:"",
      email:"",
      password:""
    })
    const onchangehandle=(event)=>{
const name=event.target.name;
const value=event.target.value;
setdata(data=>({...data,[name]:value}))
    }
    const onlogin=async(event)=>{
      event.preventDefault();
      let newurl=url;
      if(currstate=="login"){
        newurl+="/api/user/login";
      }
      else{
        newurl+="/api/user/register";
      }
      const response=await axios.post(newurl,data);
      if(response.data.success){
        settoken(response.data.token);
        localStorage.setItem("token",response.data.token);
        setshowlogin(false);
      }
      else{
        alert(response.data.message);
      }
    }
  return (
    <div className='login-popup'>
     <form onSubmit={onlogin} className='login-popup-container'>
        <div className='login-popup-title'>
            <h2>{currstate}</h2>
            <img src={assets.cross_icon} onClick={()=>setshowlogin(false)} alt=""/>
        </div>

        <div className='login-popup-inputs'>
            {currstate=='login'?<></>:<input type="text" name="name" onChange={onchangehandle} value={data.name} placeholder='enter your name' required/> }
            <input type="emailt"  name="email" onChange={onchangehandle} value={data.email}  placeholder='enter your email' required/> 
            <input type="password"  name="password" onChange={onchangehandle} value={data.password}  placeholder='enter your password' required/> 
        </div>
        <button type='submit'>{currstate=='signup'?"create account":"login"}</button>
        {currstate=="login"
        ? <p>create a new account?<span onClick={()=>setcurrstate("signup")} >click here</span></p>
      :<p>already have an account?<span onClick={()=>setcurrstate("login")} >click here</span></p>}
     </form>

    </div>
  )
}

export default Loginpopup
