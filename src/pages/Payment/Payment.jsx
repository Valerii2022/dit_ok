import { NavLink, useNavigate } from "react-router-dom";
import css from "./Payment.module.css";
import Button from "../../components/Button/Button";
import { useState } from "react";
import Modal from "../../components/Modal/Modal";
import closeIcon from "../../images/close.svg";
import masterCardIcon from "../../images/pay01.svg";
import visaCardIcon from "../../images/pay02.svg";
import payPalIcon from "../../images/pay03.svg";

const Payment = () => {
  const [successModalOpen, setSuccessModalOpen] = useState(false);
  const navigate = useNavigate();

  const handleSuccessModalOpen = () => {
    // setSuccessModalOpen(false);
    navigate("/home");
  };

  return (
    <div className={css.container}>
      <div className={css.breadcrumbs}>
        <NavLink to="/home">
          <span>Головна</span>
        </NavLink>
        <NavLink to="/category">
          <span>Одяг і взуття</span>{" "}
        </NavLink>
      </div>
      <form>
        <h2>Оплата</h2>
        <label>
          ПІБ
          <input type="text" name="peymentName" />
        </label>
        <div>
          <img src={masterCardIcon} alt="Master Card" />
          <img src={visaCardIcon} alt="Visa Card" />
          <img src={payPalIcon} alt="Pay Pal" />
        </div>
        <label>
          Номер картки
          <input type="text" name="paymentName" />
        </label>
        <label>
          Дата
          <input type="date" name="cardDate" />
        </label>
        <label>
          CVV
          <input type="password" name="CVV" />
        </label>
      </form>
      <div
        className={css.btnWrapper}
        onClick={() => {
          setSuccessModalOpen(true);
        }}
      >
        <Button title={"Підтвердити"} fontSize={"28"} />
      </div>
      {successModalOpen && (
        <Modal handleModalClose={handleSuccessModalOpen}>
          <div className={css.modalContainer}>
            <img
              className={css.closeIcon}
              src={closeIcon}
              alt="Close icon"
              onClick={handleSuccessModalOpen}
            />
            <div className={css.titleWrapper}>
              <p>Вітаю!</p>
              <p>Ваше замовлення буде відправлене найближчим часом</p>
            </div>
            <div className={css.modalBtnWrap} onClick={() => navigate("/home")}>
              <Button title={"Повернутися до головної"} fontSize={"28"} />
            </div>
          </div>
        </Modal>
      )}
    </div>
  );
};

export default Payment;
