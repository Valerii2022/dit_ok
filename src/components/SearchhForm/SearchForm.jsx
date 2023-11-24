import { useState } from "react";
import css from "./SearchForm.module.css";
import { useDispatch, useSelector } from "react-redux";
import { getCategoryFilter } from "../../redux/selectors.js";
import { useNavigate } from "react-router-dom";
import Button from "../Button/Button.jsx";
import Modal from "../Modal/Modal.jsx";
import {
  setAdvertFilter,
  setCategoryFilter,
} from "../../redux/filtersSlice.js";

const SearchForm = () => {
  const [zIndex, setZIndex] = useState(0);
  const [isModalOpen, setIsOpenModal] = useState(false);
  const [query, setQuery] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const category = useSelector(getCategoryFilter);
  const modalStyles = {
    top: "96px",
    left: "188px",
    transform: "translateY(0)",
  };

  const handleCategoryModalOpen = () => {
    if (zIndex === 1000) {
      setZIndex(0);
    } else {
      setZIndex(1000);
    }
    setIsOpenModal(!isModalOpen);
  };

  const handleCategoryClick = (e) => {
    e.preventDefault();
    dispatch(setCategoryFilter(e.target.textContent));
    handleCategoryModalOpen(false);
    navigate("/category");
    setZIndex(0);
  };

  const handleSearchBtnClick = (e) => {
    e.preventDefault();
    dispatch(setAdvertFilter(query.trim()));
    navigate("/category");
  };

  return (
    <>
      <form
        style={{ zIndex: `${zIndex}` }}
        className={css.searchWrap}
        onSubmit={handleSearchBtnClick}
      >
        <div className={css.inputWrapper}>
          <label>
            <input
              autoComplete="on"
              value={query}
              onChange={(e) => setQuery(e.currentTarget.value)}
              type="text"
              name="filter"
              placeholder="Пошук за товарами"
              className={css.input}
            />
          </label>
          <button className={css.categoryBtn} onClick={handleCategoryModalOpen}>
            {category.length > 18
              ? `${category.slice(0, 18)}...`
              : `${category}`}
          </button>
        </div>
        <div className={css.btnWrap}>
          <Button title={"Знайти"} />
        </div>
      </form>
      {isModalOpen && (
        <Modal handleModalClose={handleCategoryModalOpen} styles={modalStyles}>
          <ul className={css.categoryList} onClick={handleCategoryClick}>
            <li className={css.category}>Категорія</li>
            <li className={css.category}>Одяг та взуття</li>
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
    </>
  );
};

export default SearchForm;
