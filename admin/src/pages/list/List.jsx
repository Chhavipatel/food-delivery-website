import React, { useEffect, useState } from 'react'
import './list.css'
import axios from 'axios';
import {toast} from 'react-toastify';
const List = ({url}) => {
  // const url='http://localhost:8080';

  const [list,setlist]=useState([]);
  const fetchlist=async()=>{
    const response=await axios.get(`${url}/api/food/list`);
    // console.log(response.data);
    if(response.data.success){
      setlist(response.data.data)
    }
    else{
      toast.error("Eroor");
    }
  }
  const removefood=async(foodid)=>{
    
    console.log(foodid);
const response=await axios.post(`${url}/api/food/remove`,{id:foodid});
console.log(response.data);
console.log("pressed");
await fetchlist();
if(response.data.success){
toast.success("removed successfully");
}
else{
  toast.error("error");
}
  }
  useEffect(()=>{
fetchlist();
  },[])
  return (
    <div className='list add flex-col'>
      <p className='newfoodlist'> Food List</p>
      <div className='list-table'>
        <div className='list-table-format title'>
          <b>image</b>
          <b>name</b>
          <b>category</b>
          <b>price</b>
          <b>action</b>

        </div>
        {list.map((item,index)=>{
          return(
            <div key={index} className='list-table-format'>
              <img src={`${url}/images/`+item.image} alt=''/>
              <p>{item.name}</p>
              <p>{item.category}</p>
              <p>{item.price}</p>
              <p className='cross' onClick={()=>removefood(item._id)}>X</p>
              </div>
          )
        })}
      </div>
    </div>
  )
}

export default List
