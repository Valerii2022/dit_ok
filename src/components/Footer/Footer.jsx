import { NavLink, useNavigate } from "react-router-dom";
import Button from "../Button/Button";
import css from "./Footer.module.css";
import { useDispatch } from "react-redux";
import { addToSubscriptions } from "../../redux/subscriptionsSlice";
import Modal from "../Modal/Modal";
import closeIcon from "../../images/close.svg";
import { useState } from "react";

const Footer = () => {
  const [openModal, setOpenModal] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubscriptionBtnClick = (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = {};
    formData.forEach((value, key) => {
      data[key] = value;
    });
    dispatch(addToSubscriptions(data.emailFooter));
    e.target.reset();
    setOpenModal(true);
  };

  const handleModalOpen = () => {
    setOpenModal(false);
  };

  return (
    <>
      <footer className={css.container}>
        <ul className={css.footerList}>
          <li>
            <h3 className={css.title}>Інформація</h3>
            <ul className={css.linksList}>
              <li className={css.link}>
                <NavLink to="/about">Про нас</NavLink>
              </li>
              <li className={css.link}>
                <NavLink to="/delivery">Доставка і оплата</NavLink>
              </li>
              <li className={css.link}>
                <NavLink to="/guarantee">Гарантія</NavLink>
              </li>
              <li className={css.link}>
                <NavLink to="/category">Бренди</NavLink>
              </li>
              <li className={css.link}>
                <NavLink to="/">Акції</NavLink>
              </li>
            </ul>
          </li>
          <li>
            <h3 className={css.title}>
              <NavLink to="/">Служба підтримки</NavLink>
            </h3>
            <ul className={css.linksList}>
              <li className={css.link}>
                <NavLink to="/">Контакти</NavLink>
              </li>
              <li className={css.link}>
                <NavLink to="/">Повернення товару</NavLink>
              </li>
              <li className={css.link}>
                <NavLink to="/">Політика безпеки</NavLink>
              </li>
            </ul>
          </li>
          <li>
            <h3 className={css.title}>Слідкуйте за акціями та новинами</h3>
            <form onSubmit={handleSubscriptionBtnClick}>
              <label>
                <input
                  required
                  className={css.input}
                  type="email"
                  name="emailFooter"
                  placeholder="Введіть ваш Email"
                />
              </label>
              <div className={css.btnWrap}>
                <Button title={"Підписатися"}></Button>
              </div>
            </form>
          </li>
        </ul>
      </footer>
      {openModal && (
        <Modal handleModalClose={handleModalOpen}>
          <div className={css.modalContainer}>
            <img
              className={css.closeIcon}
              src={closeIcon}
              alt="Close icon"
              onClick={handleModalOpen}
            />
            <p>Дякуємо за підписку!</p>
            <div className={css.modalBtnWrap} onClick={() => navigate("/home")}>
              <Button title={"На головну"} fontSize={"28"} />
            </div>
          </div>
        </Modal>
      )}
    </>
  );
};

export default Footer;
