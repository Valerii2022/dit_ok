import { NavLink, useLocation, useNavigate } from "react-router-dom";
import css from "./Payment.module.css";
import Button from "../../components/Button/Button";
import { useEffect, useState } from "react";
import Modal from "../../components/Modal/Modal";
import closeIcon from "../../images/close.svg";
import masterCardIcon from "../../images/pay01.jpg";
import visaCardIcon from "../../images/pay02.jpg";
import payPalIcon from "../../images/pay03.jpg";
import { getAdverts } from "../../redux/selectors";
import { useDispatch, useSelector } from "react-redux";
import { fetchCurrentAdvert } from "../../redux/operations";

const Payment = () => {
  const [successModalOpen, setSuccessModalOpen] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const location = useLocation();
  const { currentAdvert } = useSelector(getAdverts);

  useEffect(() => {
    dispatch(fetchCurrentAdvert(location.state?.key));
  }, [dispatch, location.state?.key]);

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
          {currentAdvert && (
            <span>{currentAdvert.category ? currentAdvert.category : ""}</span>
          )}
        </NavLink>
      </div>
      <form className={css.form}>
        <h2 className={css.title}>Оплата</h2>
        <div className={css.formInner}>
          <div className={css.inputWrapper}>
            <label className={css.inputFieldWrapper}>
              ПІБ
              <input className={css.input} type="text" name="paymentName" />
            </label>
          </div>
          <div className={css.inputWrapper}>
            <div className={css.radioInput}>
              <label htmlFor="master card">
                <input type="radio" id="master card" name="payment" />
                <img src={masterCardIcon} alt="Master Card" />
              </label>
            </div>
            <div className={css.radioInput}>
              <label htmlFor="visa">
                <input type="radio" id="visa" name="payment" />
                <img src={visaCardIcon} alt="Visa Card" />
              </label>
            </div>
            <div className={css.radioInput}>
              <label htmlFor="paypal">
                <input type="radio" id="paypal" name="payment" />
                <img src={payPalIcon} alt="Pay Pal" />
              </label>
            </div>
          </div>
          <div className={css.inputWrapper}>
            <label className={css.inputFieldWrapper}>
              Номер картки
              <input className={css.input} type="text" name="paymentName" />
            </label>
          </div>
          <div className={css.inputWrapper}>
            <div>
              <label className={css.inputFieldWrapper}>
                Дата
                <input className={css.input} type="date" name="cardDate" />
              </label>
            </div>
            <div>
              <label className={css.inputFieldWrapper}>
                CVV
                <input
                  className={css.input}
                  type="password"
                  name="CVV"
                  min={3}
                  max={3}
                />
              </label>
            </div>
          </div>
        </div>
        <label htmlFor="checkbox" className={css.checkbox}>
          <input type="checkbox" name="checkbox" id="checkbox" />
          Запам’ятати мою картку
        </label>
        <div
          className={css.btnWrapper}
          onClick={(e) => {
            e.preventDefault();
            setSuccessModalOpen(true);
          }}
        >
          <Button title={"Підтвердити"} fontSize={"28"} />
        </div>
      </form>

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
