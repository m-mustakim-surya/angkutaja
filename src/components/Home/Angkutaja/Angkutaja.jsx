import React from 'react'
import Navbar from '../../Navbar/Navbar'
import "./Angkutaja.css"
import webimage from "../../../img/001.jpg"

const Angkutaja = () => {
  return (
    <div>
        <Navbar />
        <div className='banner1'>
          <div className='bubble'>
            <div className='bubbledesc'>
              <h1>Solusi buat kamu yang mager pindahan</h1>
              <h3>angkutaja</h3>
              <h2>#Kebut Yahut</h2>
            </div>
          </div>
          <div className='bubblesmall'></div>
          <img src={webimage} alt="" />
        </div>
        <div className='footerAngkutaja'>
            <p>&copy; 2022 angkutaja.</p>
        </div>
    </div>
  )
}

export default Angkutaja