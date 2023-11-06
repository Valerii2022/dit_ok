import { NavLink } from "react-router-dom";
import css from ".//SignUp.module.css";

const SignUp = () => {
  return (
    <div className={css.container}>
      <h2>SignUp Page</h2>
      <NavLink to="/login">Увійти</NavLink>
    </div>
  );
};

export default SignUp;
