import { ReactNode } from "react";
import Head from "next/head";
import Link from "next/link";

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
      <header>
        <p>Selamat datang di Aplikasi Manajemen Pegawai</p>
        <p>
          Anda Login sebagain <span>Admin</span>!
        </p>
      </header>
      <main>
        <div className="container">
          <aside>
            <ul>
              <li>
                <Link href="/">
                  <a>Dashboard</a>
                </Link>
              </li>
              <li>
                <Link href="/">
                  <a>Data Pegawai</a>
                </Link>
              </li>
              <li>
                <Link href="/">
                  <a>Data Jabatan</a>
                </Link>
              </li>
              <li>
                <Link href="/">
                  <a>Logout</a>
                </Link>
              </li>
            </ul>
          </aside>
          <div className="app-body">
            <h1>{title}</h1>
            {children}
          </div>
        </div>
      </main>
      <footer>Copyright</footer>
    </>
  );
}
