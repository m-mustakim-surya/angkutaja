import React from 'react'
import Navbar from '../../Navbar/Navbar'
import orderimg from '../../../img/order2.PNG'
import "./Order.css"
import Footer from '../../Footer/Footer'

const Order = () => {
  return (
    <div>
      <Navbar/>
      <div className='order'>
        <form>
          <h1>Order</h1>
          <div className='tabs'>
            <div className='tabInput'>
              <div className='tab1'>
                <label>Nama</label>
                <input
                  type="text"
                  name="nama"
                  required
                  />

                <label>Nomor telepon</label>
                <input
                  type="text"
                  name="notel"
                  required
                />

                <label>Tanggal pengangkutan</label>
                <input
                  type="date"
                  name="tanggal"
                  required
                />

                <label>Jenis angkut</label>
                <select
                  name="jenisangkut"
                  required
                >
                  <option value="kendaraan">Satu kendaraan</option>
                  <option value="muatan">Angkut sebagian muatan</option>
                </select>
              </div>
              <div className='tab2'>
                <label>Jenis mobil</label>
                <select
                  name="jenisangkut"
                  required
                >
                  <option value="pickup">Mobil Pickup</option>
                  <option value="bak">Mobil L300 Bak</option>
                  <option value="box">Mobil Box</option>
                  <option value="engkel">Mobil Engkel</option>
                </select>

                <label>Alamat penjemputan</label>
                <textarea type="textarea"/>

                <label>Alamat pengiriman</label>
                <textarea type="textarea"/>
              </div>
            </div>
            <div className='tab3'>
              <img src={orderimg} alt="" />
            </div>
          </div>
          <button
            className="buttonSubmit">
            Submit
          </button>
        </form>
      </div>
      <Footer/>
    </div>
  )
}

export default Order