import { NavLink, useLocation, useNavigate } from "react-router-dom";
import css from "./Item.module.css";
import Button from "../../components/Button/Button";
import closeIcon from "../../images/close.svg";
import { useEffect, useState } from "react";
import Modal from "../../components/Modal/Modal";
import { fetchAdverts } from "../../redux/operations";
import { useDispatch, useSelector } from "react-redux";
import { getFavourites, getItems } from "../../redux/selectors";
import { nanoid } from "nanoid";
import { addToFavourites, removeFromFavourites } from "../../redux/usersSlice";

const Item = () => {
  const [quantity, setQuantity] = useState(1);
  const [unregisterModal, setUnregisterModal] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();
  const isAuth = true;
  const { adverts } = useSelector(getItems);
  const favourites = useSelector(getFavourites);

  useEffect(() => {
    dispatch(fetchAdverts());
  }, [dispatch]);

  const currentAdvert = adverts.filter((el) => el.id === location.state.key)[0];

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
                width={413}
                height={413}
              />
            </div>
            <ul className={css.imageList}>
              {currentAdvert.images.map((el) => {
                return (
                  <li key={nanoid(6)}>
                    <img src={el} alt="" width={197} height={197} />
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
                <span>Ціна:</span>
                <span>{currentAdvert.price} грн</span>
              </p>
            </div>
            <div className={css.sizesWrapper}>
              <div>
                <p>Розміри:</p>
                <ul className={css.boxWrapper}>
                  {currentAdvert.sizes.map((el) => {
                    return (
                      <li key={nanoid(6)} className={css.box}>
                        {el}
                      </li>
                    );
                  })}
                </ul>
              </div>
              <div>
                <p>Кількість:</p>
                <div className={css.quantity}>
                  <span onClick={() => handleQuantityChange("decrement")}>
                    -
                  </span>
                  <div className={css.box}>{quantity}</div>
                  <span onClick={() => handleQuantityChange("increment")}>
                    +
                  </span>
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
              {favourites.includes(currentAdvert.id) ? (
                <div
                  onClick={() =>
                    dispatch(removeFromFavourites(currentAdvert.id))
                  }
                >
                  <Button
                    title={`Видалити з "Улюбленого"`}
                    fontSize={"28"}
                    backgroundColor={"#fff"}
                    border={"#fac917"}
                  />
                </div>
              ) : (
                <div
                  onClick={() => dispatch(addToFavourites(currentAdvert.id))}
                >
                  <Button
                    title={`Додати в "Улюблене"`}
                    fontSize={"28"}
                    backgroundColor={"#fff"}
                    border={"#fac917"}
                  />
                </div>
              )}
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
      )}
    </div>
  );
};

export default Item;
