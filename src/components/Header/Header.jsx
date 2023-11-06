import { NavLink } from "react-router-dom";
import css from "./Header.module.css";
import Select from "react-select";
import Button from "../Button/Button";

const selectOptions = [
  { value: "Clothes", label: "Одяг та взуття" },
  { value: "Toys", label: "Іграшки" },
  { value: "Room", label: "Дитяча кімната" },
  { value: "Strollers", label: "Коляски" },
  { value: "Seats", label: "Автокрісла" },
  { value: "Feeding", label: "Все для годування" },
  { value: "Care", label: "Догляд, гігієна та купання" },
  { value: "Transport", label: "Дитячий транспорт" },
];

const selectStyles = {
  control: () => ({
    display: "flex",
    paddingRight: "10px",
    color: "#000",
    fontSize: "18px",
    fontWeight: "500",
    lineHeight: "1.11",
  }),
  option: (styles, { isFocused }) => {
    return {
      ...styles,
      backgroundColor: "transparent",
      color: isFocused ? "#121417" : "rgba(18, 20, 23, 0.20)",
      fontSize: "16px",
      fontWeight: "500",
      lineHeight: "1.25",
      cursor: "pointer",
      paddingLeft: "0",
      paddingRight: "0",
      paddingTop: "4px",
      paddingBottom: "4px",
    };
  },
  placeholder: (styles) => {
    return {
      ...styles,
      color: "#121417",
    };
  },
  dropdownIndicator: (styles, state) => ({
    ...styles,
    svg: {
      fill: "#121417",
    },
    cursor: "pointer",
    transition: "transform 250ms linear",
    transform: state.isFocused ? "rotate(180deg)" : null,
  }),
  menu: (styles) => ({
    ...styles,
    borderRadius: "10px",
    paddingLeft: "18px",
    paddingTop: "10px",
    paddingBottom: "18px",
    paddingRight: "8px",
  }),
  menuList: (styles) => ({
    ...styles,
    "::-webkit-scrollbar": {
      width: "8px",
      height: "0px",
    },
    "::-webkit-scrollbar-thumb": {
      background: "rgba(18, 20, 23, 0.05)",
      borderRadius: "10px",
    },
  }),
};

const Header = () => {
  return (
    <header className={css.container}>
      <img src="./public/DitOk.png" alt="Logo" />
      <div className={css.searchName}>
        <Select
          styles={selectStyles}
          options={selectOptions}
          className={css.selectInput}
          placeholder="Пошук за товарами"
        />
        <div className={css.btnWrap}>
          <Button title={"Знайти"} />
        </div>
      </div>
      <nav className={css.navigation}>
        <ul className={css.navigateList}>
          <li className={css.navigateItem}>
            <NavLink to="/">Про нас</NavLink>
          </li>
          <li className={css.navigateItem}>
            <NavLink to="/">Доставка і повернення</NavLink>
          </li>
          <li className={css.navigateItem}>
            <NavLink to="/content">Гарантія і повернення</NavLink>
          </li>
          <li className={css.navigateItem}>
            <NavLink to="/content">Увійти</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
