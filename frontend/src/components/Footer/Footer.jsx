import React from 'react'
import './Footer.css'
import {assets} from '../../assets/frontend_assets/assets'
const Footer = () => {
  return (

    <div className='footer' id='footer'>
      <div className="footer-content">
        <div className="footer-content-left">
            <p>This food delivery website is a full-stack project developed using the MERN stack, featuring a client-side interface and an admin panel for order management. It is created to demonstrate web development skills, including frontend design, backend functionality, and database integration.</p>
         <div className="footer-social-icons">
         <img src={assets.twitter_icon} alt=""/>
 <img src={assets.twitter_icon} alt=""/>
 <img src={assets.linkedin_icon} alt=""/>
         </div>
 

        </div>
        <div className="footer-content-center">
        <h2 >company</h2>
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Delivery</li>
          <li>Privacy Policy</li>
        </ul>
        </div>
        <div className="footer-content-right">
          <h2>Get In Touch</h2>
          <ul>
            <li>+91-6396240984</li>
            <li>Patelchhavi485@gmail.com</li>
          
          </ul>
        </div>
      </div>
      <hr/>
      <p className='footer-copyright'>Copyright 2024 @Chhavi Patel-All right Reserved</p>
  </div>
  )
}

export default Footer
