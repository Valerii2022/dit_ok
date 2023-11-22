import css from "./Layout.module.css";
import { Suspense } from "react";
import Footer from "../Footer/Footer.jsx";
import Header from "../Header/Header.jsx";
import { Outlet } from "react-router-dom";
import { getUserStatus } from "../../redux/selectors.js";
import { useSelector } from "react-redux";
import AdminHome from "../../pages/Admin/Admin.jsx";

const Layout = () => {
  const { isAdmin } = useSelector(getUserStatus);

  return (
    <div className={css.container}>
      {isAdmin ? (
        <AdminHome />
      ) : (
        <>
          <Header />
          <main className={css.content}>
            <Suspense fallback={<div>Loading...</div>}>
              <Outlet />
            </Suspense>
          </main>
          <Footer />
        </>
      )}
    </div>
  );
};

export default Layout;
