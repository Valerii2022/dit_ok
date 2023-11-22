import { NavLink, useNavigate } from "react-router-dom";
import css from ".//SignUp.module.css";
import Button from "../../components/Button/Button";
import signupImg from "../../images/signup.png";
import closeIcon from "../../images/close.svg";
import { useDispatch, useSelector } from "react-redux";
import { addUser } from "../../redux/operations";
import { useState } from "react";
import Modal from "../../components/Modal/Modal";
import { getUsers } from "../../redux/selectors";
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

const SignUp = () => {
  const [error, setError] = useState(false);
  const [successModal, setSuccessModal] = useState(false);
  const [success, setSuccess] = useState(false);
  const [warning, setSWarning] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { users } = useSelector(getUsers);

  const handleSignUpFormSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = {};
    formData.forEach((value, key) => {
      data[key] = value;
    });

    const unique = users.find((el) => el.user.email === data.email);

    if (unique) {
      setSuccessModal(true);
      setSWarning(true);
      return;
    }

    if (data.pass === data.confirm) {
      dispatch(
        addUser({
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
      setSuccessModal(true);
    } else {
      iziToast.error({
        title: "Помилка",
        message: `Підтвердіть пароль!`,
        layout: 2,
        position: "topRight",
        transitionIn: "fadeInLeft",
        transitionOut: "fadeOutRight",
      });
      setError(true);
      // setSuccess(true);
      // setSuccessModal(true);
    }
  };

  const handleSuccessModalOpen = () => {
    setSuccessModal(false);
    setSuccess(false);
    setSWarning(false);
  };

  return (
    <>
      <section className={css.container}>
        <img src={signupImg} alt="Child with camera" width={413} />
        <div>
          <h2 className={css.title}>Реєстрація</h2>
          <form className={css.form} onSubmit={handleSignUpFormSubmit}>
            <div className={css.inputWrapper}>
              <label className={css.label}>
                Ім&#96;я
                <input
                  autoComplete="off"
                  pattern="[a-zA-Zа-яА-Я]+"
                  title="Ім'я не повинно включати цифри"
                  required
                  type="text"
                  name="name"
                  className={css.input}
                  min={3}
                />
              </label>
              <label className={css.label}>
                Прізвище
                <input
                  autoComplete="off"
                  pattern="[a-zA-Zа-яА-Я]+"
                  title="Прізвище не повинно включати цифри"
                  required
                  type="text"
                  name="surname"
                  className={css.input}
                />
              </label>
              <label className={css.label}>
                Номер телефону
                <input
                  autoComplete="off"
                  pattern="[0-9]{3} [0-9]{2}-[0-9]{2}-[0-9]{3}"
                  title="Телефон має бути у форматі 000 00-00-000"
                  required
                  type="tel"
                  name="phone"
                  className={css.input}
                />
              </label>
              <label className={css.label}>
                Email
                <input
                  autoComplete="off"
                  required
                  type="email"
                  name="email"
                  className={css.input}
                />
              </label>
              <label className={css.label}>
                Пароль
                <input
                  autoComplete="off"
                  required
                  type="password"
                  name="pass"
                  className={css.input}
                />
              </label>
              <label className={css.label}>
                Підтвердіть пароль
                <input
                  autoComplete="off"
                  style={
                    error ? { borderColor: "#ff3c3c" } : { borderColor: "#000" }
                  }
                  required
                  onFocus={() => setError(false)}
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

      {successModal && (
        <Modal handleModalClose={handleSuccessModalOpen}>
          <div className={css.modalContainer}>
            <img
              className={css.closeIcon}
              src={closeIcon}
              alt="Close icon"
              onClick={handleSuccessModalOpen}
            />
            {success ? (
              <>
                <p>Підтвердіть пароль!</p>
                <div
                  className={css.modalBtnWrap}
                  onClick={handleSuccessModalOpen}
                >
                  <Button title={"Підтвердити"} fontSize={"28"} />
                </div>
              </>
            ) : (
              <>
                {warning ? (
                  <p>Користувач вже зареєстрований!</p>
                ) : (
                  <p>Ви успішно зареєструвались!</p>
                )}

                <div
                  className={css.modalBtnWrap}
                  onClick={() => navigate("/login")}
                >
                  <Button title={"Увійти"} fontSize={"28"} />
                </div>
              </>
            )}
          </div>
        </Modal>
      )}
    </>
  );
};

export default SignUp;
