import PropTypes from "prop-types";
import css from "./Button.module.css";

const Button = ({ title, fontSize, backgroundColor, border }) => {
  return (
    <button
      style={{
        fontSize: `${fontSize}px`,
        backgroundColor: `${backgroundColor}`,
        borderColor: `${border}`,
      }}
      className={css.button}
    >
      {title}
    </button>
  );
};
export default Button;

Button.propTypes = {
  title: PropTypes.string,
  fontSize: PropTypes.string,
  backgroundColor: PropTypes.string,
  border: PropTypes.string,
};
