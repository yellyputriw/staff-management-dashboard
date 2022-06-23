import type { NextComponentType } from "next";
import Image from "next/image";
import Link from "next/link";

const Tables: NextComponentType = () => {
  return (
    <div className="table">
      <h2 className="judul-tabel">Data Pegawai</h2>
      <Link href="/form">
        <button>Tambah</button>
      </Link>
      <table>
        <thead>
          <tr>
            <th>No</th>
            <th>Foto</th>
            <th>Nama</th>
            <th>Jenis Kelamin</th>
            <th>Tanggal</th>
            <th>Jabatan</th>
            <th>Keterangan</th>
            <th>Aksi</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>
              {/* <Image /> */}
              <p>buat foto</p>
            </td>
            <td>Putri Wahyu</td>
            <td>P</td>
            <td>26 Juli 2000</td>
            <td>Staff</td>
            <td>-</td>
            <td>
              <button className="btn edit">Edit</button>
              <button className="btn delete">Hapus</button>
            </td>
          </tr>
          <tr>
            <td>1</td>
            <td>
              {/* <Image /> */}
              <p>buat foto</p>
            </td>
            <td>Putri Wahyu</td>
            <td>P</td>
            <td>26 Juli 2000</td>
            <td>Staff</td>
            <td>-</td>
            <td>
              <button className="btn edit">Edit</button>
              <button className="btn delete">Hapus</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Tables;
