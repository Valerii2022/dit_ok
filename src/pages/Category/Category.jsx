import css from "./Category.module.css";
import Button from "../../components/Button/Button";
import closeIcon from "../../images/close.svg";
import { NavLink, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  getCategoryFilter,
  getAdverts,
  getAdvertFilter,
} from "../../redux/selectors";
import { useEffect, useState } from "react";
import Modal from "../../components/Modal/Modal";
import { fetchAdverts } from "../../redux/operations";
import Card from "../../components/Card/Card";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import NotFound from "../../components/NotFound/NotFound";

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

const Category = () => {
  const [unregisterModal, setUnregisterModal] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const category = useSelector(getCategoryFilter);
  const advertFilter = useSelector(getAdvertFilter);
  const { adverts } = useSelector(getAdverts);
  const discountAdverts = adverts.filter((el) => el.sale);

  useEffect(() => {
    dispatch(fetchAdverts());
  }, [dispatch]);

  const handleUnregisterModalOpen = () => {
    setUnregisterModal(false);
  };

  const filteredAdvertsByQuery = advertFilter
    ? adverts.filter((el) => el.description.includes(advertFilter))
    : adverts;

  const filteredAdverts =
    category === "Категорія"
      ? filteredAdvertsByQuery
      : filteredAdvertsByQuery.filter((el) => el.category === category);

  const sliceAdvertsTop = filteredAdverts.slice(0, 8);
  const sliceAdvertsBottom = filteredAdverts.slice(8);

  return (
    <>
      <div className={css.container}>
        <div className={css.breadcrumbs}>
          <NavLink to="/home">Головна /</NavLink>
        </div>
        <section className={css.categoryTop}>
          <h2 className={css.title}>
            {category === "Категорія" ? "Всі товари" : category}
          </h2>
          <ul className={css.carouselWrap}>
            {sliceAdvertsTop.length ? (
              sliceAdvertsTop.map((element) => {
                return (
                  <Card
                    key={element.id}
                    cardElement={element}
                    openModal={setUnregisterModal}
                  />
                );
              })
            ) : (
              <NotFound />
            )}
          </ul>
        </section>
      </div>
      <section className={css.discountSection}>
        <div className={css.container}>
          <h2 className={css.title}>Акційні товари</h2>
          <div className="gd-carousel-wrapper">
            <Carousel
              showDots={false}
              infinite
              className="gd-carousel"
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
          </div>
        </div>
      </section>
      {sliceAdvertsBottom.length ? (
        <div className={css.container}>
          <section className={css.categoryBottom}>
            <ul className={css.carouselWrap}>
              {sliceAdvertsBottom.map((element) => {
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
      ) : (
        <div></div>
      )}
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
