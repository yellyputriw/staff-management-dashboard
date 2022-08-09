import type { NextPage } from "next";
import Layout from "../components/Layout";
import { useState } from "react";
import axios from "axios";

const Form: NextPage = () => {
  // const [foto, setFoto] = useState<string>("");
  const [name, setName] = useState<string>("");
  const [birthDate, setBirthDate] = useState<string>("");
  const [gender, setGender] = useState<string>("");
  const [department, setDepartment] = useState<string>("");

  // const handleUpload = (e: FormEvent<HTMLInputElement>) => {
  //   let uploaded = e.target;
  //   setFoto(uploaded);
  // };

  const addStaff = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    axios
      .post("https://62a168a2cd2e8da9b0f0a49a.mockapi.io/staff", {
        name: name,
        gender: gender,
        birthDate: birthDate,
        department: department,
      })
      .then((res) => {
        console.log(res);
        alert("Berhasil Tambah Data");
        window.location.href = "/";
      })
      .catch((err) => console.log(err));
  };

  return (
    <Layout title="Tambah Data" pageTitle="Tambah Data">
      <h2 className="judul">Tambah Pegawai</h2>
      <form>
        {/* <div className="form-group">
          <label htmlFor="foto">Foto</label>
          <input type="file" id="foto" onChange={handleUpload} />
        </div> */}
        <div className="form-group">
          <label htmlFor="nama">Nama</label>
          <input
            type="text"
            id="nama"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="gender">Jenis Kelamin</label>
          <input
            type="radio"
            id="Laki-laki"
            name="gender"
            value="Laki-laki"
            className="radio"
            checked={gender === "Laki-laki"}
            onChange={(e) => setGender(e.target.value)}
          />{" "}
          <label htmlFor="Laki-laki">Laki-laki</label>
          <input
            type="radio"
            id="Perempuan"
            name="gender"
            value="Perempuan"
            className="radio"
            checked={gender === "Perempuan"}
            onChange={(e) => setGender(e.target.value)}
          />{" "}
          <label htmlFor="Perempuan">Perempuan</label>
        </div>
        <div className="form-group">
          <label htmlFor="date">Tanggal lahir</label>
          <input
            type="date"
            id="date"
            value={birthDate}
            onChange={(e) => setBirthDate(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="department">department</label>
          <select
            id="department"
            name="department"
            defaultValue="no-value"
            onChange={(e) => setDepartment(e.target.value)}
            value={department}
            required
          >
            <option value="no-value" disabled>
              Pilih department
            </option>
            <option value="CEO">CEO</option>
            <option value="CTO">CTO</option>
            <option value="CMO">CMO</option>
            <option value="COO">COO</option>
          </select>
          <div className="form-group">
            <button className="btn save" onClick={addStaff}>
              Simpan
            </button>
            <button className="btn reset">Batal</button>
          </div>
        </div>
      </form>
    </Layout>
  );
};

export default Form;
