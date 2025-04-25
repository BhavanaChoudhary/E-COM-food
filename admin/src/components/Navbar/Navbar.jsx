import React, { useState, useEffect } from 'react'
import './Navbar.css'
import { assets } from '../../assets/assets'
import { Link } from 'react-router-dom'

const Navbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('token');
    setIsLoggedIn(!!token);
  }, []);

  return (
    <div className='navbar'>
        <img className='logo' src={assets.logo} alt="" />
        {!isLoggedIn && <Link to="/login" className="login-button">Login</Link>}
        <img className='profile' src={assets.profile_image} alt="" />
    </div>
  )
}

export default Navbar
