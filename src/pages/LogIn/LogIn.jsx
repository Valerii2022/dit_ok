import { NavLink, useNavigate } from "react-router-dom";
import css from "./LogIn.module.css";
import Button from "../../components/Button/Button";
import logImg from "../../images/login.png";
import { useDispatch, useSelector } from "react-redux";
import { getUsers } from "../../redux/selectors";
import { setAdminStatus, setUserStatus } from "../../redux/statusSlice";
import { useEffect, useState } from "react";
import { fetchCurrentUser, fetchUsers } from "../../redux/operations";
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

const LogIn = () => {
  const [error, setError] = useState(false);
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
      setError(true);
      iziToast.error({
        title: "Помилка",
        message: `Неправильний логін або пароль!`,
        layout: 2,
        position: "topRight",
        transitionIn: "fadeInLeft",
        transitionOut: "fadeOutRight",
      });
      return;
    }

    if (current.isAdmin) {
      dispatch(setAdminStatus(true));
      navigate("/admin");
    } else {
      dispatch(setAdminStatus(false));
      dispatch(setUserStatus(true));
      navigate("/");
    }
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
                autoComplete="on"
                style={
                  error ? { borderColor: "#ff3c3c" } : { borderColor: "#000" }
                }
                onFocus={() => setError(false)}
                required
                type="email"
                name="emailLogIn"
                className={css.input}
              />
            </label>
            <label className={css.label}>
              Пароль
              <input
                autoComplete="off"
                style={
                  error ? { borderColor: "#ff3c3c" } : { borderColor: "#000" }
                }
                onFocus={() => setError(false)}
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
