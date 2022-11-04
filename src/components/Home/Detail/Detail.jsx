import { useMutation } from "@apollo/client"
import { createDetail, deleteDetailById, GetDetails, updateDetailById } from "../../../config/query";
import { useState } from "react";
import Footer from '../../Footer/Footer';
import Navbar from '../../Navbar/Navbar';
// import InputDetail from './InputDetail';
import ListDetail from './ListDetail';
import UpdateDetail from './UpdateDetail';
import './Detail.css';

const Detail = () => {
  const [insertDetail] = useMutation(createDetail, { refetchQueries: [{ query: GetDetails }] })
  const [deleteDetail] = useMutation(deleteDetailById, { refetchQueries: [{ query: GetDetails }] })
  const [updateDetail] = useMutation(updateDetailById, { refetchQueries: [{ query: GetDetails }] })

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
              jenis_angkut: newData.jenis_angkut,
              jenis_mobil: newData.jenis_mobil,
              jarak: newData.jarak,
              harga: newData.harga
          },
      });
  };

  const [edit, setEdit] = useState({
      order_id: "",
      user_name: "",
      jenis_angkut: "",
      jenis_mobil: "",
      jarak: "",
      harga: ""
  });

  const onClickEdit = (data) => {
      setEdit({
          order_id: data.order_id,
          user_name: data.user_name,
          jenis_angkut: data.jenis_angkut,
          jenis_mobil: data.jenis_mobil,
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
              jenis_angkut: editData.jenis_angkut,
              jenis_mobil: editData.jenis_mobil,
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
      {/* <InputDetail 
        tambahDetail={tambahDetail}
      /> */}
      <UpdateDetail  edit={edit} editDetail={editDetail} />
      {/* <Footer /> */}
    </div>
  )
}

export default Detail;