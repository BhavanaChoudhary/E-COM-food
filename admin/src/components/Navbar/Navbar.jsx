import React from 'react'
import './Navbar.css'
import { assets } from '../../assets/assets'
import Login from '../../pages/Login/Login'
const Navbar = () => {
  return (
    <div className='navbar'>
        <img className='logo' src={assets.logo} alt="" />
        <img className='profile' src={assets.profile_image} alt="" />
        <Login/>   
    </div>
  )
}

export default Navbar
