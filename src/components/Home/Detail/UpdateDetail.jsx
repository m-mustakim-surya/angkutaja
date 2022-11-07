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
        user_telepon: state.user_telepon,
        waktu: state.waktu,
        jenis_angkut: state.jenis_angkut,
        jenis_mobil: state.jenis_mobil,
        alamat_jemput: state.alamat_jemput,
        alamat_tujuan: state.alamat_tujuan,
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
        <label>Nomor telepon</label>
        <input
          type="text"
          className="input-text"
          placeholder="Nomor telepon"
          defaultValue={state.user_telepon}
          name="user_telepon"
          onChange={onChange}
        />
        <label>Tanggal pengangkutan</label>
        <input
          type="date"
          className="input-date"
          placeholder="Tanggal pengangkutan"
          defaultValue={state.waktu}
          name="waktu"
          onChange={onChange}
        />
        <label>Jenis angkut</label>
        <select onChange={onChange} defaultValue={state.jenis_angkut} name="jenis_angkut">
          <option value="Satu kendaraan" selected>Satu kendaraan</option>
          <option value="Angkut sebagian">Angkut sebagian</option>
        </select>
        <label>Jenis mobil</label>
        <select onChange={onChange} defaultValue={state.jenis_mobil} name="jenis_mobil">
          <option value="MobilPickup" selected>Mobil Pickup</option>
          <option value="MobilL300Bak">Mobil L300 Bak</option>
          <option value="MobilBox">Mobil Box</option>
          <option value="MobilEngkel">Mobil Engkel</option>
        </select>
        <label>Alamat penjemputan</label>
        <textarea type="textarea" className="textarea" placeholder="Alamat penjemputan" defaultValue={state.alamat_jemput} name="alamat_jemput" onChange={onChange} />
        <label>Alamat tujuan</label>
        <textarea type="textarea" className="textarea" placeholder="Alamat tujuan" defaultValue={state.alamat_tujuan} name="alamat_tujuan" onChange={onChange} />
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
        <button onClick={handleSubmit} className='buttonSave'>Save</button>
        <button onClick={handleTutupInput} className='buttonCancel'>Cancel</button>
      </div>
    </div>
  );
}

export default UpdateDetail;