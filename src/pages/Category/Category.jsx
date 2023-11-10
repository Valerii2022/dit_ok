import css from "./Category.module.css";
import Button from "../../components/Button/Button";
import closeIcon from "../../images/close.svg";
import { NavLink, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getCategoryFilter, getItems } from "../../redux/selectors";
import { useEffect, useState } from "react";
import Modal from "../../components/Modal/Modal";
import { fetchAdverts } from "../../redux/operations";
import Card from "../../components/Card/Card";

const Category = () => {
  const [unregisterModal, setUnregisterModal] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const category = useSelector(getCategoryFilter);
  const { adverts } = useSelector(getItems);
  const discountAdverts = adverts.filter((el) => el.sale);

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
          <h2 className={css.title}>{category ? category : "Всі товари"}</h2>
          <ul className={css.caruselWrap}>
            {filteredAdverts.map((element) => {
              return (
                <Card
                  key={element.id}
                  cardElement={element}
                  openModal={setUnregisterModal}
                />
              );
            })}
            {filteredAdverts.map((element) => {
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
      <section className={css.discountSection}>
        <div className={css.container}>
          <h2 className={css.title}>Акційні товари</h2>
          <ul className={css.discontCaruselWrap}>
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
        </div>
      </section>
      <div className={css.container}></div>
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
