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
import { addToOrders } from "../../redux/currentUserSlice";

const Payment = () => {
  const [successModalOpen, setSuccessModalOpen] = useState(false);
  const [nameError, setNameError] = useState(false);
  const [cardError, setCardError] = useState(false);
  const [codeError, setCodeError] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const location = useLocation();
  const { currentAdvert } = useSelector(getAdverts);

  useEffect(() => {
    dispatch(fetchCurrentAdvert(location.state?.key));
  }, [dispatch, location.state?.key]);

  const handleSuccessModalOpen = () => {
    navigate("/home");
  };

  const handleSubmitForm = (e) => {
    e.preventDefault();
    const data = {};
    const formData = new FormData(e.currentTarget);
    formData.forEach((value, name) => (data[name] = value));
    const orderDetails = {
      ...location.state,
      ...data,
      size: location.state?.size,
      quantity: location.state?.quantity,
      advert: location.state?.advert,
    };
    dispatch(addToOrders(orderDetails));
    setSuccessModalOpen(true);
  };

  const handleBlur = (e) => {
    if (e.target.name === "paymentName") {
      {
        e.target.validity.patternMismatch
          ? setNameError(true)
          : setNameError(false);
      }
    }
    if (e.target.name === "paymentCard") {
      {
        e.target.validity.patternMismatch
          ? setCardError(true)
          : setCardError(false);
      }
    }
    if (e.target.name === "CVV") {
      {
        e.target.validity.patternMismatch
          ? setCodeError(true)
          : setCodeError(false);
      }
    }
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
      <form className={css.form} onSubmit={handleSubmitForm}>
        <h2 className={css.title}>Оплата</h2>
        <div className={css.formInner}>
          <div className={css.inputWrapper}>
            <label className={css.inputFieldWrapper}>
              ПІБ
              <input
                placeholder=""
                required
                pattern="[a-zA-Zа-яА-Я]+ ?[a-zA-Zа-яА-Я]+ ?[a-zA-Zа-яА-Я]+"
                min={3}
                className={css.input}
                type="text"
                name="paymentName"
                onBlur={handleBlur}
              />
            </label>
            {nameError && <p className={css.error}>Введіть ПІБ</p>}
          </div>
          <div className={css.inputWrapper}>
            <div className={css.radioInput}>
              <input
                defaultChecked
                type="radio"
                id="master card"
                name="payment"
                value={"Master card"}
                className={css.hidden}
              />
              <label htmlFor="master card">
                <img src={masterCardIcon} alt="Master Card" />
              </label>
            </div>
            <div className={css.radioInput}>
              <input
                type="radio"
                id="visa"
                name="payment"
                value={"Visa card"}
                className={css.hidden}
              />
              <label htmlFor="visa">
                <img src={visaCardIcon} alt="Visa Card" />
              </label>
            </div>
            <div className={css.radioInput}>
              <input
                type="radio"
                id="paypal"
                name="payment"
                value={"Pay Pal"}
                className={css.hidden}
              />
              <label htmlFor="paypal">
                <img src={payPalIcon} alt="Pay Pal" />
              </label>
            </div>
          </div>
          <div className={css.inputWrapper}>
            <label className={css.inputFieldWrapper}>
              Номер картки
              <input
                placeholder=""
                required
                className={css.input}
                type="text"
                name="paymentCard"
                pattern="[0-9]{4} [0-9]{4} [0-9]{4} [0-9]{4}"
                min={19}
                onBlur={handleBlur}
              />
            </label>
            {cardError && <p className={css.error}>Перевірте номер карти</p>}
          </div>
          <div className={css.inputWrapper}>
            <div>
              <label className={css.inputFieldWrapper}>
                Дата
                <input className={css.input} type="date" name="cardDate" />
              </label>
            </div>
            <div className={css.cvvWrap}>
              <label className={css.inputFieldWrapper}>
                CVV
                <input
                  placeholder=""
                  required
                  min={3}
                  autoComplete="CVV"
                  className={css.input}
                  type="password"
                  name="CVV"
                  pattern="[0-9]{3}"
                  onBlur={handleBlur}
                />
              </label>
              {codeError && <p className={css.error}>Введіть три цифри CVV</p>}
            </div>
          </div>
        </div>
        <label htmlFor="checkbox" className={css.checkbox}>
          <input type="checkbox" name="checkbox" id="checkbox" value={"ok"} />
          Запам’ятати мою картку
        </label>
        <div className={css.btnWrapper}>
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
