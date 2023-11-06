import css from "./Layout.module.css";
import { Suspense } from "react";
import Footer from "../Footer/Footer.jsx";
import Header from "../Header/Header.jsx";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className={css.container}>
      <Header />
      <main className={css.content}>
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
