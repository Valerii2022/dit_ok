import css from "./Home.module.css";
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
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 4,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1280 },
    items: 4,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const responsiveFeedback = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 3,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1280 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const Home = () => {
  const [unregisterModal, setUnregisterModal] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { adverts } = useSelector(getItems);

  useEffect(() => {
    dispatch(fetchAdverts());
  }, [dispatch]);

  const discountAdverts = adverts.filter((el) => el.sale);
  const newAdverts = adverts.filter((el) => el.new);

  const handleUnregisterModalOpen = () => {
    setUnregisterModal(false);
  };

  return (
    <>
      <div className={css.container}>
        <section className={css.newArrivalsSection}>
          <h2 className={css.title}>Нові надходження</h2>
          <Carousel
            showDots={false}
            infinite
            className={css.caruselWrap}
            responsive={responsive}
          >
            {newAdverts.map((element) => {
              return (
                <Card
                  className="legend"
                  key={element.id}
                  cardElement={element}
                  openModal={setUnregisterModal}
                />
              );
            })}
          </Carousel>
        </section>
      </div>
      <div className={css.container}>
        <section className={css.discontSection} id="discount">
          <h2 className={css.title}>Акції</h2>
          <Carousel
            showDots={false}
            infinite
            className={css.caruselWrap}
            responsive={responsive}
          >
            {discountAdverts.map((element) => {
              return (
                <Card
                  className="legend"
                  key={element.id}
                  cardElement={element}
                  openModal={setUnregisterModal}
                />
              );
            })}
          </Carousel>
        </section>
      </div>
      <section className={css.reviewsSection}>
        <div className={css.container}>
          <h2 className={css.title}>Відгуки</h2>
          <Carousel
            showDots={false}
            infinite
            className={css.caruselWrap}
            responsive={responsiveFeedback}
          >
            {reviews.map((elem) => {
              return (
                <div key={elem.id} className="legend">
                  <div className={css.reviewCard}>
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
                  </div>
                </div>
              );
            })}
          </Carousel>
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
