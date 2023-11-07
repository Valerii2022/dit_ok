import { NavLink } from "react-router-dom";
import css from "./LogIn.module.css";
import Button from "../../components/Button/Button";

const LogIn = () => {
  return (
    <div className={css.container}>
      <img src="/public/log-in.png" alt="Child on play" />
      <div>
        <h2 className={css.title}>Увійти</h2>
        <form className={css.form}>
          <div className={css.inputWrapper}>
            <label className={css.label}>
              Email
              <input type="email" name="emailLogIn" className={css.input} />
            </label>
            <label className={css.label}>
              Пароль
              <input type="text" name="passLogIn" className={css.input} />
            </label>
          </div>
          <div>
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
        </form>
      </div>
    </div>
  );
};

export default LogIn;
