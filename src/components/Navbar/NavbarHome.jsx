import React from 'react'
import { Link } from 'react-router-dom'

const NavbarHome = () => {
  return (
    <nav>
        <ul className='navbarHome'>
            <li><button className='navigateMain'><Link to="/home/angkutaja">angkutaja</Link></button></li>
            <li><button className='navigate'><Link to="/home/order">Order</Link></button></li>
            <li><button className='navigate'><Link to="/home/detail">Detail</Link></button></li>
        </ul>
    </nav>
  )
}

export default NavbarHome