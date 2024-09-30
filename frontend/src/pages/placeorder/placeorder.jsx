// import React, { useContext, useState } from 'react'
// import './placeholder.css'
// import { StoreContext } from '../../context/Storecontext';
// function  placeorder () {
//   const {gettotal,token,food_list,cartitems,url}=useContext(StoreContext);
//   const [data,setdata]=useState({
//     firstname:"",
//     lastname:"",
//     email:"",
//     street:"",
//     city:"",
//     state:"",
//     zipcode:"",
//     country:"",
//     phone:""
//   })

//   const onchangehandle=(event)=>{
// const name=event.target.name;
// const value=event.target.value;
// setdata(data=>({...data,[name]:value}));
//   }

//   const placeorder=async(event)=>{
//     event.preventDefault();
//     let orderitems=[];
//     food_list.map((item)=>{
//       if(cartitems[item._id]>0){
//         let iteminfo=item;
//         iteminfo['quantity']=cartitems[item._id];
//         orderitems.push(iteminfo);
//       }
//     })
//     console.log(orderitems);
//   }
 
//   return (
//   <>
//   <form onSubmit={placeorder} className='place-order'>
// <div className='place-order-left'>
//   <p className='title'>delivery information</p>
//   <div className='multi-fields'>
//     <input type='text' name='firstname' onChange={onchangehandle} value={data.firstname} placeholder='first name'/>
//     <input type='text' name='lastname' onChange={onchangehandle} value={data.lastname} placeholder='last name'/>
//   </div>
//   <input type='email' name='email' onChange={onchangehandle} value={data.email} placeholder='email address'/>
//   <input type='text' name='street' onChange={onchangehandle} value={data.street} placeholder='enter street'/>
//   <div className='multi-fields'>
//   <input type='text' placeholder='city' name='city' onChange={onchangehandle} value={data.city}/>
//   <input type='text' placeholder='state' name='state' onChange={onchangehandle} value={data.state}/>
//   </div>
//   <div className='multi-fields'>
//   <input type='text' placeholder='zip code' name='zipcode' onChange={onchangehandle} value={data.zipcode}/>
//   <input type='text' placeholder='country' name='country' onChange={onchangehandle} value={data.country}/>
//   </div>
//   <input type="text" placeholder='phone no.' name='phone' onChange={onchangehandle} value={data.phone}/>
// </div>
// <div className='place-order-rigth'>
//   <div className='cart-total'>
//     <h2>cart totals</h2>
//     <div >
//       <div className='cart-total-details'>
//         <p>subtotal</p>
//         <p>${gettotal}</p>
//       </div>
//       <hr/>
//       <div className='cart-total-details'>
// <p>delivery fee</p>
// <p>${gettotal()===0?0:2}</p>
//       </div>
//       <hr/>
//       <div className='cart-total-details'>
// <p>total</p>
// <p>${gettotal()===0?0:gettotal()}</p>
//       </div>
//     </div>
//     <button type='submit'>proceed to payment</button>
//   </div>
// </div>
//   </form>
//   </>
//   )
// }

// export default placeorder;

import React, { useContext, useEffect, useState } from 'react';
import './placeholder.css';
import { StoreContext } from '../../context/Storecontext';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function PlaceOrder() {
  const { gettotal, token, food_list, cartItems, url } = useContext(StoreContext);
  const [data, setData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    street: "",
    city: "",
    state: "",
    zipcode: "",
    country: "",
    phone: ""
  });

  const onChangeHandle = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setData((data) => ({ ...data, [name]: value }));
  };

  const placeOrder = async (event) => {
    event.preventDefault();
    let orderItems = [];
    food_list.forEach((item) => {
      if (cartItems[item._id] > 0) {
        let itemInfo = { ...item, quantity: cartItems[item._id] };
        orderItems.push(itemInfo);
      }
    });
   let orderdata={
    address:data,
    items:orderItems,
    amount:gettotal()+2
   }
   let response=await axios.post(url+"/api/order/place",orderdata,{headers:{token}});
   if(response.data.success){
    const {session_url}=response.data;
    window.location.replace(session_url);
   }
   else{
    alert("error")
   }
  };
  const navigate=useNavigate();
useEffect(()=>{
  if(!token){
navigate('/cart');
  }
  else if(gettotal()===0){
    navigate('/cart');
  }
},[token])
  return (
    <>
      <form onSubmit={placeOrder} className='place-order'>
        <div className='place-order-left'>
          <p className='title'>Delivery Information</p>
          <div className='multi-fields'>
            <input type='text' name='firstname' onChange={onChangeHandle} value={data.firstname} placeholder='First Name' />
            <input type='text' name='lastname' onChange={onChangeHandle} value={data.lastname} placeholder='Last Name' />
          </div>
          <input type='email' name='email' onChange={onChangeHandle} value={data.email} placeholder='Email Address' />
          <input type='text' name='street' onChange={onChangeHandle} value={data.street} placeholder='Enter Street' />
          <div className='multi-fields'>
            <input type='text' placeholder='City' name='city' onChange={onChangeHandle} value={data.city} />
            <input type='text' placeholder='State' name='state' onChange={onChangeHandle} value={data.state} />
          </div>
          <div className='multi-fields'>
            <input type='text' placeholder='Zip Code' name='zipcode' onChange={onChangeHandle} value={data.zipcode} />
            <input type='text' placeholder='Country' name='country' onChange={onChangeHandle} value={data.country} />
          </div>
          <input type="text" placeholder='Phone No.' name='phone' onChange={onChangeHandle} value={data.phone} />
        </div>
        <div className='place-order-right'>
          <div className='cart-total'>
            <h2>Cart Totals</h2>
            <div>
              <div className='cart-total-details'>
                <p>Subtotal</p>
                <p>${gettotal()}</p>
              </div>
              <hr />
              <div className='cart-total-details'>
                <p>Delivery Fee</p>
                <p>${gettotal() === 0 ? 0 : 2}</p>
              </div>
              <hr />
              <div className='cart-total-details'>
                <p>Total</p>
                <p>${gettotal() === 0 ? 0 : gettotal()+2}</p>
              </div>
            </div>
            <button type='submit'>Proceed to Payment</button>
          </div>
        </div>
      </form>
    </>
  );
}

export default PlaceOrder;
