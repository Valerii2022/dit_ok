import { NavLink } from "react-router-dom";
import css from "./Header.module.css";
import Button from "../Button/Button";
import Modal from "../Modal/Modal";
import { useState } from "react";

const Header = () => {
  const [isModalOpen, setIsOpenModal] = useState(false);

  const handleCategoryModalOpen = () => {
    setIsOpenModal(!isModalOpen);
  };

  return (
    <header className={css.container}>
      <div className={css.logoWrapper}>
        <NavLink className={css.logo} to="/">
          DitOk
        </NavLink>
        <div className={css.searchWrap}>
          <label>
            <input
              type="text"
              name="filter"
              placeholder="Пошук за товарами"
              className={css.input}
            />
          </label>
          <button className={css.categoryBtn} onClick={handleCategoryModalOpen}>
            Категорія
          </button>
          <div className={css.btnWrap}>
            <Button title={"Знайти"} />
          </div>
        </div>
      </div>
      <nav className={css.navigation}>
        <ul className={css.navigateList}>
          <li className={css.navigateItem}>
            <NavLink to="/about">Про нас</NavLink>
          </li>
          <li className={css.navigateItem}>
            <NavLink to="/delivery">Доставка і повернення</NavLink>
          </li>
          <li className={css.navigateItem}>
            <NavLink to="/guarantee">Гарантія і повернення</NavLink>
          </li>
          <li className={css.navigateItem}>
            <NavLink to="/login">Увійти</NavLink>
          </li>
        </ul>
      </nav>
      {isModalOpen && <Modal handleModalClose={handleCategoryModalOpen} />}
    </header>
  );
};

export default Header;
