import type { NextPage } from "next";
import Head from "next/head";

const Login: NextPage = () => {
  return (
    <div className="login">
      <Head>
        <title>Login</title>
      </Head>
      <main>
        <div className="container">
          <section className="login-box">
            <h2>Login</h2>
            <form>
              <input type="text" placeholder="Username" id="username" />
              <input type="password" placeholder="Password" id="password" />
              <button>Login</button>
            </form>
          </section>
        </div>
      </main>
    </div>
  );
};

export default Login;
