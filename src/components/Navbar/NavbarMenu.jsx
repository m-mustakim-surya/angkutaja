import React from 'react';
import logo from "../../img/logo.png";
import { Link } from 'react-router-dom';

const NavbarMenu = () => {
  return (
    <header>
        <ul className='navbarMenu'>
          <div className='locompany'>
            <li><img src={logo} alt="logo" className='logo'/></li>
            <li className='company'>angkut<span>aja</span></li>
          </div>
          <div className='menus'>
            <li className="menu"><Link to="/home/angkutaja" >Home</Link></li>
            <li className="menu"><Link to="/about/" >About</Link></li>
          </div>
        </ul>
    </header>
  )
}

export default NavbarMenu