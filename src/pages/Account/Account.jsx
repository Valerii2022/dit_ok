import { Suspense } from "react";
import { NavLink, Outlet } from "react-router-dom";
import css from "./Account.module.css";

const Account = () => {
  return (
    <div className={css.container}>
      <div>
        <h1>Account Page</h1>
        <NavLink to="/account/general">Загальне</NavLink>
        <NavLink to="/account/favourites">Обране</NavLink>
        <NavLink to="/account/orders">Всі замовлення</NavLink>
      </div>
      <Suspense
      // fallback={
      //   <div>
      //     <div>Loading...</div>
      //   </div>
      // }
      >
        <Outlet />
      </Suspense>
    </div>
  );
};

export default Account;
