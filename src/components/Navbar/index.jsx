import React from 'react'
import './style.css'

export default function Navbar() {
  return (
    <div className='navbar-wrapper'>
        <ul>
            <li><img src="src\assets\615px-Food_Network_New_Logo 2.png" alt="" /></li>
            <li><a href="">Home</a></li>
            <li><a href="">About us</a></li>
            <li><a href="">Menu</a></li>
            <li><a href="">Features</a></li>
            <li><a href="">Contact us</a></li>
        </ul>
        <button>Booking Now</button>
    </div>
  )
}