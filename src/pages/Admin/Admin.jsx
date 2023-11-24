import { Link, NavLink, Outlet } from "react-router-dom";
import css from "./Admin.module.css";
import { Suspense } from "react";

const AdminHome = () => {
  return (
    <div className={css.container}>
      <header className={css.header}>
        <div className={css.logoWrapper}>
          <NavLink className={css.logo} to="/admin">
            DitOk
          </NavLink>
        </div>
        <nav className={css.navigate}>
          <ul className={css.navigateList}>
            <li>
              <NavLink to="/admin/new">Створити позицію</NavLink>
            </li>
            <li>
              <NavLink to="/admin/account">
                <svg
                  className={css.icon}
                  width="40"
                  height="40"
                  viewBox="0 0 40 40"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M20.266 19.3667C20.216 19.3667 20.1827 19.3667 20.1327 19.3667C20.0494 19.35 19.9327 19.35 19.8327 19.3667C14.9994 19.2167 11.3494 15.4167 11.3494 10.7334C11.3494 5.96671 15.2327 2.08337 19.9994 2.08337C24.766 2.08337 28.6494 5.96671 28.6494 10.7334C28.6327 15.4167 24.966 19.2167 20.316 19.3667C20.2994 19.3667 20.2827 19.3667 20.266 19.3667ZM19.9994 4.58337C16.616 4.58337 13.8494 7.35004 13.8494 10.7334C13.8494 14.0667 16.4494 16.75 19.766 16.8667C19.8494 16.85 20.0827 16.85 20.2994 16.8667C23.566 16.7167 26.1327 14.0334 26.1494 10.7334C26.1494 7.35004 23.3827 4.58337 19.9994 4.58337Z" />
                  <path d="M20.2827 37.5833C17.016 37.5833 13.7327 36.75 11.2493 35.0833C8.93268 33.55 7.66602 31.45 7.66602 29.1666C7.66602 26.8833 8.93268 24.7666 11.2493 23.2166C16.2493 19.9 24.3493 19.9 29.316 23.2166C31.616 24.75 32.8993 26.85 32.8993 29.1333C32.8993 31.4166 31.6327 33.5333 29.316 35.0833C26.816 36.75 23.5493 37.5833 20.2827 37.5833ZM12.6327 25.3166C11.0327 26.3833 10.166 27.75 10.166 29.1833C10.166 30.6 11.0493 31.9666 12.6327 33.0166C16.7827 35.8 23.7827 35.8 27.9327 33.0166C29.5327 31.95 30.3993 30.5833 30.3993 29.15C30.3993 27.7333 29.516 26.3666 27.9327 25.3166C23.7827 22.55 16.7827 22.55 12.6327 25.3166Z" />
                </svg>
              </NavLink>
            </li>
          </ul>
        </nav>
      </header>
      <main className={css.main}>
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
      </main>
      <footer className={css.footer}>
        <div className={css.footerInner}>
          <p>Зв’язок з тех.підтримкою:</p>
          <ul>
            <li>
              <Link to="tel:+300009090909">+300009090909</Link>
            </li>
            <li>
              <Link to="mailto:tech.pidtrumka@gmail.com">
                tech.pidtrumka@gmail.com
              </Link>
            </li>
          </ul>
        </div>
      </footer>
    </div>
  );
};

export default AdminHome;
