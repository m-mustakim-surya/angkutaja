import React from 'react'
import Footer from '../../Footer/Footer'
import Navbar from '../../Navbar/Navbar'
import './Detail.css'

const Detail = () => {
  return (
    <div>
      <Navbar />
      <div className='detail'>
        <h1>Detail Order</h1>
      </div>
      <table>
        <thead>
          <tr>
            <th>Nama</th>
            <th>Jenis angkut</th>
            <th>Jenis mobil</th>
            <th>Total jarak</th>
            <th>Harga</th>
            <th></th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>M. Mustakim Surya</td>
            <td>Satu kendaraan</td>
            <td>Mobil L300 Bak</td>
            <td>30 km</td>
            <td className='harga'>Rp.300.000</td>
            <td>Edit</td>
            <td>Delete</td>
          </tr>
          <tr>
            <td>Reza Icikiwir</td>
            <td>Muat sebagian</td>
            <td>Mobil Pickup</td>
            <td>15 km</td>
            <td className='harga'>Rp.50.000</td>
            <td>Edit</td>
            <td>Delete</td>
          </tr>
        </tbody>
      </table>
      <Footer />
    </div>
  )
}

export default Detail