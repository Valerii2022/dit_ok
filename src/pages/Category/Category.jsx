import css from "./Category.module.css";
import Button from "../../components/Button/Button";
import heartSvg from "../../images/heart.svg";
import favouriteSvg from "../../images/markedHeart.svg";
import closeIcon from "../../images/close.svg";
import { NavLink, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  getCategoryFilter,
  getFavourites,
  getItems,
} from "../../redux/selectors";
import { addToFavourites, removeFromFavourites } from "../../redux/usersSlice";
import { useEffect, useState } from "react";
import Modal from "../../components/Modal/Modal";
import { fetchAdverts } from "../../redux/operations";

const Category = () => {
  const [unregisterModal, setUnregisterModal] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const category = useSelector(getCategoryFilter);
  const { adverts } = useSelector(getItems);
  const favourites = useSelector(getFavourites);
  const discountAdverts = adverts.filter((el) => el.sale);
  const isAuth = false;

  useEffect(() => {
    dispatch(fetchAdverts());
  }, [dispatch]);

  const handleUnregisterModalOpen = () => {
    setUnregisterModal(false);
  };

  const filteredAdverts = category
    ? adverts.filter((el) => el.category === category)
    : adverts;

  return (
    <>
      <div className={css.container}>
        <div className={css.breadcrumbs}>
          <NavLink to="/home">Головна /</NavLink>
        </div>
        <section className={css.categoryTop}>
          <h2 className={css.title}>Одяг і взуття </h2>
          <ul className={css.caruselWrap}>
            {filteredAdverts.map((elem) => {
              const description = [
                elem.description,
                elem.color,
                elem.brand,
                elem.material,
              ].join(". ");
              return (
                <li key={elem.id} className={css.card}>
                  <div className={css.imageWrap}>
                    <img src={elem.src} alt={elem.alt} />
                    {favourites.includes(elem.id) ? (
                      <div
                        id={elem.id}
                        className={css.addToFavourites}
                        onClick={(e) =>
                          dispatch(removeFromFavourites(e.currentTarget.id))
                        }
                      >
                        <img src={favouriteSvg} alt="Heart" width={30} />
                      </div>
                    ) : (
                      <div
                        id={elem.id}
                        className={css.addToFavourites}
                        onClick={(e) =>
                          dispatch(addToFavourites(e.currentTarget.id))
                        }
                      >
                        <img src={heartSvg} alt="Heart" width={30} />
                      </div>
                    )}
                  </div>
                  <p className={css.description}>
                    {description.length < 120
                      ? `${description}.`
                      : `${description.slice(0, 110)}...`}
                  </p>
                  {elem.sale ? (
                    <p>
                      <span>{elem.sale} грн</span>
                      <span className={css.salePrice}>{elem.price} грн</span>
                    </p>
                  ) : (
                    <p>{elem.price} грн</p>
                  )}
                  <div className={css.cardBottom}>
                    <div
                      className={css.btnWrap}
                      onClick={() => {
                        {
                          isAuth
                            ? navigate("/order")
                            : setUnregisterModal(true);
                        }
                      }}
                    >
                      <Button title={"Купити"} />
                    </div>
                    <button
                      className={css.moreBtn}
                      onClick={() => {
                        navigate("/item");
                      }}
                    >
                      Докладніше
                    </button>
                  </div>
                </li>
              );
            })}
          </ul>
          {/* <ul className={css.caruselWrap}>
            <li className={css.card}>
              <div className={css.imageWrap}>
                <img src={itemImg} alt="Truck" width={280} height={280} />
                <div className={css.addToFavourites}>
                  <img src={heartSvg} alt="Heart" width={30} />
                </div>
              </div>
              <p>
                Утепленний комплекс (штанці і кофтинка) для хлопчика. Сірий.
                Поліестер 30%, бавовна 70% Flamingo
              </p>
              <p>1440 грн</p>
              <div className={css.cardBottom}>
                <div className={css.btnWrap}>
                  <Button title={"Купити"} />
                </div>
                <button className={css.moreBtn}>Докладніше</button>
              </div>
            </li>
            <li className={css.card}>
              <div className={css.imageWrap}>
                <img src={itemImg} alt="Truck" width={280} height={280} />
                <div className={css.addToFavourites}>
                  <img src={heartSvg} alt="Heart" width={30} />
                </div>
              </div>
              <p>
                Утепленний комплекс (штанці і кофтинка) для хлопчика. Сірий.
                Поліестер 30%, бавовна 70% Flamingo
              </p>
              <p>1440 грн</p>
              <div className={css.cardBottom}>
                <div className={css.btnWrap}>
                  <Button title={"Купити"} />
                </div>
                <button className={css.moreBtn}>Докладніше</button>
              </div>
            </li>
            <li className={css.card}>
              <div className={css.imageWrap}>
                <img src={itemImg} alt="Truck" width={280} height={280} />
                <div className={css.addToFavourites}>
                  <img src={heartSvg} alt="Heart" width={30} />
                </div>
              </div>
              <p>
                Утепленний комплекс (штанці і кофтинка) для хлопчика. Сірий.
                Поліестер 30%, бавовна 70% Flamingo
              </p>
              <p>1440 грн</p>
              <div className={css.cardBottom}>
                <div className={css.btnWrap}>
                  <Button title={"Купити"} />
                </div>
                <button className={css.moreBtn}>Докладніше</button>
              </div>
            </li>
            <li className={css.card}>
              <div className={css.imageWrap}>
                <img src={itemImg} alt="Truck" width={280} height={280} />
                <div className={css.addToFavourites}>
                  <img src={heartSvg} alt="Heart" width={30} />
                </div>
              </div>
              <p>
                Утепленний комплекс (штанці і кофтинка) для хлопчика. Сірий.
                Поліестер 30%, бавовна 70% Flamingo
              </p>
              <p>1440 грн</p>
              <div className={css.cardBottom}>
                <div className={css.btnWrap}>
                  <Button title={"Купити"} />
                </div>
                <button className={css.moreBtn}>Докладніше</button>
              </div>
            </li>
            <li className={css.card}>
              <div className={css.imageWrap}>
                <img src={itemImg} alt="Truck" width={280} height={280} />
                <div className={css.addToFavourites}>
                  <img src={heartSvg} alt="Heart" width={30} />
                </div>
              </div>
              <p>
                Утепленний комплекс (штанці і кофтинка) для хлопчика. Сірий.
                Поліестер 30%, бавовна 70% Flamingo
              </p>
              <p>1440 грн</p>
              <div className={css.cardBottom}>
                <div className={css.btnWrap}>
                  <Button title={"Купити"} />
                </div>
                <button className={css.moreBtn}>Докладніше</button>
              </div>
            </li>
            <li className={css.card}>
              <div className={css.imageWrap}>
                <img src={itemImg} alt="Truck" width={280} height={280} />
                <div className={css.addToFavourites}>
                  <img src={heartSvg} alt="Heart" width={30} />
                </div>
              </div>
              <p>
                Утепленний комплекс (штанці і кофтинка) для хлопчика. Сірий.
                Поліестер 30%, бавовна 70% Flamingo
              </p>
              <p>1440 грн</p>
              <div className={css.cardBottom}>
                <div className={css.btnWrap}>
                  <Button title={"Купити"} />
                </div>
                <button className={css.moreBtn}>Докладніше</button>
              </div>
            </li>
            <li className={css.card}>
              <div className={css.imageWrap}>
                <img src={itemImg} alt="Truck" width={280} height={280} />
                <div className={css.addToFavourites}>
                  <img src={heartSvg} alt="Heart" width={30} />
                </div>
              </div>
              <p>
                Утепленний комплекс (штанці і кофтинка) для хлопчика. Сірий.
                Поліестер 30%, бавовна 70% Flamingo
              </p>
              <p>1440 грн</p>
              <div className={css.cardBottom}>
                <div className={css.btnWrap}>
                  <Button title={"Купити"} />
                </div>
                <button className={css.moreBtn}>Докладніше</button>
              </div>
            </li>
            <li className={css.card}>
              <div className={css.imageWrap}>
                <img src={itemImg} alt="Truck" width={280} height={280} />
                <div className={css.addToFavourites}>
                  <img src={heartSvg} alt="Heart" width={30} />
                </div>
              </div>
              <p>
                Утепленний комплекс (штанці і кофтинка) для хлопчика. Сірий.
                Поліестер 30%, бавовна 70% Flamingo
              </p>
              <p>1440 грн</p>
              <div className={css.cardBottom}>
                <div className={css.btnWrap}>
                  <Button title={"Купити"} />
                </div>
                <button className={css.moreBtn}>Докладніше</button>
              </div>
            </li>
          </ul> */}
        </section>
      </div>
      <section className={css.discontSection}>
        <div className={css.container}>
          <h2 className={css.title}>Акційні товари</h2>
          <ul className={css.caruselWrap}>
            {discountAdverts.map((elem) => {
              const description = [
                elem.description,
                elem.color,
                elem.brand,
                elem.material,
              ].join(". ");
              return (
                <li key={elem.id} className={css.card}>
                  <div className={css.imageWrap}>
                    <img src={elem.src} alt="Truck" width={280} height={280} />
                    {favourites.includes(elem.id) ? (
                      <div
                        id={elem.id}
                        className={css.addToFavourites}
                        onClick={(e) =>
                          dispatch(removeFromFavourites(e.currentTarget.id))
                        }
                      >
                        <img src={favouriteSvg} alt="Heart" width={30} />
                      </div>
                    ) : (
                      <div
                        id={elem.id}
                        className={css.addToFavourites}
                        onClick={(e) =>
                          dispatch(addToFavourites(e.currentTarget.id))
                        }
                      >
                        <img src={heartSvg} alt="Heart" width={30} />
                      </div>
                    )}
                  </div>
                  <p>
                    {description.length < 120
                      ? `${description}.`
                      : `${description.slice(0, 110)}...`}
                  </p>
                  {elem.sale ? (
                    <p>
                      <span>{elem.sale} грн</span>
                      <span className={css.salePrice}>{elem.price} грн</span>
                    </p>
                  ) : (
                    <p>{elem.price} грн</p>
                  )}
                  <div className={css.cardBottom}>
                    <div
                      className={css.btnWrap}
                      onClick={() => {
                        {
                          isAuth
                            ? navigate("/order")
                            : setUnregisterModal(true);
                        }
                      }}
                    >
                      <Button title={"Купити"} />
                    </div>
                    <button
                      className={css.moreBtn}
                      onClick={() => {
                        navigate("/item");
                      }}
                    >
                      Докладніше
                    </button>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </section>
      <div className={css.container}>
        {/* <section className={css.categoryBottom}>
          <ul className={css.caruselWrap}>
            <li className={css.card}>
              <div className={css.imageWrap}>
                <img src={itemImg} alt="Truck" width={280} height={280} />
                <div className={css.addToFavourites}>
                  <img src={heartSvg} alt="Heart" width={30} />
                </div>
              </div>
              <p>
                Утепленний комплекс (штанці і кофтинка) для хлопчика. Сірий.
                Поліестер 30%, бавовна 70% Flamingo
              </p>
              <p>1440 грн</p>
              <div className={css.cardBottom}>
                <div className={css.btnWrap}>
                  <Button title={"Купити"} />
                </div>
                <button className={css.moreBtn}>Докладніше</button>
              </div>
            </li>
            <li className={css.card}>
              <div className={css.imageWrap}>
                <img src={itemImg} alt="Truck" width={280} height={280} />
                <div className={css.addToFavourites}>
                  <img src={heartSvg} alt="Heart" width={30} />
                </div>
              </div>
              <p>
                Утепленний комплекс (штанці і кофтинка) для хлопчика. Сірий.
                Поліестер 30%, бавовна 70% Flamingo
              </p>
              <p>1440 грн</p>
              <div className={css.cardBottom}>
                <div className={css.btnWrap}>
                  <Button title={"Купити"} />
                </div>
                <button className={css.moreBtn}>Докладніше</button>
              </div>
            </li>
            <li className={css.card}>
              <div className={css.imageWrap}>
                <img src={itemImg} alt="Truck" width={280} height={280} />
                <div className={css.addToFavourites}>
                  <img src={heartSvg} alt="Heart" width={30} />
                </div>
              </div>
              <p>
                Утепленний комплекс (штанці і кофтинка) для хлопчика. Сірий.
                Поліестер 30%, бавовна 70% Flamingo
              </p>
              <p>1440 грн</p>
              <div className={css.cardBottom}>
                <div className={css.btnWrap}>
                  <Button title={"Купити"} />
                </div>
                <button className={css.moreBtn}>Докладніше</button>
              </div>
            </li>
            <li className={css.card}>
              <div className={css.imageWrap}>
                <img src={itemImg} alt="Truck" width={280} height={280} />
                <div className={css.addToFavourites}>
                  <img src={heartSvg} alt="Heart" width={30} />
                </div>
              </div>
              <p>
                Утепленний комплекс (штанці і кофтинка) для хлопчика. Сірий.
                Поліестер 30%, бавовна 70% Flamingo
              </p>
              <p>1440 грн</p>
              <div className={css.cardBottom}>
                <div className={css.btnWrap}>
                  <Button title={"Купити"} />
                </div>
                <button className={css.moreBtn}>Докладніше</button>
              </div>
            </li>
            <li className={css.card}>
              <div className={css.imageWrap}>
                <img src={itemImg} alt="Truck" width={280} height={280} />
                <div className={css.addToFavourites}>
                  <img src={heartSvg} alt="Heart" width={30} />
                </div>
              </div>
              <p>
                Утепленний комплекс (штанці і кофтинка) для хлопчика. Сірий.
                Поліестер 30%, бавовна 70% Flamingo
              </p>
              <p>1440 грн</p>
              <div className={css.cardBottom}>
                <div className={css.btnWrap}>
                  <Button title={"Купити"} />
                </div>
                <button className={css.moreBtn}>Докладніше</button>
              </div>
            </li>
            <li className={css.card}>
              <div className={css.imageWrap}>
                <img src={itemImg} alt="Truck" width={280} height={280} />
                <div className={css.addToFavourites}>
                  <img src={heartSvg} alt="Heart" width={30} />
                </div>
              </div>
              <p>
                Утепленний комплекс (штанці і кофтинка) для хлопчика. Сірий.
                Поліестер 30%, бавовна 70% Flamingo
              </p>
              <p>1440 грн</p>
              <div className={css.cardBottom}>
                <div className={css.btnWrap}>
                  <Button title={"Купити"} />
                </div>
                <button className={css.moreBtn}>Докладніше</button>
              </div>
            </li>
            <li className={css.card}>
              <div className={css.imageWrap}>
                <img src={itemImg} alt="Truck" width={280} height={280} />
                <div className={css.addToFavourites}>
                  <img src={heartSvg} alt="Heart" width={30} />
                </div>
              </div>
              <p>
                Утепленний комплекс (штанці і кофтинка) для хлопчика. Сірий.
                Поліестер 30%, бавовна 70% Flamingo
              </p>
              <p>1440 грн</p>
              <div className={css.cardBottom}>
                <div className={css.btnWrap}>
                  <Button title={"Купити"} />
                </div>
                <button className={css.moreBtn}>Докладніше</button>
              </div>
            </li>
            <li className={css.card}>
              <div className={css.imageWrap}>
                <img src={itemImg} alt="Truck" width={280} height={280} />
                <div className={css.addToFavourites}>
                  <img src={heartSvg} alt="Heart" width={30} />
                </div>
              </div>
              <p>
                Утепленний комплекс (штанці і кофтинка) для хлопчика. Сірий.
                Поліестер 30%, бавовна 70% Flamingo
              </p>
              <p>1440 грн</p>
              <div className={css.cardBottom}>
                <div className={css.btnWrap}>
                  <Button title={"Купити"} />
                </div>
                <button className={css.moreBtn}>Докладніше</button>
              </div>
            </li>
          </ul>
        </section> */}
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
    </>
  );
};

export default Category;
