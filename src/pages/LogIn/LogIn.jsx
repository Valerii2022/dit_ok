import { NavLink, useNavigate } from "react-router-dom";
import css from "./LogIn.module.css";
import Button from "../../components/Button/Button";
import logImg from "../../images/login.png";
import { useDispatch, useSelector } from "react-redux";
import { getUsers } from "../../redux/selectors";
import { setUserStatus } from "../../redux/statusSlice";
import { useEffect } from "react";
import { fetchCurrentUser, fetchUsers } from "../../redux/operations";

const LogIn = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { users } = useSelector(getUsers);

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  const handleLogInBtnClick = (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = {};
    formData.forEach((value, key) => {
      data[key] = value;
    });

    const current = users.find(
      (el) =>
        (el.user.email === data.emailLogIn) &
        (el.user.password === data.passLogIn)
    );
    if (current) {
      dispatch(fetchCurrentUser(current.id));
    } else {
      return alert("Неправильний логін чи пароль");
    }
    dispatch(setUserStatus(true));
    navigate("/");
  };

  return (
    <section className={css.container}>
      <img src={logImg} alt="Child on play" width={413} />
      <div>
        <h2 className={css.title}>Увійти</h2>
        <form className={css.form} onSubmit={handleLogInBtnClick}>
          <div className={css.inputWrapper}>
            <label className={css.label}>
              Email
              <input
                required
                type="email"
                name="emailLogIn"
                className={css.input}
              />
            </label>
            <label className={css.label}>
              Пароль
              <input
                autoComplete=""
                required
                type="password"
                name="passLogIn"
                className={css.input}
              />
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
