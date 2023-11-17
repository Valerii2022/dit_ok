import { NavLink } from "react-router-dom";
import css from ".//SignUp.module.css";
import Button from "../../components/Button/Button";
import signupImg from "../../images/signup.png";
import { useDispatch } from "react-redux";
import { addUser } from "../../redux/operations";
import { nanoid } from "nanoid";

const SignUp = () => {
  const dispatch = useDispatch();

  const handleSignUpFormSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = {};
    formData.forEach((value, key) => {
      data[key] = value;
    });
    if (data.pass === data.confirm) {
      dispatch(
        addUser({
          id: nanoid(6),
          favourites: [],
          orders: [],
          isAdmin: false,
          user: {
            name: data.name,
            surname: data.surname,
            phone: data.phone,
            email: data.email,
            password: data.pass,
          },
        })
      );
      e.target.reset();
      alert("Ви успішно зареєструвалися");
    } else alert("Підтвердіть пароль");
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
              <input required type="text" name="name" className={css.input} />
            </label>
            <label className={css.label}>
              Прізвище
              <input
                required
                type="text"
                name="surname"
                className={css.input}
              />
            </label>
            <label className={css.label}>
              Номер телефону
              <input required type="tel" name="phone" className={css.input} />
            </label>
            <label className={css.label}>
              Email
              <input required type="email" name="email" className={css.input} />
            </label>
            <label className={css.label}>
              Пароль
              <input
                required
                type="password"
                name="pass"
                className={css.input}
              />
            </label>
            <label className={css.label}>
              Підтвердіть пароль
              <input
                required
                type="password"
                name="confirm"
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
