import { NavLink, useLocation } from "react-router-dom";
import css from "./AdminItemDetails.module.css";
import { useSelector } from "react-redux";
import { getAdverts } from "../../redux/selectors";
import { nanoid } from "nanoid";

const ItemDetails = () => {
  const location = useLocation();
  const { adverts } = useSelector(getAdverts);

  const currentItem = adverts.find((el) => el.id === location.state?.key);

  return (
    <div className={css.container}>
      <div className={css.breadcrumbs}>
        <NavLink to="/admin/account">
          <span>Аккаунт</span>
        </NavLink>
        <span>Всі позиції</span>
      </div>
      {currentItem && (
        <div className={css.contentWrapper}>
          <div>
            <div className={css.mainImageWrap}>
              <img src={currentItem.src} alt="Main" width={413} height={413} />
            </div>
            <ul className={css.imageList}>
              {currentItem &&
                currentItem.images.map((el) => {
                  return (
                    <li key={nanoid(6)}>
                      <img src={el} alt="" width={197} height={197} />
                    </li>
                  );
                })}
            </ul>
          </div>
          <div className={css.infoWrapper}>
            <div className={css.generalInfo}>
              <p>{currentItem.description}</p>
              <p>
                <span>Колір:</span>
                <span>{currentItem.color}</span>
              </p>
              <p>
                <span>Матеріал:</span>
                <span>{currentItem.material}</span>
              </p>
              <p>
                <span>Виробник:</span>
                <span>{currentItem.brand}</span>
              </p>
              <p>
                <span>Ціна:</span>
                {currentItem.sale ? (
                  <span>{currentItem.sale} грн</span>
                ) : (
                  <span>{currentItem.price} грн</span>
                )}
              </p>
            </div>
            <div>
              <div className={css.sizesWrapper}>
                <div>
                  <p>Розміри:</p>
                  <ul className={css.boxWrapper}>
                    {currentItem.sizes.map((el) => {
                      return (
                        <li key={nanoid(6)}>
                          <div className={css.label} id={el.size}>
                            {el.size}
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ItemDetails;
