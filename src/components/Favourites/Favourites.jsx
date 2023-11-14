import { useEffect, useState } from "react";
import NotFound from "../NotFound/NotFound.jsx";
import SearchForm from "../SearchhForm/SearchForm.jsx";
import css from "./Favourites.module.css";
import { useDispatch, useSelector } from "react-redux";
import { getAdverts, getFavourites } from "../../redux/selectors.js";
import { fetchAdverts } from "../../redux/operations.js";
import Card from "../Card/Card.jsx";
import Modal from "../Modal/Modal.jsx";
import Button from "../Button/Button.jsx";
import closeIcon from "../../images/close.svg";
import { useNavigate } from "react-router-dom";

const Favourites = () => {
  const [unregisterModal, setUnregisterModal] = useState(false);
  const favouritesId = useSelector(getFavourites);
  const navigate = useNavigate();

  const dispatch = useDispatch();
  const { adverts } = useSelector(getAdverts);

  useEffect(() => {
    dispatch(fetchAdverts());
  }, [dispatch]);

  const handleUnregisterModalOpen = () => {
    setUnregisterModal(false);
  };

  const favourites = adverts.filter((el) => favouritesId.includes(el.id));

  return (
    <>
      <div className={css.searchWrapper}>
        <SearchForm />
      </div>
      <ul className={css.carouselWrap}>
        {favourites.length ? (
          favourites.map((element) => {
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

export default Favourites;
