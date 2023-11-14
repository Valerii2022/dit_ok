import { NavLink } from "react-router-dom";
import css from "./Header.module.css";
import profileImage from "../../images/profile.svg";
import { getUserStatus } from "../../redux/selectors";
import SearchForm from "../SearchhForm/SearchForm";
import { useSelector } from "react-redux";

const Header = () => {
  const isLoggedIn = useSelector(getUserStatus);

  return (
    <header className={css.container}>
      <div className={css.logoWrapper}>
        <NavLink className={css.logo} to="/">
          DitOk
        </NavLink>
        <SearchForm />
      </div>
      <nav className={css.navigation}>
        <ul className={css.navigateList}>
          <li className={css.navigateItem}>
            <NavLink to="/">Про нас</NavLink>
          </li>
          <li className={css.navigateItem}>
            <NavLink to="/delivery">Доставка і повернення</NavLink>
          </li>
          <li className={css.navigateItem}>
            <NavLink to="/guarantee">Гарантія і повернення</NavLink>
          </li>
          <li className={css.navigateItem}>
            {isLoggedIn ? (
              <NavLink to="/account">
                <img src={profileImage} alt="Profile" />
              </NavLink>
            ) : (
              <NavLink to="/login">Увійти</NavLink>
            )}
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
