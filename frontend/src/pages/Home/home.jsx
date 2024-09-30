import React, { useState } from 'react'
import './home.css';
import Header from '../../components/Header/Header';
import Exploremenu from '../../components/Exploremenu/Exploremenu';
import Fooddisplay from '../../components/fooddisplay/Fooddisplay';
const home = () => {
  const [category,setCategory]=useState("all");
  return (
    <div>
      <Header/>
      <Exploremenu category={category} setCategory={setCategory}/>
      <Fooddisplay category={category}/>
    </div>
  )
}

export default home
