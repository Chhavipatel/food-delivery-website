import React, { useEffect, useState } from 'react'
import './add.css'
import { assets } from '../../assets/assets'
import axios from 'axios';
import { toast } from 'react-toastify';
const Add = ({url}) => {
// const url='http://localhost:8080';
    const [image,setimage]=useState(false);
    const [data,setdata]=useState({
        name:"",
        description:"",
        price:"",
        category:"salad"
    })

    const onChangehandle=(event)=>{
const name=event.target.name;
const value=event.target.value;
setdata(data=>({...data,[name]:value}))
    }

  const onsubmithandle=async(event)=>{
event.preventDefault();
const formdata=new FormData();
formdata.append("name",data.name);
formdata.append("description",data.description);
formdata.append("price",Number(data.price));
formdata.append("category",data.category);
formdata.append("image",image);
const response=await axios.post(`${url}/api/food/add`,formdata);
if(response.data.success){
    setdata({
    name:"",
    description:"",
    price:"",
    category:"salad"
    })
    console.log(formdata)
    toast.success(response.data.message);
}
else{
setdata(false);
toast.error(response.data.message);
}

  }
  return (
    <div className='add'>
  <form className='flex-col' onSubmit={onsubmithandle}>

    <div className='add-img-upload flex-col'>
        <p>upload image</p>
        <label htmlFor='image'>
            <img src={image?URL.createObjectURL(image):assets.upload_area} alt=""/>
        </label>
        <input onChange={(e)=>setimage(e.target.files[0])} type='file' id="image" hidden required/>
    </div>
    <div className='add-product-name flex-col'>
        <p>product name</p>
        <input onChange={onChangehandle} value={data.name} type='text' name='name' placeholder='type here'/>
    </div>
    <div className='add-product-description flex-col'>
        <p>product description</p>
        <textarea name="description" onChange={onChangehandle} value={data.description} rows="6" placeholder='write content here' required></textarea>

    </div>
    <div className="add-category-price">
        <div className='add-category flex-col'>
            <p>product category</p>
            <select onChange={onChangehandle} name='category'>
                <option value="salad">salad</option>
                <option value="rolls">rolls</option>
                <option value="deserts">deserts</option>
                <option value="sandwich">sandwich</option>
                <option value="cake">cake</option>
                <option value="pure veg">pure veg</option>
                <option value="pasta">pasta</option>
                <option value="noodles">noodles</option>
                

            </select>
        </div>
        <div className='add-price flex-col'>
            <p>product price</p>
<input type="Number" onChange={onChangehandle} value={data.price} name="price" placeholder='$30'/>
        </div>
    </div>
    <button type="submit" className='add-btn'>add</button>
    </form>      
    </div>
  )
}

export default Add
