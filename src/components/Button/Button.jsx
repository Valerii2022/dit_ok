import PropTypes from "prop-types";
import css from "./Button.module.css";

const Button = ({ title }) => {
  return <button className={css.button}>{title}</button>;
};
export default Button;

Button.propTypes = {
  title: PropTypes.string,
};
