import React from 'react'
import Navbar from '../../Navbar/Navbar'
import "./Order.css"
import Footer from '../../Footer/Footer'
import InputOrder from './InputOrder'
import { useMutation } from '@apollo/client'
import { createOrder, GetOrders } from '../../../config/query'

const Order = () => {
  const [insertOrder] = useMutation(createOrder, { refetchQueries: [{ query: GetOrders }] })

  const tambahOrder = newUser => {
    const newData = {
        ...newUser,
    };
    insertOrder({
        variables: {
          user_name: newData.user_name,
          user_telepon: newData.user_telepon,
          waktu: newData.waktu,
          jenis_angkut: newData.jenis_angkut,
          jenis_mobil: newData.jenis_mobil,
          alamat_jemput: newData.alamat_jemput,
          alamat_tujuan: newData.alamat_tujuan
        },
    });
  };
  return (
    <div>
      <Navbar/>
      <InputOrder tambahOrder={tambahOrder}/>
      <Footer/>
    </div>
  )
}

export default Order