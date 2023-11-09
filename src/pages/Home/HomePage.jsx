import css from "./Home.module.css";
// import Carousel from "better-react-carousel";
import Button from "../../components/Button/Button.jsx";
import heartSvg from "../../images/heart.svg";
import favouriteSvg from "../../images/markedHeart.svg";
import { useNavigate } from "react-router-dom";
import closeIcon from "../../images/close.svg";
import { useEffect, useState } from "react";
import Modal from "../../components/Modal/Modal";
import reviews from "../../redux/feedback.js";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { getFavourites, getItems } from "../../redux/selectors.js";
import { addToFavourites, removeFromFavourites } from "../../redux/usersSlice";
import { fetchAdverts } from "../../redux/operations";
import AboutUs from "../../components/AboutUs/AboutUs";

const Home = () => {
  const [unregisterModal, setUnregisterModal] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isAuth = false;
  const { adverts, isLoading } = useSelector(getItems);

  useEffect(() => {
    dispatch(fetchAdverts());
  }, [dispatch]);

  const favourites = useSelector(getFavourites);
  const discountAdverts = adverts.filter((el) => el.sale);

  const handleUnregisterModalOpen = () => {
    setUnregisterModal(false);
  };

  return (
    <>
      <div className={css.container}>
        <section className={css.newArrivalsSection}>
          <h2 className={css.title}>Нові надходження</h2>
          <ul className={css.caruselWrap}>
            {isLoading && <p>Loading...</p>}
            {adverts.map((elem) => {
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
          {/* <Carousel cols={4} rows={1} gap={20} loop>
          <Carousel.Item>
            <div className={css.card}>
              <div className={css.imageWrap}>
                <img src="/truck.jpg" alt="Truck" width={280} height={280} />
                <div className={css.addToFavourites}></div>
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
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className={css.card}>
              <img src="/truck.jpg" alt="Truck" width={280} height={280} />
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
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className={css.card}>
              <img src="/truck.jpg" alt="Truck" width={280} height={280} />
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
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className={css.card}>
              <img src="/truck.jpg" alt="Truck" width={280} height={280} />
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
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className={css.card}>
              <img src="/truck.jpg" alt="Truck" width={280} height={280} />
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
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className={css.card}>
              <div className={css.imageWrap}>
                <img src="/truck.jpg" alt="Truck" width={280} height={280} />
                <div className={css.addToFavourites}></div>
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
            </div>
          </Carousel.Item>
        </Carousel> */}
        </section>
      </div>
      <div className={css.container}>
        <section className={css.discontSection}>
          <h2 className={css.title}>Акції</h2>
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
        </section>
      </div>
      <section className={css.reviewsSection}>
        <div className={css.container}>
          <h2 className={css.title}>Відгуки</h2>
          <ul className={css.reviewsList}>
            {reviews.map((elem) => {
              return (
                <li key={elem.id} className={css.reviewCard}>
                  <img src={elem.src} alt="Reviewer" />
                  <div>
                    <p className={css.reviewTitle}>{elem.name}</p>
                    {elem.text.length < 120 ? (
                      <p>{elem.text}</p>
                    ) : (
                      <p className={css.reviewText}>
                        {elem.text.slice(0, 110)}...
                      </p>
                    )}
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </section>
      <div className={css.container}>
        <AboutUs />
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

export default Home;
