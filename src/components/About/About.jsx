import React from 'react'
import { Link } from 'react-router-dom'
import logobw from "../../assets/img/logobw.png"
import bgabout from "../../assets/img/bgabout.jpg"
import "./About.css"
import Footer from '../Footer/Footer'

const About = () => {
  return (
    <div className='about'>
      <header>
        <ul className='navbarMenu'>
          <div className='locompany'>
            <li><img src={logobw} alt="logo" className='logo'/></li>
            <li className='companybw'>angkut<span>aja</span></li>
          </div>
          <div className='menus'>
            <li className="menubw"><Link to="/home/angkutaja" >Home</Link></li>
            <li className="menubw"><Link to="/about/" >About</Link></li>
          </div>
        </ul>
      </header>
      <img src={bgabout} alt="bgabout" className='bgabout'/>
      <div className='desc'>
        <h1 className='titleAbout'>About Our Company</h1>
        <p><span>angkutaja</span> adalah platform sewa kendaraan untuk angkut barang yang cepat dan sederhana.</p>
        <p>Layanan kami meliputi layanan jasa angkut barang, pindahan (rumah, kantor, kos dll), penyewaan kendaraan untuk angkut barang, distribusi, dan pengiriman barang dalam jumlah banyak serta besar untuk skala bisnis.</p>
        <p>Dengan <span>angkutaja</span>, kamu bisa menikmati kebahagiaan bersama orang tercinta tanpa capek saat pindah rumah!</p>
      </div>
      <Footer />
    </div>
  )
}

export default About