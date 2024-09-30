import React from 'react'
import './Header.css'
import { assets } from '../../assets/frontend_assets/assets'
const Header = () => {
  return (
    <div className='header'>
        {/* <div className="header-contents">
            <h2>order your food here</h2> */}
        {/* </div> */}
          <img src={assets.new2} alt=""/>
      
    </div>
  )
}

export default Header
