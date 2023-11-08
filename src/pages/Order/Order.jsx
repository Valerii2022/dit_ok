import css from "./Order.module.css";
import { NavLink, useNavigate } from "react-router-dom";
import itemImg from "../../images/image.jpg";
import Button from "../../components/Button/Button";

const Order = () => {
  const navigate = useNavigate();

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
      <div className={css.contentWrapper}>
        <div className={css.imagesWrapper}>
          <img src={itemImg} alt="Main" width={200} height={200} />
          <img src={itemImg} alt="" width={95} height={95} />
          <img src={itemImg} alt="" width={95} height={95} />
        </div>
        <div className={css.infoWrapper}>
          <div className={css.generalInfo}>
            <p>Утепленний комплекс (штанці і кофтинка) для хлопчика</p>
            <p>
              <span>Колір:</span>
              <span>Сірий</span>
            </p>
            <p>
              <span>Матеріал:</span>
              <span>Поліестер 30%, бавовна 70%</span>
            </p>
            <p>
              <span>Виробник:</span>
              <span>Flamingo</span>
            </p>
            <p>
              <span>Розмір:</span>
              <span>128</span>
            </p>
            <p>
              <span>Кількість:</span>
              <span>1</span>
            </p>
          </div>
        </div>
      </div>
      <form className={css.form}>
        <p className={css.formTitle}>Дані для доставки</p>
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
          navigate("/home");
        }}
      >
        <Button title={"Перейти до оплати"} fontSize={"28"} />
      </div>
    </div>
  );
};

export default Order;
