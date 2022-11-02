import { gql } from "@apollo/client";

export const GetOrderById = gql`
query GetOrderById($id: uuid) {
  miniproject_detail(where: {order_id: {_eq: $id}}) {
    order_id
    user_name
    jenis_angkut
    jenis_mobil
    jarak
    harga
  }
}

`;
export const GetOrders = gql`
query GetOrders {
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