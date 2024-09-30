import React, { useContext, useState } from 'react'
import './cart.css';

import { StoreContext } from '../../context/Storecontext';
import { useNavigate } from 'react-router-dom';
const cart = () => {
  const {cartItems,food_list,removefromcart,gettotal,url}=useContext(StoreContext);
const navigate=useNavigate();


  return (
    <div className='cart'>
      <div className='cart-items'>
        <div className='cart-items-title new'>
          <p>Items</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <br/>
<hr/>
{food_list.map((item,index)=>{
  if(cartItems[item._id]>0){
    return(
      <>
      <div key={item._id} className='cart-items-title cart-items-item'>
        <img src={url+"/images/"+item.image} alt=""/>
        <p>{item.name}</p>
        <p>${item.price}</p>
        <p>{cartItems[item._id]}</p>
        <p>${item.price*cartItems[item._id]}</p>
        <p onClick={()=>removefromcart(item._id)} className='cross'>x</p>
        </div>
        <hr/>
        </>
        

    )
  }
})}
      </div>
      <div className='cart-bottom'>
        <div className='cart-total'>
          <h2>cart totals</h2>
          <div>
          <div className='cart-total-details'>
<p>subtotal</p>
<p>${gettotal()}</p>
<hr/>
          </div>
          <div className='cart-total-details'>
            <p>delivery fee</p>
            <p>{gettotal()===0?0:2}</p>
          </div>
          <hr/>
          <div className='cart-total-details'>
            <p>Total</p>
            <p>${gettotal()===0?0:gettotal()+2}</p>
          </div>
        </div>
        <button onClick={()=>navigate('/order')}>proceed to checkout</button>
      </div>
</div>
    </div>
  )
}

export default cart


