import React, { useEffect } from "react";
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

  const [loading, setLoading]: [boolean, (loading: boolean) => void] =
    React.useState<boolean>(true);

  const [error, setError]: [string, (error: string) => void] =
    React.useState("");

  const cancelToken = axios.CancelToken; //create cancel token
  const [cancelTokenSource, setCancelTokenSource]: [
    CancelTokenSource,
    (cancelTokenSource: CancelTokenSource) => void
  ] = React.useState(cancelToken.source());

  const handleCancelClick = () => {
    if (cancelTokenSource) {
      cancelTokenSource.cancel("User cancelled operation");
    }
  };

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
          {staffs.map((staff) => (
            <tr key={staff.id}>
              <td>1</td>
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
                <button className="btn delete">Hapus</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default StaffData;
