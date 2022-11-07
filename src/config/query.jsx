import { gql } from "@apollo/client";

export const GetOrders = gql`
query GetOrders {
  angkutaja_order {
    order_id
    user_name
    user_telepon
    waktu
    jenis_angkut
    jenis_mobil
    alamat_jemput
    alamat_tujuan
    jarak
    harga
  }
}
`;

export const createOrder = gql`
mutation createOrder($user_name: String, $user_telepon: String, $waktu: date, $jenis_angkut: String, $jenis_mobil: String, $alamat_jemput: String, $alamat_tujuan: String) {
  insert_angkutaja_order(objects: {user_name: $user_name, user_telepon: $user_telepon, waktu: $waktu, jenis_angkut: $jenis_angkut, jenis_mobil: $jenis_mobil, alamat_jemput: $alamat_jemput, alamat_tujuan: $alamat_tujuan}) {
    returning {
      order_id
      user_name
      user_telepon
      waktu
      jenis_angkut
      jenis_mobil
      alamat_jemput
      alamat_tujuan
    }
  }
}
`;

export const deleteOrderById = gql`
mutation deleteOrderById($order_id: uuid) {
  delete_angkutaja_order(where: {order_id: {_eq: $order_id}}) {
    returning {
      order_id
      user_name
      user_telepon
      waktu
      jenis_angkut
      jenis_mobil
      alamat_jemput
      alamat_tujuan
      jarak
      harga
    }
  }
}
`;

export const updateOrderById = gql`
mutation updateOrderById($order_id: uuid, $user_name: String, $user_telepon: String, $waktu: date, $jenis_angkut: String, $jenis_mobil: String, $alamat_jemput: String, $alamat_tujuan: String, $jarak: Int, $harga:Int) {
  update_angkutaja_order(where: {order_id: {_eq: $order_id}}, _set: {user_name: $user_name, user_telepon: $user_telepon, waktu: $waktu, jenis_angkut: $jenis_angkut, jenis_mobil: $jenis_mobil, alamat_jemput: $alamat_jemput, alamat_tujuan: $alamat_tujuan, jarak: $jarak, harga: $harga}) {
    returning {
      order_id
      user_name
      user_telepon
      waktu
      jenis_angkut
      jenis_mobil
      alamat_jemput
      alamat_tujuan
      jarak
      harga
    }
  }
}
`;