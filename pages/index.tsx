import type { NextPage } from "next";
import Tables from "../components/Tables";
import Layout from "../components/Layout";
// import styles from "../styles/Dashboard.module.css";

const Home: NextPage = () => {
  return (
    <Layout title="Beranda" pageTitle="Aplikasi Manajemen Pegawai">
      <Tables />
    </Layout>
  );
};

export default Home;
