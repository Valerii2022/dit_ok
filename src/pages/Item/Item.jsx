import { NavLink, useLocation, useNavigate } from "react-router-dom";
import css from "./Item.module.css";
import Button from "../../components/Button/Button";
import closeIcon from "../../images/close.svg";
import { useEffect, useState } from "react";
import Modal from "../../components/Modal/Modal";
import { useDispatch, useSelector } from "react-redux";
import {
  getFavourites,
  getAdverts,
  getUserStatus,
} from "../../redux/selectors";
import { nanoid } from "nanoid";
import {
  addToFavourites,
  removeFromFavourites,
} from "../../redux/currentUserSlice";
import { fetchCurrentAdvert } from "../../redux/operations";

const Item = () => {
  const [quantity, setQuantity] = useState(1);
  const [unregisterModal, setUnregisterModal] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();
  const isAuth = useSelector(getUserStatus);
  const { currentAdvert } = useSelector(getAdverts);
  const favourites = useSelector(getFavourites);
  const [size, setSize] = useState(currentAdvert?.sizes[0].size);

  useEffect(() => {
    if (location.state) {
      dispatch(fetchCurrentAdvert(location.state.key));
    }
  }, [dispatch, location]);

  const handleQuantityChange = (value) => {
    if (value === "increment") {
      setQuantity(quantity + 1);
    }
    if (value === "decrement" && quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const handleBuyBtnClick = () => {
    navigate("/order", {
      state: { key: currentAdvert.id, quantity: quantity, size: size },
    });
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
              {currentAdvert &&
                currentAdvert.images.map((el) => {
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
                {currentAdvert.sale ? (
                  <>
                    <span>{currentAdvert.sale * quantity} грн</span>
                    <span className={css.salePrice}>
                      {currentAdvert.price * quantity} грн
                    </span>
                  </>
                ) : (
                  <span>{currentAdvert.price * quantity} грн</span>
                )}
              </p>
            </div>
            <form onChange={(e) => setSize(e.target.value)}>
              <div className={css.sizesWrapper}>
                <div>
                  <p>Розміри:</p>
                  <ul className={css.boxWrapper}>
                    {currentAdvert.sizes.map((el) => {
                      return (
                        <li key={nanoid(6)}>
                          <input
                            className={css.hidden}
                            value={el.size}
                            id={el.size}
                            type="radio"
                            name="size"
                          />
                          <label htmlFor={el.size}>{el.size}</label>
                        </li>
                      );
                    })}
                  </ul>
                </div>
                <div>
                  <p>Кількість:</p>
                  <div className={css.quantity}>
                    <button
                      type="button"
                      onClick={() => handleQuantityChange("decrement")}
                    >
                      -
                    </button>
                    <label>
                      <span className={css.box}>{quantity}</span>
                    </label>
                    <button
                      type="button"
                      onClick={() => handleQuantityChange("increment")}
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>
              <div className={css.btnWrapper}>
                <div
                  onClick={(e) => {
                    e.preventDefault();
                    {
                      isAuth ? handleBuyBtnClick() : setUnregisterModal(true);
                    }
                  }}
                >
                  <Button title={"Купити"} fontSize={"28"} />
                </div>
                {favourites.includes(currentAdvert.id) ? (
                  <div
                    onClick={(e) => {
                      e.preventDefault();
                      dispatch(removeFromFavourites(currentAdvert.id));
                    }}
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
                    onClick={(e) => {
                      e.preventDefault();
                      dispatch(addToFavourites(currentAdvert.id));
                    }}
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
            </form>
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
