import React from 'react'
import NavbarHome from './NavbarHome'
import NavbarMenu from './NavbarMenu'
import "./Navbar.css"

const Navbar = () => {
  return (
    <div className='navbar'>
        <NavbarMenu />
        <NavbarHome />
    </div>
  )
}

export default Navbar