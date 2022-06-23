import type { NextPage } from "next";
import Layout from "../components/Layout";

const Form: NextPage = () => {
  return (
    <Layout title="Tambah Data" pageTitle="Tambah Data">
      <h2 className="judul">Tambah Pegawai</h2>
      <form>
        <div className="form-group">
          <label htmlFor="foto">Foto</label>
          <input type="file" id="foto" />
        </div>
        <div className="form-group">
          <label htmlFor="nama">Nama</label>
          <input type="text" id="nama" />
        </div>
        <div className="form-group">
          <label htmlFor="jk">Jenis Kelamin</label>
          <input
            type="radio"
            id="jk"
            name="jk"
            value="men"
            className="radio"
          />{" "}
          Laki-laki
          <input
            type="radio"
            id="jk"
            name="jk"
            value="women"
            className="radio"
          />{" "}
          Perempuan
        </div>
        <div className="form-group">
          <label htmlFor="date">Tanggal lahir</label>
          <input type="date" id="date" />
        </div>
        <div className="form-group">
          <label htmlFor="jabatan">Jabatan</label>
          <section id="jabatan">
            <option value="CEO">CEO</option>
            <option value="CEO">CEO</option>
            <option value="CEO">CEO</option>
            <option value="CEO">CEO</option>
          </section>
          <div className="form-group">
            <button className="btn save">Simpan</button>
            <button className="btn reset">Batal</button>
          </div>
        </div>
      </form>
    </Layout>
  );
};

export default Form;
