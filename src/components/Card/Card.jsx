import { useDispatch, useSelector } from "react-redux";
import css from "./Card.module.css";
import { useNavigate } from "react-router-dom";
import Button from "../Button/Button";
import { getFavourites } from "../../redux/selectors";
import heartSvg from "../../images/heart.svg";
import favouriteSvg from "../../images/markedHeart.svg";
import { addToFavourites, removeFromFavourites } from "../../redux/usersSlice";

const Card = (elem) => {
  const { cardElement, openModal } = elem;
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isAuth = false;
  const favourites = useSelector(getFavourites);

  const description = [
    cardElement.description,
    cardElement.color,
    cardElement.brand,
    cardElement.material,
  ].join(". ");

  const handleMoreBtnClick = () => {
    navigate("/item", { state: { key: cardElement.id } });
  };

  return (
    <li className={css.card}>
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
        {description.length < 120
          ? `${description}.`
          : `${description.slice(0, 110)}...`}
      </p>
      {cardElement.sale ? (
        <p>
          <span>{cardElement.sale} грн</span>
          <span className={css.salePrice}>{cardElement.price} грн</span>
        </p>
      ) : (
        <p>{cardElement.price} грн</p>
      )}
      <div className={css.cardBottom} id={cardElement.id}>
        <div
          className={css.btnWrap}
          onClick={() => {
            {
              isAuth ? navigate("/order") : openModal(true);
            }
          }}
        >
          <Button title={"Купити"} />
        </div>
        <button className={css.moreBtn} onClick={handleMoreBtnClick}>
          Докладніше
        </button>
      </div>
    </li>
  );
};

export default Card;
