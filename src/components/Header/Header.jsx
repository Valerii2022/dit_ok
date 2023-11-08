import { NavLink } from "react-router-dom";
import css from "./Header.module.css";
import Button from "../Button/Button";
import Modal from "../Modal/Modal";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const [isModalOpen, setIsOpenModal] = useState(false);
  const navigate = useNavigate();

  const handleCategoryModalOpen = () => {
    setIsOpenModal(!isModalOpen);
  };

  const handleCategoryClick = (e) => {
    console.dir(e.target.id);
    navigate("/category");
    handleCategoryModalOpen(false);
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
      {isModalOpen && (
        <Modal handleModalClose={handleCategoryModalOpen}>
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
        </Modal>
      )}
    </header>
  );
};

export default Header;
