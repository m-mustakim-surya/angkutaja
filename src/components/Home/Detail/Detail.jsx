import React from 'react'
import { useLazyQuery, useQuery } from '@apollo/client';
import { GetOrders, GetOrderById } from "../../../config/query"
import Footer from '../../Footer/Footer'
import Navbar from '../../Navbar/Navbar'
import './Detail.css'

const Detail = ({ deleteOrder, onClickEdit }) => {
  const { data } = useQuery(GetOrders);

  const { data: orderByIdData } = useLazyQuery(GetOrderById);
  

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
          {orderByIdData ? orderByIdData.miniproject_detail?.map(({ order_id, user_name, jenis_angkut, jenis_mobil, jarak, harga }) => (
            <tr key={order_id}>
              <td>{user_name}</td>
              <td>{jenis_angkut}</td>
              <td>{jenis_mobil}</td>
              <td>{jarak} km</td>
              <td className='harga'>Rp.{harga}</td>
              <td
                onClick={() => onClickEdit({order_id, user_name, jenis_angkut, jenis_mobil, jarak, harga})}
                >
                  <button>Edit</button>
              </td>
              <td
                onClick={() => deleteOrder(order_id)}
                >
                  <button>Delete</button>
              </td>
            </tr>

          )
          ) : data.miniproject_detail.map(({ order_id, user_name, jenis_angkut, jenis_mobil, jarak, harga }) => (
            <tr key={order_id}>
              <td>{user_name}</td>
              <td>{jenis_angkut}</td>
              <td>{jenis_mobil}</td>
              <td>{jarak} km</td>
              <td className='harga'>Rp.{harga}</td>
              <td
                onClick={() => onClickEdit({order_id, user_name, jenis_angkut, jenis_mobil, jarak, harga})}
                >
                  <button>Edit</button>
              </td>
              <td
                onClick={() => deleteOrder(order_id)}
                >
                  <button>Delete</button>
              </td>
            </tr>
          )
          )}
        </tbody>
      </table>
      <Footer />
    </div>
  )
}

export default Detail