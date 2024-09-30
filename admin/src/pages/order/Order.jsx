// import React from 'react'
// import './order.css'
// import { toast } from 'react-toastify'
// import { useState } from 'react'
// import { useEffect } from 'react'
// import axios from 'axios';
// import { assets } from '../../assets/assets'


// const Order = ({url}) => {
//   const [orders,setorders]=useState([]);
//   const fetchallorders=async()=>{
// const response=await axios.get(url+"/api/order/list");
// if(response.data.success){
//   setorders(response.data.data);
//   console.log(response.data.data);
// }
// else{
// toast.error("error");
// }
//   }
// const statushandler=async(event,orderid)=>{
// const response=await axios.post(url+"/api/order/status",{
//   orderid,
//   status:event.target.value
// })
// if(response.data.success){
//   await fetchallorders();
// }
// }
//   useEffect(()=>{
// fetchallorders();
//   },[])
//   return (
//     <div className='order add'>
//       <h3>order page</h3>
//       <div className='order-list'>
//         {orders.map((order,index)=>{
//           <div key={index} className='order-item'>
// <img src={assets.parcel_icon} alt=""/>
// <div>
//   <p className='order-item-food'>
//     {order.items.map((item,index)=>{
//       if(index===order.items.length-1){
//         return item.name+"x"+item.quantity
//       }
//       else{
//         return item.name+"x"+item.quantity+","
//       }
//     })}
//   </p>
//   <p className='order-item-name'>{order.address.firstname+" "+order.address.lastname}</p>
//   <div className='order-item-address'>
//    <p> {order.address.street+","}
//   </p>
//   <p>{order.address.city+","+order.address.state+","+order.address.country+","+order.address.zipcode}</p>
//   </div>
//   <p className="order-item-phone">{order.address.phone}</p>
// </div>
// <p>Items:{order.items.length}</p>
// <p>${order.amount}</p>
// <select onChange={(event)=>statushandler(event,order._id)} value={order.status}>
//   <option value="food processing">food processing</option>
//   <option value="out for delivery">out for delivery</option>
//   <option value="delivered">delivered</option>
// </select>
//           </div>
//         })}

//       </div>
//     </div>
//   )
// }

// export default Order

import React from 'react'
import './order.css'
import { toast } from 'react-toastify'
import { useState } from 'react'
import { useEffect } from 'react'
import axios from 'axios';
import { assets } from '../../assets/assets'

const Order = ({url}) => {
  const [orders, setOrders] = useState([]);

  const fetchAllOrders = async () => {
    const response = await axios.get(url + "/api/order/list");
    if (response.data.success) {
      setOrders(response.data.data);
    } else {
      toast.error("Error fetching orders");
    }
  };

  const statusHandler = async (event, orderId) => {
    console.log(event,orderId);
    const response = await axios.post(url + "/api/order/status", {
      orderId,
      status: event.target.value,
    });
    if (response.data.success) {
      await fetchAllOrders();
    }
  };

  useEffect(() => {
    fetchAllOrders();
  }, []);

  return (
    <div className='order add'>
      <h3>Order Page</h3>
      <div className='order-list'>
        {orders.map((order, index) => (
          <div key={index} className='order-item'>
            <img src={assets.parcel_icon} alt="" />
            <div>
              <p className='order-item-food'>
                {order.items.map((item, index) => {
                  if (index === order.items.length - 1) {
                    return item.name + "x" + item.quantity;
                  } else {
                    return item.name + "x" + item.quantity + ",";
                  }
                })}
              </p>
              <p className='order-item-name'>
                {order.address.firstname + " " + order.address.lastname}
              </p>
              <div className='order-item-address'>
                <p>{order.address.street + ","}</p>
                <p>{order.address.city + "," + order.address.state + "," + order.address.country + "," + order.address.zipcode}</p>
              </div>
              <p className="order-item-phone">{order.address.phone}</p>
            </div>
            <p>Items: {order.items.length}</p>
            <p>${order.amount}</p>
            <select onChange={(event) => statusHandler(event, order._id)} value={order.status}>
              <option value="food processing">food processing</option>
              <option value="out for delivery">out for delivery</option>
              <option value="delivered">delivered</option>
            </select>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Order;

