import { NavLink } from "react-router-dom";
import css from "./Header.module.css";
import Button from "../Button/Button";
import Modal from "../Modal/Modal";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setCategoryFilter } from "../../redux/filtersSlice";

const Header = () => {
  const [zIndex, setZIndex] = useState(0);
  const [isModalOpen, setIsOpenModal] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleCategoryModalOpen = () => {
    setZIndex(1000);
    setIsOpenModal(!isModalOpen);
  };

  const handleCategoryClick = (e) => {
    dispatch(setCategoryFilter(e.target.textContent));
    navigate("/category");
    handleCategoryModalOpen(false);
    setZIndex(0);
  };

  return (
    <header className={css.container}>
      <div className={css.logoWrapper}>
        <NavLink className={css.logo} to="/">
          DitOk
        </NavLink>
        <div style={{ zIndex: `${zIndex}` }} className={css.searchWrap}>
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
      {isModalOpen && (
        <Modal handleModalClose={handleCategoryModalOpen}>
          <ul className={css.categoryList} onClick={handleCategoryClick}>
            <li className={css.category} id={"Одяг та взуття"}>
              Одяг та взуття
            </li>
            <li className={css.category}>Іграшки</li>
            <li className={css.category}>Дитяча кімната</li>
            <li className={css.category}>Коляски</li>
            <li className={css.category}>Автокрісла</li>
            <li className={css.category}>Все для годування</li>
            <li className={css.category}>Догляд, гігієна та купання</li>
            <li className={css.category}>Дитячий транспорт</li>
          </ul>
        </Modal>
      )}
    </header>
  );
};

export default Header;
