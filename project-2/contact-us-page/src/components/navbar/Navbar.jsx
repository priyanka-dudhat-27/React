/* eslint-disable no-unused-vars */
import React from 'react'
import styles from './Navbar.module.css'
const Navbar = () => {
  return (
    <div className='container'>
        <nav className={styles.nav}>
            <div className='logo'>
                <img src="/images/logo.png" alt="" />
            </div>
            <ul className={styles.menu_items}>
                <li><a href="#">Home</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Contact</a></li>
            </ul>
        </nav>
    </div>
  )
}

export default Navbar