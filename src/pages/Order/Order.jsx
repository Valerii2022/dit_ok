import css from "./Order.module.css";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import Button from "../../components/Button/Button";
import { useDispatch, useSelector } from "react-redux";
import { getItems } from "../../redux/selectors";
import { nanoid } from "nanoid";
import { useEffect } from "react";
import { fetchCurrentAdvert } from "../../redux/operations";

const Order = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const location = useLocation();
  const { currentAdvert } = useSelector(getItems);

  useEffect(() => {
    dispatch(fetchCurrentAdvert(location.state?.key));
  }, [dispatch, location.state?.key]);

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
      {currentAdvert && (
        <div className={css.contentWrapper}>
          <div>
            <div className={css.mainImageWrap}>
              <img
                src={currentAdvert.src}
                alt="Main"
                width={200}
                height={200}
              />
            </div>
            <ul className={css.imageList}>
              {currentAdvert.images.map((el) => {
                return (
                  <li key={nanoid(6)}>
                    <img src={el} alt="" width={95} height={95} />
                  </li>
                );
              })}
            </ul>
          </div>
          <div className={css.infoWrapper}>
            <div className={css.generalInfo}>
              <p>{currentAdvert.description}</p>
              <p>
                <span>Колір:</span>
                <span>{currentAdvert.color}</span>
              </p>
              <p>
                <span>Матеріал:</span>
                <span>{currentAdvert.material}</span>
              </p>
              <p>
                <span>Виробник:</span>
                <span>{currentAdvert.brand}</span>
              </p>
              <p>
                <span>Розмір:</span>
                <span>128</span>
              </p>
              <p>
                <span>Кількість:</span>
                <span>{location.state?.quantity}</span>
              </p>
            </div>
          </div>
        </div>
      )}
      <form className={css.form}>
        <h2 className={css.formTitle}>Дані для доставки</h2>
        <div className={css.addressWrapper}>
          <label className={css.inputLabel}>
            Адреса
            <input
              type="text"
              name="deliveryAddress"
              placeholder="вул. Маршала Вусика 23"
              className={css.inputField}
            />
          </label>
          <div className={css.radioBtnWrapper}>
            <label>
              <input type="radio" name="delivery" />
              Нова пошта
            </label>
            <label>
              <input type="radio" name="delivery" />
              Укрпошта
            </label>
          </div>
        </div>
        <label className={css.inputLabel}>
          Коментар до замовлення
          <textarea
            name="feedback"
            placeholder="Напишіть щось"
            className={css.textareaField}
          />
        </label>
      </form>
      <div
        className={css.btnWrapper}
        onClick={() => {
          navigate("/payment", {
            state: {
              key: currentAdvert.id,
            },
          });
        }}
      >
        <Button title={"Перейти до оплати"} fontSize={"28"} />
      </div>
    </div>
  );
};

export default Order;
