import { useQuery } from '@apollo/client';
import { GetOrders } from "../../../config/query"
import { NumericFormat } from 'react-number-format';
import imgedit from '../../../assets/img/edit.png';
import imgdelete from '../../../assets/img/delete.png';
import svgload from '../../../assets/img/load.svg'

const ListDetail = ({ hapusDetail, onClickEdit }) => {
  const { data, loading, error } = useQuery(GetOrders);

  if (loading) {
    return <img src={svgload} alt="load" className='warn'/>;
  }

  if (error){
    return <p className='warn'>Error</p>;
  }
  
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Nama</th>
            <th>Nomor telepon</th>
            <th>Jenis angkut</th>
            <th>Jenis mobil</th>
            <th>Total jarak</th>
            <th>Harga</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {data.angkutaja_order.map(({ order_id, user_name, user_telepon, waktu, jenis_angkut, jenis_mobil, alamat_jemput, alamat_tujuan, jarak, harga }) => (
            <tr key={order_id} className='rowdetail'>
              <td>{user_name}</td>
              <td>{user_telepon}</td>
              <td>{jenis_angkut}</td>
              <td>{jenis_mobil}</td>
              <td>{jarak} km</td>
              <td className='harga'><NumericFormat value={harga} displayType={'text'} thousandSeparator={true} prefix={'Rp.'} /></td>
              <td >
                <button className='editButton' onClick={() => onClickEdit({order_id, user_name, user_telepon, waktu, jenis_angkut, jenis_mobil, alamat_jemput, alamat_tujuan, jarak, harga})}> <img src={imgedit} alt="edit button" /></button>
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