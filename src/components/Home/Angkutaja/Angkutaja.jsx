import React from 'react'
import Navbar from '../../Navbar/Navbar'
import "./Angkutaja.css"
import webimage from "../../../assets/img/001.jpg"
import webimage2 from "../../../assets/img/002.jpg"
import webimage3 from "../../../assets/img/003.PNG"

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
          <img src={webimage} alt="angkutaja1" />
        </div>
        <div className='banner2'>
          <img src={webimage2} alt="angkutaja2" />
          <div className='bubble2'>
            <div className='bubbledesc'>
              <h1>Kenapa angkutaja?</h1>
              <p>Solusi berbasis teknologi kami memungkinkan pelanggan kami mendapatkan layanan pindahan yang bebas stres, profesional, aman, dan terjangkau. Kami menawarkan berbagai layanan termasuk penyewaan kendaraan, tenaga bantuan, terpal dan pertanggungan asuransi. Pemesanan dapat dilakukan melalui situs web dan aplikasi seluler kami yang ramah pengguna.</p>
            </div>
          </div>
          <div className='bubblesmall2'></div>
        </div>
        <div className='banner3'>
          <img src={webimage3} alt="angkutaja2" />
          <div className='bannerdesc'>
              <h1>Info Selengkapnya</h1>
              <p>Untuk informasi lebih lanjut, silahkan buka halaman About atau bisa langsung <span>menghubungi kami</span></p>
            </div>
        </div>
        <div className='footerAngkutaja'>
            <p>&copy; 2022 angkutaja. M. Mustakim Surya</p>
        </div>
    </div>
  )
}

export default Angkutaja