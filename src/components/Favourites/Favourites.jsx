import { useState } from "react";
import NotFound from "../NotFound/NotFound.jsx";
import css from "./Favourites.module.css";
import { useDispatch, useSelector } from "react-redux";
import { getUserStatus } from "../../redux/selectors.js";
import { useNavigate } from "react-router-dom";
import Button from "../Button/Button.jsx";
import Modal from "../Modal/Modal.jsx";
import { setCategoryFilter } from "../../redux/filtersSlice.js";

const Favourites = () => {
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
    <>
      <form style={{ zIndex: `${zIndex}` }} className={css.searchWrap}>
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
      </form>
      <NotFound />
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
    </>
  );
};

export default Favourites;
