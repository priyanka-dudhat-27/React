/* eslint-disable no-unused-vars */
import React from 'react'

const Navbar = () => {
  return (
    <div>
        <nav className='container'>
            <div className="logo">
                <img src="/images/brand_logo.png" alt="" />
            </div>
            <ul className='menu-items'>
                <li><a href="#">Menu</a></li>
                <li><a href="#">Location</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Contact</a></li>
            </ul>
            <button className='login-btn'>Login</button>
        </nav>
    </div>
  )
}

export default Navbar