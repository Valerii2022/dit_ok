import { NavLink } from "react-router-dom";
import css from "./Header.module.css";
import Button from "../Button/Button";
import Modal from "../Modal/Modal";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setCategoryFilter } from "../../redux/filtersSlice";
import profileImage from "../../images/profile.svg";
import { getUserStatus } from "../../redux/selectors";

const Header = () => {
  const [zIndex, setZIndex] = useState(0);
  const [isModalOpen, setIsOpenModal] = useState(false);
  const [query, setQuery] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(getUserStatus);

  const handleCategoryModalOpen = () => {
    if (zIndex === 1000) {
      setZIndex(0);
    } else {
      setZIndex(1000);
    }
    setIsOpenModal(!isModalOpen);
  };

  const handleCategoryClick = (e) => {
    dispatch(setCategoryFilter(e.target.textContent));
    navigate("/category");
    handleCategoryModalOpen(false);
    setZIndex(0);
  };

  const handleSearchBtnClick = () => {
    navigate("/category", { state: { query: query } });
    setQuery("");
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
              value={query}
              onChange={(e) => setQuery(e.currentTarget.value)}
              type="text"
              name="filter"
              placeholder="Пошук за товарами"
              className={css.input}
            />
          </label>
          <button className={css.categoryBtn} onClick={handleCategoryModalOpen}>
            {isLoggedIn ? "Одяг і взуття" : "Категорія"}
          </button>
          <div className={css.btnWrap} onClick={handleSearchBtnClick}>
            <Button title={"Знайти"} />
          </div>
        </div>
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
      {isModalOpen && (
        <Modal handleModalClose={handleCategoryModalOpen}>
          <ul className={css.categoryList} onClick={handleCategoryClick}>
            <li className={css.category} id={"Одяг та взуття"}>
              Одяг і взуття
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
