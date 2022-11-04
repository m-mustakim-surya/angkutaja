import { useState } from "react"

function InputDetail(props) {
  const [state, setState] = useState({
    user_name: "",
    jenis_angkut: "",
    jenis_mobil: "",
    jarak: "",
    harga: "",
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
        jenis_angkut: state.jenis_angkut,
        jenis_mobil: state.jenis_mobil,
        jarak: state.jarak,
        harga: state.harga
      }
      props.tambahDetail(newData)
      setState({
        ...state,
        user_name: "",
        jenis_angkut: "",
        jenis_mobil: "",
        jarak: "",
        harga: ""
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

  let viewMode = {}
  let editMode = {}

  if (state.inputing) {
    viewMode.display = "none"
  } else {
    editMode.display = "none"
  }

  return (
    <div>
      <div onSubmit={handleSubmit} style={viewMode}>
        <>Nama</>
        <input type="text" className="input-text" placeholder="Nama lengkap" value={state.user_name} name="user_name" onChange={onChange} />
        <p>Jenis angkut</p>
        <select onChange={onChange} value={state.jenis_angkut} name="jenis_angkut">
          <option selected>Pilih jenis angkut</option>
          <option value="Satu kendaraan">Satu kendaraan</option>
          <option value="Angkut sebagian">Angkut sebagian</option>
        </select>
        <p>Jenis mobil</p>
        <select onChange={onChange} value={state.jenis_mobil} name="jenis_mobil">
          <option selected>Pilih jenis mobil</option>
          <option value="Mobil Pickup">Mobil Pickup</option>
          <option value="Mobil L300 Bak">Mobil L300 Bak</option>
          <option value="Mobil Box">Mobil Box</option>
          <option value="Mobil Engkel">Mobil Engkel</option>
        </select>
        <p>Jarak</p>
        <input type="number" className="input-text" placeholder="Total jarak ditempuh" value={state.jarak} name="jarak" onChange={onChange} />
        <p>Harga</p>
        <input type="number" className="input-text" placeholder="Harga" value={state.harga} name="harga" onChange={onChange} />
        <p></p>
        <button onClick={handleSubmit}>Submit</button>
        <button onClick={handleTutupInput} style={{ marginLeft: "10px" }}>
          Selesai
        </button>
      </div>
      <button className="inputan" onClick={handleBukaInput} style={editMode}>
        Masukkan Nama Pelanggan
      </button>
    </div>
  )
}

export default InputDetail