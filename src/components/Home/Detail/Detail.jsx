import { useMutation } from "@apollo/client"
import { deleteOrderById, GetOrders, updateOrderById } from "../../../config/query";
import { useState } from "react";
import Navbar from '../../Navbar/Navbar';
import ListDetail from './ListDetail';
import UpdateDetail from './UpdateDetail';
import Swal from "sweetalert2";
import './Detail.css';

const Detail = () => {
  const [deleteDetail] = useMutation(deleteOrderById, { refetchQueries: [{ query: GetOrders }] })
  const [updateDetail] = useMutation(updateOrderById, { refetchQueries: [{ query: GetOrders }] })

  const removeDetail = order_ids => {
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: 'btn btn-success',
        cancelButton: 'btn btn-danger'
      },
      buttonsStyling: true
    })
    
    swalWithBootstrapButtons.fire({
      title: 'Anda yakin?',
      text: "Order pengangkutan yang terhapus tidak bisa dikembalikan",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Delete',
      cancelButtonText: 'Cancel',
      reverseButtons: true
    }).then((result) => {
      if (result.isConfirmed) {
        deleteDetail({
          variables: {
            order_id: order_ids,
          },
        });
        swalWithBootstrapButtons.fire(
          'Deleted',
          'Order pengangkutan yang dipilih telah terhapus!',
          'success'
        )
      } else if (
        result.dismiss === Swal.DismissReason.cancel
      ) {
        swalWithBootstrapButtons.fire(
          'Cancelled',
          'Penghapusan order pengangkutan dibatalkan',
          'error'
        )
      }
    })
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
    </div>
  )
}

export default Detail;