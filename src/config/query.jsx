import { gql } from "@apollo/client";

export const GetOrders = gql`
query GetOrders {
  miniproject_order {
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
`;

export const createOrder = gql`
mutation createOrder($user_name: String, $user_telepon: String, $waktu: date, $jenis_angkut: String, $jenis_mobil: String, $alamat_jemput: String, $alamat_tujuan: String) {
  insert_miniproject_order(objects: {user_name: $user_name, user_telepon: $user_telepon, waktu: $waktu, jenis_angkut: $jenis_angkut, jenis_mobil: $jenis_mobil, alamat_jemput: $alamat_jemput, alamat_tujuan: $alamat_tujuan}) {
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

export const GetDetails = gql`
query GetDetails {
  miniproject_detail {
    order_id
    user_name
    jenis_angkut
    jenis_mobil
    jarak
    harga
  }
}
`;

export const createDetail = gql`
mutation createDetail($user_name: String, $jenis_angkut: String, $jenis_mobil: String, $jarak: Int, $harga: Int) {
  insert_miniproject_detail (objects: {user_name: $user_name, jenis_angkut: $jenis_angkut, jenis_mobil: $jenis_mobil, jarak: $jarak, harga: $harga}) {
    returning {
      order_id
      user_name
      jenis_angkut
      jenis_mobil
      jarak
      harga
    }
  }
}
`;

export const deleteDetailById = gql`
mutation deleteDetailById($order_id: uuid) {
  delete_miniproject_detail(where: {order_id: {_eq: $order_id}}) {
    returning {
      order_id
      user_name
      jenis_angkut
      jenis_mobil
      jarak
      harga
    }
  }
}
`;

export const updateDetailById = gql`
mutation updateDetailById($order_id: uuid, $user_name: String, $jenis_angkut: String, $jenis_mobil: String, $jarak: Int, $harga: Int) {
  update_miniproject_detail(where: {order_id: {_eq: $order_id}}, _set: {user_name: $user_name, jenis_angkut: $jenis_angkut, jenis_mobil: $jenis_mobil, jarak: $jarak, harga: $harga}) {
    returning {
      order_id
      user_name
      jenis_angkut
      jenis_mobil
      jarak
      harga
    }
  }
}
`;