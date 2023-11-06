import { NavLink } from "react-router-dom";
import css from "./LogIn.module.css";
import Button from "../../components/Button/Button";

const LogIn = () => {
  return (
    <div className={css.container}>
      <div className={css.logInLink}>
        <Button title={"Увійти"} fontSize={"28"} />
      </div>
      <p className={css.linkWrap}>
        Вперше тут?
        <NavLink className={css.navlink} to="/signup">
          Зареєструватися
        </NavLink>
      </p>
    </div>
  );
};

export default LogIn;
