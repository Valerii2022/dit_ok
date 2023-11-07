import { NavLink } from "react-router-dom";
import css from "./LogIn.module.css";
import Button from "../../components/Button/Button";
import logImg from "../../images/log-in.jpg";

const LogIn = () => {
  return (
    <section className={css.container}>
      <img src={logImg} alt="Child on play" width={413} />
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
    </section>
  );
};

export default LogIn;
