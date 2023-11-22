import { useDispatch, useSelector } from "react-redux";
import css from "./Card.module.css";
import { useNavigate } from "react-router-dom";
import Button from "../Button/Button";
import { getFavourites, getUserStatus } from "../../redux/selectors";
import heartSvg from "../../images/heart.svg";
import favouriteSvg from "../../images/markedHeart.svg";
import {
  addToFavourites,
  removeFromFavourites,
} from "../../redux/currentUserSlice";
import { setCategoryFilter } from "../../redux/filtersSlice";

const Card = (elem) => {
  const { cardElement, openModal, orders } = elem;
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isAuth = useSelector(getUserStatus);
  const favourites = useSelector(getFavourites);

  const description = [
    cardElement.description,
    cardElement.color,
    cardElement.brand,
    cardElement.material,
  ].join(". ");

  const handleMoreBtnClick = () => {
    dispatch(setCategoryFilter(cardElement.category));
    navigate("/item", { state: { key: cardElement.id } });
  };

  return (
    <div className={css.card}>
      <div className={css.imageWrap}>
        <img src={cardElement.src} alt={cardElement.alt} />
        {favourites.includes(cardElement.id) ? (
          <div
            id={cardElement.id}
            className={css.addToFavourites}
            onClick={(e) => dispatch(removeFromFavourites(e.currentTarget.id))}
          >
            <img src={favouriteSvg} alt="Heart" width={30} />
          </div>
        ) : (
          <div
            id={cardElement.id}
            className={css.addToFavourites}
            onClick={(e) => dispatch(addToFavourites(e.currentTarget.id))}
          >
            <img src={heartSvg} alt="Heart" width={30} />
          </div>
        )}
      </div>
      <p className={css.description}>
        {description.length < 110
          ? `${description}.`
          : `${description.slice(0, 100)}...`}
      </p>
      {cardElement.sale ? (
        <p>
          <span>{cardElement.sale} грн</span>
          <span className={css.salePrice}>{cardElement.price} грн</span>
        </p>
      ) : (
        <p>{cardElement.price} грн</p>
      )}
      {orders ? (
        <div
          className={css.cardBottom}
          onClick={() => {
            {
              isAuth
                ? navigate("/item", {
                    state: {
                      key: cardElement.id,
                      orders,
                    },
                  })
                : openModal(true);
            }
          }}
        >
          <Button title={"Переглянути дані"} />
        </div>
      ) : (
        <div className={css.cardBottom} id={cardElement.id}>
          <div
            className={css.btnWrap}
            onClick={() => {
              {
                isAuth
                  ? navigate("/order", {
                      state: {
                        key: cardElement.id,
                      },
                    })
                  : openModal(true);
              }
            }}
          >
            <Button title={"Купити"} />
          </div>
          <button
            className={css.moreBtn}
            // onClick={() => {
            //   isAuth ? handleMoreBtnClick : openModal(true);
            // }}
            onClick={handleMoreBtnClick}
          >
            Докладніше
          </button>
        </div>
      )}
    </div>
  );
};

export default Card;
