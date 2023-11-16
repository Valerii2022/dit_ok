import { NavLink } from "react-router-dom";
import css from ".//SignUp.module.css";
import Button from "../../components/Button/Button";
import signupImg from "../../images/signup.png";
import { useDispatch } from "react-redux";
import { addToUsers } from "../../redux/usersSlice";

const SignUp = () => {
  const dispatch = useDispatch();

  const handleSignUpFormSubmit = (e) => {
    e.preventDefault();
    dispatch(
      addToUsers({
        name: "Alex",
        surname: "User",
        phone: "06000000000",
        email: "user1@gmail.com",
        password: "12345",
      })
    );
  };

  return (
    <section className={css.container}>
      <img src={signupImg} alt="Child with camera" width={413} />
      <div>
        <h2 className={css.title}>Реєстрація</h2>
        <form className={css.form} onSubmit={handleSignUpFormSubmit}>
          <div className={css.inputWrapper}>
            <label className={css.label}>
              Ім&#96;я
              <input type="text" name="signUpName" className={css.input} />
            </label>
            <label className={css.label}>
              Прізвище
              <input type="text" name="signUpSurname" className={css.input} />
            </label>
            <label className={css.label}>
              Номер телефону
              <input type="tel" name="signUpPhone" className={css.input} />
            </label>
            <label className={css.label}>
              Email
              <input type="email" name="signUpEmail" className={css.input} />
            </label>
            <label className={css.label}>
              Пароль
              <input type="password" name="signUpPass" className={css.input} />
            </label>
            <label className={css.label}>
              Підтвердіть пароль
              <input
                type="password"
                name="signUpPassConfirm"
                className={css.input}
              />
            </label>
          </div>
          <div>
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
        </form>
      </div>
    </section>
  );
};

export default SignUp;
