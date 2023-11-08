import { NavLink, useNavigate } from "react-router-dom";
import css from "./Item.module.css";
import Button from "../../components/Button/Button";
import itemImg from "../../images/image.jpg";
import closeIcon from "../../images/close.svg";
import { useState } from "react";
import Modal from "../../components/Modal/Modal";

const Item = () => {
  const [quantity, setQuantity] = useState(1);
  const [unregisterModal, setUnregisterModal] = useState(false);
  const navigate = useNavigate();
  const isAuth = false;

  const handleQuantityChange = (value) => {
    if (value === "increment") {
      setQuantity(quantity + 1);
    }
    if (value === "decrement" && quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const handleUnregisterModalOpen = () => {
    setUnregisterModal(false);
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
      <div className={css.contentWrapper}>
        <div className={css.imagesWrapper}>
          <img src={itemImg} alt="Main" width={413} height={413} />
          <img src={itemImg} alt="" width={197} height={197} />
          <img src={itemImg} alt="" width={197} height={197} />
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
              <span>Ціна:</span>
              <span>1140 грн</span>
            </p>
          </div>
          <div className={css.sizesWrapper}>
            <div>
              <p>Розміри:</p>
              <div className={css.boxWrapper}>
                <div className={css.box}>122</div>
                <div className={css.box}>128</div>
                <div className={css.box}>134</div>
                <div className={css.box}>140</div>
              </div>
            </div>
            <div>
              <p>Кількість:</p>
              <div className={css.quantity}>
                <span onClick={() => handleQuantityChange("decrement")}>-</span>
                <div className={css.box}>{quantity}</div>
                <span onClick={() => handleQuantityChange("increment")}>+</span>
              </div>
            </div>
          </div>
          <div className={css.btnWrapper}>
            <div
              onClick={() => {
                {
                  isAuth ? navigate("/order") : setUnregisterModal(true);
                }
              }}
            >
              <Button title={"Купити"} fontSize={"28"} />
            </div>
            <div>
              <Button title={`Додати в "Улюблене"`} fontSize={"28"} />
            </div>
          </div>
        </div>
        {unregisterModal && (
          <Modal handleModalClose={handleUnregisterModalOpen}>
            <div className={css.modalContainer}>
              <img
                className={css.closeIcon}
                src={closeIcon}
                alt="Close icon"
                onClick={handleUnregisterModalOpen}
              />
              <p>Для замовлення увійдіть в аккаунт!</p>
              <div
                className={css.modalBtnWrap}
                onClick={() => navigate("/login")}
              >
                <Button title={"Увійти"} fontSize={"28"} />
              </div>
            </div>
          </Modal>
        )}
      </div>
    </div>
  );
};

export default Item;
