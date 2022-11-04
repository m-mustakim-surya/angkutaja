import React from 'react'
import { useQuery } from '@apollo/client';
import { GetDetails } from "../../../config/query"
import { NumericFormat } from 'react-number-format';
import imgedit from '../../../img/edit.png';
import imgdelete from '../../../img/delete.png';
import svgload from '../../../img/load.svg'

const ListDetail = ({ hapusDetail, onClickEdit }) => {
  const { data, loading, error } = useQuery(GetDetails);

  if (loading) {
    return <img src={svgload} alt="load" className='warn'/>;
  }

  if (error){
    return <p className='warn'>Error :(</p>;
  }
  
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Nama</th>
            <th>Jenis angkut</th>
            <th>Jenis mobil</th>
            <th>Total jarak</th>
            <th>Harga</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {data.miniproject_detail.map(({ order_id, user_name, jenis_angkut, jenis_mobil, jarak, harga }) => (
            <tr key={order_id} className='rowdetail'>
              <td>{user_name}</td>
              <td>{jenis_angkut}</td>
              <td>{jenis_mobil}</td>
              <td>{jarak} km</td>
              <td className='harga'><NumericFormat value={harga} displayType={'text'} thousandSeparator={true} prefix={'Rp.'} /></td>
              <td >
                <button className='editButton' onClick={() => onClickEdit({order_id, user_name, jenis_angkut, jenis_mobil, jarak, harga})}><img src={imgedit} alt="edit button" /></button>
                <button className='deleteButton' onClick={() => hapusDetail(order_id)}><img src={imgdelete} alt="delete button" /></button>
              </td>
            </tr>
          )
          )}
        </tbody>
      </table>
    </div>
  )
}

export default ListDetail