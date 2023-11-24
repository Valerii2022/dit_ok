import { useEffect } from "react";
import css from "./Modal.module.css";
import { createPortal } from "react-dom";

const modalRoot = document.querySelector("#modal-root");

const Modal = ({ children, handleModalClose, styles }) => {
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
      {styles ? (
        <div className={css.container} onClick={handleOverlayClick}>
          <div style={styles} className={css.modal}>
            {children}
          </div>
        </div>
      ) : (
        <div className={css.modal}>{children}</div>
      )}
    </div>,
    modalRoot
  );
};

export default Modal;
