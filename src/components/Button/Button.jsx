import PropTypes from "prop-types";
import css from "./Button.module.css";

const Button = ({ title, fontSize }) => {
  return (
    <button style={{ fontSize: `${fontSize}px` }} className={css.button}>
      {title}
    </button>
  );
};
export default Button;

Button.propTypes = {
  title: PropTypes.string,
  fontSize: PropTypes.string,
};
