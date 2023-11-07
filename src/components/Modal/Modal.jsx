import { useEffect } from "react";
import css from "./Modal.module.css";
import { createPortal } from "react-dom";

const modalRoot = document.querySelector("#modal-root");

const Modal = ({ handleModalClose }) => {
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

  return createPortal(
    <div className={css.overlay} onClick={handleOverlayClick}>
      <div className={css.modal}>
        <ul className={css.categoryList}>
          <li className={css.category}>Одяг та взуття</li>
          <li className={css.category}>Іграшки</li>
          <li className={css.category}>Дитяча кімната</li>
          <li className={css.category}>Коляски</li>
          <li className={css.category}>Автокрісла</li>
          <li className={css.category}>Все для годування</li>
          <li className={css.category}>Догляд, гігієна та купання</li>
          <li className={css.category}>Дитячий транспорт</li>
        </ul>
      </div>
    </div>,
    modalRoot
  );
};

export default Modal;
