import css from "./Home.module.css";
// import Carousel from "better-react-carousel";
import Button from "../../components/Button/Button.jsx";
import { useNavigate } from "react-router-dom";
import closeIcon from "../../images/close.svg";
import { useEffect, useState } from "react";
import Modal from "../../components/Modal/Modal";
import reviews from "../../redux/feedback.js";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { getItems } from "../../redux/selectors.js";
import { fetchAdverts } from "../../redux/operations";
import AboutUs from "../../components/AboutUs/AboutUs";
import Card from "../../components/Card/Card.jsx";

const Home = () => {
  const [unregisterModal, setUnregisterModal] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { adverts, isLoading } = useSelector(getItems);

  useEffect(() => {
    dispatch(fetchAdverts());
  }, [dispatch]);

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
            {adverts.map((element) => {
              return (
                <Card
                  key={element.id}
                  cardElement={element}
                  openModal={setUnregisterModal}
                />
              );
            })}
          </ul>
        </section>
      </div>
      <div className={css.container}>
        <section className={css.discontSection}>
          <h2 className={css.title}>Акції</h2>
          <ul className={css.caruselWrap}>
            {discountAdverts.map((element) => {
              return (
                <Card
                  key={element.id}
                  cardElement={element}
                  openModal={setUnregisterModal}
                />
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

{
  /* <Carousel cols={4} rows={1} gap={20} loop>
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
        </Carousel> */
}
