import { gql } from "@apollo/client";

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