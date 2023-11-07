import css from "./Order.module.css";
import { NavLink } from "react-router-dom";

const Order = () => {
  return (
    <div className={css.container}>
      <div className={css.breadcrumbs}>
        <NavLink to="/home">
          <span>Головна</span>
        </NavLink>
        <NavLink to="/category">
          <span>Одяг і взуття</span>{" "}
        </NavLink>
      </div>
    </div>
  );
};

export default Order;
