import { useState } from "react"
import { createOrder, GetOrders } from "../../../config/query"
import { useMutation } from "@apollo/client"
import orderimg from '../../../img/order2.PNG'

function InputOrder(props) {
  const [insertOrder] = useMutation(createOrder, { refetchQueries: [{ query: GetOrders }] })
  
  const tambahOrder = newUser => {
    const newData = {
        ...newUser,
    };
    insertOrder({
        variables: {
            user_name: newData.user_name,
            user_telepon: newData.user_telepon,
            waktu: newData.waktu,
            jenis_angkut: newData.jenis_angkut,
            jenis_mobil: newData.jenis_mobil,
            alamat_jemput: newData.alamat_jemput,
            alamat_tujuan: newData.alamat_tujuan
        },
    });
  };

  const [state, setState] = useState({
    user_name: "",
    user_telepon: "",
    waktu: "",
    jenis_angkut: "",
    jenis_mobil: "",
    alamat_jemput: "",
    alamat_tujuan: "",
    inputing: true,
  })

  const onChange = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (state.user_name.trim() && state.jenis_angkut && state.jenis_mobil) {
      const newData = {
        user_name: state.user_name,
        user_telepon: state.user_telepon,
        waktu: state.waktu,
        jenis_angkut: state.jenis_angkut,
        jenis_mobil: state.jenis_mobil,
        alamat_jemput: state.alamat_jemput,
        alamat_tujuan: state.alamat_tujuan
      }
      props.tambahOrder(newData)
      setState({
        ...state,
        user_name: "",
        user_telepon: "",
        waktu: "",
        jenis_angkut: "",
        jenis_mobil: "",
        alamat_jemput: "",
        alamat_tujuan: "",
      })
    } else {
      alert("Lengkapi data terlebih dahulu!")
    }
  }

  const handleBukaInput = () => {
    setState({
      ...state,
      inputing: false,
    })
  }

  const handleTutupInput = () => {
    setState({
      ...state,
      inputing: true,
    })
  }

  return (
    <div>
      <div className="order">
        <form onSubmit={handleSubmit}>
          <h1>Order</h1>
          <div className="tabs">
            <div className="tabInput">
              <div className="tab1">
                <label>Nama</label>
                <input type="text" className="input-text" placeholder="Nama lengkap" value={state.user_name} name="user_name" onChange={onChange} />
                <label>Nomor telepon</label>
                <input type="text" className="input-text" placeholder="Nomor telepon" value={state.user_telepon} name="user_telepon" onChange={onChange} />
                <label>Tanggal pengangkutan</label>
                <input type="date" className="input-text" placeholder="Tanggal pengangkutan" value={state.waktu} name="waktu" onChange={onChange} />
                <label>Jenis angkut</label>
                <select onChange={onChange} value={state.jenis_angkut} name="jenis_angkut">
                  <option selected>Pilih jenis angkut</option>
                  <option value="Satu kendaraan">Satu kendaraan</option>
                  <option value="Angkut sebagian">Angkut sebagian</option>
                </select>
              </div>
              <div className="tab2">
                <label>Jenis mobil</label>
                <select onChange={onChange} value={state.jenis_mobil} name="jenis_mobil">
                  <option selected>Pilih jenis mobil</option>
                  <option value="Mobil Pickup">Mobil Pickup</option>
                  <option value="Mobil L300 Bak">Mobil L300 Bak</option>
                  <option value="Mobil Box">Mobil Box</option>
                  <option value="Mobil Engkel">Mobil Engkel</option>
                </select>
                <label>Alamat penjemputan</label>
                <textarea type="textarea" className="textarea" placeholder="Alamat penjemputan" value={state.alamat_jemput} name="alamat_jemput" onChange={onChange} />
                <label>Alamat tujuan</label>
                <textarea type="textarea" className="textarea" placeholder="Alamat tujuan" value={state.alamat_tujuan} name="alamat_tujuan" onChange={onChange} />
              </div>
              <div className="tab3">
                <img src={orderimg} alt="angkutaja order" />
              </div>
            </div>
          </div>
          <button onClick={handleSubmit} className="buttonSubmit">Submit</button>
        </form>
      </div>
    </div>
  )
}

export default InputOrder