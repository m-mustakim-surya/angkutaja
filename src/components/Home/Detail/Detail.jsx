import { useMutation } from "@apollo/client"
import { createOrder, deleteOrderById, GetOrders, updateOrderById } from "../../../config/query";
import { useState } from "react";
import Footer from '../../Footer/Footer';
import Navbar from '../../Navbar/Navbar';
import ListDetail from './ListDetail';
import UpdateDetail from './UpdateDetail';
import './Detail.css';

const Detail = () => {
  const [insertDetail] = useMutation(createOrder, { refetchQueries: [{ query: GetOrders }] })
  const [deleteDetail] = useMutation(deleteOrderById, { refetchQueries: [{ query: GetOrders }] })
  const [updateDetail] = useMutation(updateOrderById, { refetchQueries: [{ query: GetOrders }] })

  const removeDetail = order_ids => {
    deleteDetail({
      variables: {
        order_id: order_ids,
      },
    });
  };

  const tambahDetail = newUser => {
    const newData = {
      ...newUser,
    };
    insertDetail({
      variables: {
        user_name: newData.user_name,
        user_telepon: newData.user_telepon,
        waktu: newData.waktu,
        jenis_angkut: newData.jenis_angkut,
        jenis_mobil: newData.jenis_mobil,
        alamat_jemput: newData.alamat_jemput,
        alamat_tujuan: newData.alamat_tujuan,
        jarak: newData.jarak,
        harga: newData.harga
      },
    });
  };

  const [edit, setEdit] = useState({
    order_id: "",
    user_name: "",
    user_telepon: "",
    waktu: "",
    jenis_angkut: "",
    jenis_mobil: "",
    alamat_jemput: "",
    alamat_tujuan: "",
    jarak: "",
    harga: ""
  });

  const onClickEdit = (data) => {
    setEdit({
      order_id: data.order_id,
      user_name: data.user_name,
      user_telepon: data.user_telepon,
      waktu: data.waktu,
      jenis_angkut: data.jenis_angkut,
      jenis_mobil: data.jenis_mobil,
      alamat_jemput: data.alamat_jemput,
      alamat_tujuan: data.alamat_tujuan,
      jarak: data.jarak,
      harga: data.harga
    });
  };

  const editDetail = updateUser => {
    const editData = {
      ...updateUser,
    };
    updateDetail({
      variables: {
        order_id: editData.order_id,
        user_name: editData.user_name,
        user_telepon: editData.user_telepon,
        waktu: editData.waktu,
        jenis_angkut: editData.jenis_angkut,
        jenis_mobil: editData.jenis_mobil,
        alamat_jemput: editData.alamat_jemput,
        alamat_tujuan: editData.alamat_tujuan,
        jarak: editData.jarak,
        harga: editData.harga
      },
    });
  }

  return (
    <div>
      <Navbar />
      <div className='detail'>
        <h1>Detail Order</h1>
      </div>
      <ListDetail 
        hapusDetail={removeDetail}
        editDetail={editDetail}
        onClickEdit={onClickEdit}
      />
      <UpdateDetail  edit={edit} editDetail={editDetail} />
      {/* <Footer /> */}
    </div>
  )
}

export default Detail;