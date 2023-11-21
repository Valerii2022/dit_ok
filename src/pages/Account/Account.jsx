import { Suspense } from "react";
import { NavLink, Outlet, useNavigate } from "react-router-dom";
import css from "./Account.module.css";

const Account = () => {
  const navigate = useNavigate();

  return (
    <div className={css.container}>
      <div className={css.breadcrumbs}>
        <NavLink to="/account">
          <span>Аккаунт</span>
        </NavLink>
      </div>
      <div className={css.inner}>
        <div className={css.btnWrapper}>
          <input
            className={css.hidden}
            id="general"
            type="radio"
            name="buttons"
            value="general"
          />
          <label
            onClick={() => {
              navigate("/account");
            }}
            htmlFor="general"
          >
            Загальне
          </label>
          <input
            className={css.hidden}
            id="favourites"
            type="radio"
            name="buttons"
            value="general"
          />
          <label
            onClick={() => {
              navigate("/account/favourites");
            }}
            htmlFor="favourites"
          >
            Обране
          </label>
          <input
            className={css.hidden}
            id="orders"
            type="radio"
            name="buttons"
            value="general"
          />
          <label
            htmlFor="orders"
            onClick={() => {
              navigate("/account/orders");
            }}
          >
            Всі замовлення
          </label>
        </div>
        <div className={css.contentWrapper}>
          <Suspense fallback={<div>Loading...</div>}>
            <Outlet />
          </Suspense>
        </div>
      </div>
    </div>
  );
};

export default Account;
