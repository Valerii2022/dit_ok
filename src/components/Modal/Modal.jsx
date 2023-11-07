import { useEffect } from "react";
import css from "./Modal.module.css";
import { createPortal } from "react-dom";
import { useNavigate } from "react-router-dom";

const modalRoot = document.querySelector("#modal-root");

const Modal = ({ handleModalClose }) => {
  const navigate = useNavigate();

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.code === "Escape") {
        handleModalClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [handleModalClose]);

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      handleModalClose(false);
    }
  };

  const handleCategoryClick = (e) => {
    console.dir(e.target.id);
    navigate("/category");
    handleModalClose(false);
  };

  return createPortal(
    <div className={css.overlay} onClick={handleOverlayClick}>
      <div className={css.modal}>
        <ul className={css.categoryList} onClick={handleCategoryClick}>
          <li className={css.category} id={"cloth"}>
            Одяг та взуття
          </li>
          <li className={css.category} id={"toys"}>
            Іграшки
          </li>
          <li className={css.category} id={"room"}>
            Дитяча кімната
          </li>
          <li className={css.category} id={"carriage"}>
            Коляски
          </li>
          <li className={css.category} id={"seats"}>
            Автокрісла
          </li>
          <li className={css.category} id={"feeding"}>
            Все для годування
          </li>
          <li className={css.category} id={"care"}>
            Догляд, гігієна та купання
          </li>
          <li className={css.category} id={"transport"}>
            Дитячий транспорт
          </li>
        </ul>
      </div>
    </div>,
    modalRoot
  );
};

export default Modal;
