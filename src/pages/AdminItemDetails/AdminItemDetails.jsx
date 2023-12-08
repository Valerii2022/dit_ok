import { NavLink, useLocation, useNavigate } from "react-router-dom";
import css from "./AdminItemDetails.module.css";
import { useDispatch, useSelector } from "react-redux";
import { getAdverts } from "../../redux/selectors";
import { nanoid } from "nanoid";
import Modal from "../../components/Modal/Modal";
import { useState } from "react";
import closeIcon from "../../images/close.svg";
import Button from "../../components/Button/Button";
import { deleteAdvert } from "../../redux/operations";

const ItemDetails = () => {
  const [menuModal, setMenuModal] = useState(false);
  const [discountModal, setDiscountModal] = useState(false);
  const [discount, setDiscount] = useState("");
  const [removalModal, setRemovalModal] = useState(false);
  const [successRemovalModal, setSuccessRemovalModal] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
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

  const handleDiscontModalClose = () => {
    setDiscountModal(false);
  };

  const handleRemovalModalClose = () => {
    setRemovalModal(false);
  };

  const handleSuccessRemovalModalClose = () => {
    setSuccessRemovalModal(false);
    navigate("/admin/account");
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
                  <span>Категорія:</span>
                  <span>{currentItem.category}</span>
                </p>
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
                  {currentItem.sale || discount ? (
                    <>
                      <span>{discount || currentItem.sale} грн</span>
                      <span className={css.salePrice}>
                        {currentItem.price} грн
                      </span>
                    </>
                  ) : (
                    <span>{currentItem.price} грн</span>
                  )}
                </p>
              </div>
              {currentItem.sizes.length !== 0 && (
                <div className={css.sizesWrapper}>
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
              )}
            </div>
          </div>
        )}
      </div>
      {menuModal && (
        <Modal handleModalClose={handleMenuModalClose} styles={modalStyles}>
          <>
            <div className={css.targetArrow}></div>
            <ul className={css.modalList}>
              <li onClick={() => navigate("/admin/new")}>
                Змінити дані про товар
              </li>
              <li
                onClick={() => {
                  setDiscount(currentItem.sale || "");
                  setMenuModal(false);
                  setDiscountModal(true);
                }}
              >
                Додати знижку
              </li>
              <li
                onClick={() => {
                  setMenuModal(false);
                  setRemovalModal(true);
                }}
              >
                Видалити товар
              </li>
            </ul>
          </>
        </Modal>
      )}
      {discountModal && (
        <Modal handleModalClose={handleDiscontModalClose}>
          <div className={css.modalContainer}>
            <img
              className={css.closeIcon}
              src={closeIcon}
              alt="Close icon"
              onClick={handleDiscontModalClose}
            />
            <p>Поточна ціна: {currentItem.price}</p>
            <label className={css.discountLabel}>
              Встановити акційну ціну:
              <input
                onChange={(e) => setDiscount(e.target.value)}
                value={discount}
                type="tel"
              />
            </label>
            <div
              className={css.modalBtnWrap}
              onClick={() => {
                handleDiscontModalClose();
                console.log("updated");
              }}
            >
              <Button title={"Підтвердити"} fontSize={"28"} />
            </div>
          </div>
        </Modal>
      )}
      {removalModal && (
        <Modal handleModalClose={handleRemovalModalClose}>
          <div className={css.modalContainer}>
            <img
              className={css.closeIcon}
              src={closeIcon}
              alt="Close icon"
              onClick={handleRemovalModalClose}
            />
            <p>Ви дійсно хочете видалити товар?</p>
            <div className={css.removalButtonsWrapper}>
              <div
                className={css.modalRemovalBtnWrap}
                onClick={() => {
                  handleRemovalModalClose();
                }}
              >
                <Button title={"Назад"} fontSize={"28"} />
              </div>
              <div
                className={css.modalRemovalBtnWrap}
                onClick={() => {
                  handleRemovalModalClose();
                  setSuccessRemovalModal(true);
                  dispatch(deleteAdvert(currentItem.id));
                }}
              >
                <Button title={"Підтвердити"} fontSize={"28"} />
              </div>
            </div>
          </div>
        </Modal>
      )}
      {successRemovalModal && (
        <Modal handleModalClose={handleSuccessRemovalModalClose}>
          <div className={css.modalContainer}>
            <img
              className={css.closeIcon}
              src={closeIcon}
              alt="Close icon"
              onClick={handleSuccessRemovalModalClose}
            />
            <p className={css.removalTitle}>Товар успішно видалений</p>
          </div>
        </Modal>
      )}
    </>
  );
};

export default ItemDetails;
