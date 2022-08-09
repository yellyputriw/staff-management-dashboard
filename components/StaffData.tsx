import React, { useEffect, useState } from "react";
import axios, { CancelTokenSource } from "axios";
import Link from "next/link";

interface IStaff {
  id: number;
  name: string;
  gender: string;
  birthDate: string;
  department: string;
}

const defaultStaff: IStaff[] = [];

const StaffData = () => {
  const [staffs, setStaffs]: [IStaff[], (staffs: IStaff[]) => void] =
    React.useState(defaultStaff);
  const [deleteStaff, setDeleteStaff] = useState(defaultStaff);

  const [loading, setLoading]: [boolean, (loading: boolean) => void] =
    React.useState<boolean>(true);

  const [error, setError]: [string, (error: string) => void] =
    React.useState("");

  useEffect(() => {
    axios
      .get<IStaff[]>("https://62a168a2cd2e8da9b0f0a49a.mockapi.io/staff")
      .then((response) => {
        setStaffs(response.data);
      })
      .catch((ex) => {
        let error = axios.isCancel(ex)
          ? "Request Cancelled"
          : ex.code === "ECONNABORTED"
          ? "A timeout has occurred"
          : ex.response.status === 404
          ? "Resource Not Found"
          : "An unexpected error has occurred";

        setError(error);
        setLoading(false);
      });
  }, []);

  const handleDelete = (staff: IStaff): void => {
    axios
      .delete(`https://62a168a2cd2e8da9b0f0a49a.mockapi.io/staff/${staff.id}`)
      .then((result) => {
        alert("Berhasil hapus data!");
        window.location.reload();
      })
      .catch((err) => console.log(err));

    // alert("Berhasil Tambah Data");
    setDeleteStaff(
      deleteStaff.filter((staff) => {
        return staff.id !== staff.id;
      })
    );
  };

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
            {/* <th>Foto</th> */}
            <th>Nama</th>
            <th>Jenis Kelamin</th>
            <th>Tanggal</th>
            <th>Jabatan</th>
            <th>Keterangan</th>
            <th>Aksi</th>
          </tr>
        </thead>
        <tbody>
          {staffs.map((staff, index) => (
            <tr key={staff.id}>
              <td>{index + 1}</td>
              {/* <td>
              <Image />
              <p>buat foto</p>
            </td> */}
              <td>{staff.name}</td>
              <td>{staff.gender}</td>
              <td>{staff.birthDate}</td>
              <td>{staff.department}</td>
              <td>-</td>
              <td>
                <button className="btn edit">Edit</button>
                <button
                  className="btn delete"
                  onClick={() => {
                    handleDelete(staff);
                  }}
                >
                  Hapus
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default StaffData;
