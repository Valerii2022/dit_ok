import css from "./Home.module.css";
// import Carousel from "better-react-carousel";
import Button from "../../components/Button/Button.jsx";
import aboutImg from "../../images/about.png";
import heartSvg from "../../images/heart.svg";
import favouriteSvg from "../../images/markedHeart.svg";
import { useNavigate } from "react-router-dom";
import closeIcon from "../../images/close.svg";
import { useEffect, useState } from "react";
import Modal from "../../components/Modal/Modal";
import images from "../../redux/images.js";
import reviews from "../../redux/feedback.js";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { getFavourites, getItems } from "../../redux/selectors.js";
import { addToFavourites, removeFromFavourites } from "../../redux/usersSlice";
import { fetchAdverts } from "../../redux/operations";

const Home = () => {
  const [unregisterModal, setUnregisterModal] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isAuth = false;
  const { adverts, isLoading } = useSelector(getItems);

  useEffect(() => {
    dispatch(fetchAdverts());
  }, [dispatch]);
  console.log(adverts);

  const favourites = useSelector(getFavourites);

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
            {images.map((elem) => {
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
        <section className={css.aboutSection}>
          <h2 className={css.title}>Про нас</h2>
          <div className={css.aboutContentWrap}>
            <div className={css.aboutContent}>
              <p>
                Дитячі товари з доставкою додому – саме такий шопінг віддають
                перевагу сучасним батькам. В онлайн-магазині «DitOk» можна
                купити все необхідне для дітей різного віку – від
                новонародженого до підлітка. Ви заощадите час! Присвятіть його
                собі, чоловікові чи дитині, займіться улюбленою справою,
                відпочиньте, а ми швидко доставимо необхідні товари. Більше
                ніяких стомлюючих поїздок по магазинах у різні частини міста та
                дитячого плачу в чергах! Вигідні покупки вже чекають на вас у
                смартфоні або на комп&#96;ютері.
              </p>
              <p>
                Бути батьком – відповідальна робота. Турбота про дітей
                передбачає вирішення маси побутових питань: гігієна, годування,
                ігри та розвиток, постійне оновлення гардеробу, захоплюючий та
                приємний відпочинок. Дитячий магазин «DitOk» – ваш вірний
                помічник. Ми пропонуємо широкий асортимент якісних товарів,
                знаємо, як полегшити побут, сприяти розвитку та урізноманітнити
                розваги. Онлайн-каталог включає:
              </p>
              <ul className={css.aboutContentList}>
                <li>
                  одяг та взуття для новонароджених, малюків дитсадкового віку,
                  школярів;
                </li>
                <li>
                  іграшки – для найменших, навчальні, набори для творчості,
                  ляльки, машинки, конструктори та інше;
                </li>
                <li>меблі та аксесуари для дитячих кімнат;</li>
                <li>товари для годування, кухонне приладдя;</li>
                <li>засоби гігієни;</li>
                <li>візки та автокрісла;</li>
                <li>різноманітний транспорт для дітей;</li>
                <li>
                  книги та навчальні посібники, у тому числі для дорослих.
                </li>
              </ul>
              <p>
                Вибирайте все для дітей в одному місці. Це зручно! Поступово
                подивіться весь каталог або налаштуйте фільтри, то ви швидше
                знайдете необхідне. Пропонуємо понад 50 тисяч дитячих товарів
                від 200+ українських та зарубіжних брендів. Асортименти
                оновлюється щодня. Модні, стильні, якісні речі, великогабаритні
                товари, дитячі меблі, іграшки зі швидкою доставкою (1–3 дні, і
                товар у вас у місті) – це саме те, що потрібно вам та вашій
                дитині.
              </p>
            </div>
            <img src={aboutImg} alt="About us" width={413} />
          </div>
        </section>
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
