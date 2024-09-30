import React, { useContext } from 'react'
import './fooddisplay.css'
import Fooditem from '../../components/Fooditem/Fooditem';
import { StoreContext } from '../../context/Storecontext'
const Fooddisplay = ({category}) => {

    const {food_list}=useContext(StoreContext);
  return (
    <div>
      <div className='food-display' id='food-display'>
        <h2>top dishes near you</h2>
        <div className='food-display-list'>
            {food_list.map((item,index)=>{
              if(category==='all' || category==item.category){
                return <Fooditem key={index} id={item._id} name={item.name} description={item.desription} price={item.price} image={item.image}/>
              }
            })}
        </div>
      </div>
    </div>
  )
}

export default Fooddisplay
