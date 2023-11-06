import { NavLink } from "react-router-dom";
import css from "./LogIn.module.css";

const LogIn = () => {
  return (
    <div className={css.container}>
      <h2 className={css.title}>LogIn Page</h2>
      <NavLink to="/signup">Зареєструватися</NavLink>
    </div>
  );
};

export default LogIn;
