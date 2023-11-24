import { NavLink, useLocation } from "react-router-dom";
import css from "./AdminItemDetails.module.css";
import { useSelector } from "react-redux";
import { getAdverts } from "../../redux/selectors";
import { nanoid } from "nanoid";
import Modal from "../../components/Modal/Modal";
import { useState } from "react";

const ItemDetails = () => {
  const [menuModal, setMenuModal] = useState();
  const location = useLocation();
  const { adverts } = useSelector(getAdverts);
  const modalStyles = {
    top: "186px",
    left: "1013px",
    borderRadius: "20px",
    transform: "translateY(0)",
  };

  const currentItem = adverts.find((el) => el.id === location.state?.key);

  const handleMenuModalClose = () => {
    setMenuModal(false);
  };

  return (
    <>
      <div className={css.container}>
        <div className={css.breadcrumbs}>
          <div>
            <NavLink to="/admin/account">
              <span className={css.link}>Аккаунт</span>
            </NavLink>
            <span>Всі позиції</span>
          </div>
          <div onClick={() => setMenuModal(true)} className={css.menu}>
            <p></p>
            <p></p>
            <p></p>
          </div>
        </div>
        {currentItem && (
          <div className={css.contentWrapper}>
            <div>
              <div className={css.mainImageWrap}>
                <img
                  src={currentItem.src}
                  alt="Main"
                  width={413}
                  height={413}
                />
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
      {menuModal && (
        <Modal handleModalClose={handleMenuModalClose} styles={modalStyles}>
          <>
            <div className={css.targetArrow}></div>
            <ul className={css.modalList}>
              <li>Змінити дані про товар</li>
              <li>Додати знижку</li>
              <li>Видалити товар</li>
            </ul>
          </>
        </Modal>
      )}
    </>
  );
};

export default ItemDetails;
