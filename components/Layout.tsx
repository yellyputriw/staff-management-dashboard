import { ReactNode } from "react";
import Head from "next/head";

interface LayoutProps {
  title: string;
  pageTitle: string;
  children: ReactNode;
}

export default function Layout(props: LayoutProps) {
  const { title, pageTitle, children } = props;

  return (
    <>
      <Head>
        <title>{pageTitle}</title>
      </Head>
      <header>{title}</header>
      <main>
        <div className="container">
          <aside>
            <ul>
              <li>
                <a>Dashboard</a>
              </li>
              <li>
                <a>Data Pegawai</a>
              </li>
              <li>
                <a>Logout</a>
              </li>
            </ul>
          </aside>
          <section className="dashboard-body">
            <h1>Selamat datang di Aplikasi Manajemen Pegawai</h1>
            <p>
              Anda Login sebagain <span>Admin</span>!
            </p>
            <div>{children}</div>
          </section>
        </div>
      </main>
      <footer>Copyright</footer>
    </>
  );
}
