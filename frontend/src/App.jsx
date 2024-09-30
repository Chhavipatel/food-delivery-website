
import './App.css'
import Navbar from './components/Navbar/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home/home';
import Cart from './pages/cart/cart';
import Placeorder from './pages/placeorder/placeorder';
import Verify from './pages/verify/Verify';
import Myorders from './pages/myorders/Myorders';
import Footer from './components/Footer/Footer';
import { useState } from 'react';
import Loginpopup from './components/Loginpopup/Loginpopup';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function App() {
  const [showlogin,setshowlogin]=useState(false);
  return (
    <>
     <ToastContainer/>
    {showlogin?<Loginpopup setshowlogin={setshowlogin}/>:<></>}
    <div className='app'>
      <Navbar setshowlogin={setshowlogin}/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/order' element={<Placeorder/>}/>
        <Route path='/verify' element={<Verify/>}/>
        <Route path='/myorders' element={<Myorders/>}/>
      </Routes>
    </div>
    <Footer/>
    </>
  )
}

export default App
