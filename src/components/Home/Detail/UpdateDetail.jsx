import { useEffect, useState } from "react";

function UpdateDetail(props) {
  const [state, setState] = useState({
    ...props.edit,
    editing: true,
  });

  useEffect(() => {
    if (props.edit.user_name !== "") {
      setState({
        ...props.edit,
        editing: false,
      });
    }
  }, [props.edit]);

  const onChange = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    if (state.user_name.trim() && state.jenis_angkut && state.jenis_mobil && state.jarak && state.harga) {
      const editData = {
        order_id: state.order_id,
        user_name: state.user_name,
        jenis_angkut: state.jenis_angkut,
        jenis_mobil: state.jenis_mobil,
        jarak: state.jarak,
        harga: state.harga
      };
      props.editDetail(editData);
      console.log(state.user_name)
      setState({
        editing: true
      });
      alert("Data berhasil diubah")
    } else {
      alert("Lengkapi data terlebih dahulu!");
    }
  };
  
  const handleTutupInput = () => {
    setState({
      ...state,
      editing: true,
    });
  };

  let viewMode = {};
  let editMode = {};

  if (state.editing) {
    viewMode.display = "none";
  } else {
    editMode.display = "none";
  }

  return (
    <div>
      <div onSubmit={handleSubmit} style={viewMode}>
        <label>Nama</label>
        <input
          type="text"
          className="input-text"
          placeholder="Nama lengkap"
          defaultValue={state.user_name}
          name="user_name"
          onChange={onChange}
        />
        <label>Jenis angkut</label>
        <select onChange={onChange} value={state.jenis_angkut} name="jenis_angkut">
          <option value="Satu kendaraan" selected>Satu kendaraan</option>
          <option value="Angkut sebagian">Angkut sebagian</option>
        </select>
        <label>Jenis mobil</label>
        <select onChange={onChange} value={state.jenis_mobil} name="jenis_mobil">
          <option value="MobilPickup" selected>Mobil Pickup</option>
          <option value="MobilL300Bak">Mobil L300 Bak</option>
          <option value="MobilBox">Mobil Box</option>
          <option value="MobilEngkel">Mobil Engkel</option>
        </select>
        <label>Jarak</label>
        <input
          type="number"
          className="input-number"
          placeholder="Total jarak ditempuh"
          defaultValue={state.jarak}
          name="jarak"
          onChange={onChange}
        />
        <label>Harga</label>
        <input
          type="number"
          className="input-number"
          placeholder="Nama lengkap"
          defaultValue={state.harga}
          name="harga"
          onChange={onChange}
        />
        <p></p>
        <button onClick={handleSubmit}>Update</button>
        <button onClick={handleTutupInput} style={{ marginLeft: "10px" }}>
          Selesai
        </button>
      </div>
    </div>
  );
}

export default UpdateDetail;