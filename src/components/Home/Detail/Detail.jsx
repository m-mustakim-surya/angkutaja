import { useLazyQuery, useQuery } from '@apollo/client';
import { useState } from 'react';
import { GetOrders } from "../../../config/query"
import Footer from '../../Footer/Footer';
import Navbar from '../../Navbar/Navbar';
import imgedit from '../../../img/edit.png';
import imgdelete from '../../../img/delete.png';
import './Detail.css';

const Detail = ({ deleteOrder, editOrder }) => {
    const { data, loading, error, refetch } = useQuery(GetOrders);

    const [passengerId, setPassengerId] = useState("")

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;
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
                {data.miniproject_detail.map(({ order_id, user_name, jenis_angkut, jenis_mobil, jarak, harga }) => (
                    <tr key={order_id}>
                        <td>{user_name}</td>
                        <td>{jenis_angkut}</td>
                        <td>{jenis_mobil}</td>
                        <td>{jarak} km</td>
                        <td className='harga'>Rp.{harga}</td>
                        <td onClick={() => editOrder({order_id, user_name, jenis_angkut, jenis_mobil, jarak, harga})}>
                          <button className='editButton'><img src={imgedit} alt="edit button" /></button>
                        </td>
                        <td onClick={() => deleteOrder(order_id)}>
                          <button className='deleteButton'><img src={imgdelete} alt="delete button" /></button>
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

export default Detail;