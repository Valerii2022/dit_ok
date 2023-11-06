import { NavLink } from "react-router-dom";
import css from ".//SignUp.module.css";
import Button from "../../components/Button/Button";

const SignUp = () => {
  return (
    <div className={css.container}>
      <div className={css.logInLink}>
        <Button title={"Зареєструватися"} fontSize={"28"} />
      </div>
      <p className={css.linkWrap}>
        Вже є акаунт?
        <NavLink className={css.navlink} to="/login">
          Увійти
        </NavLink>
      </p>
    </div>
  );
};

export default SignUp;
