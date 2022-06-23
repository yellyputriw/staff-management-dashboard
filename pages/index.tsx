import type { NextPage } from "next";
import Layout from "../components/Layout";
import StaffData from "../components/StaffData";
// import styles from "../styles/Dashboard.module.css";

const Home: NextPage = () => {
  return (
    <Layout title="Beranda" pageTitle="Aplikasi Manajemen Pegawai">
      <StaffData />
    </Layout>
  );
};

export default Home;
