import { NavLink } from "react-router-dom";
import Button from "../Button/Button";
import css from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={css.container}>
      <ul className={css.footerList}>
        <li>
          <h3 className={css.title}>Інформація</h3>
          <ul className={css.linksList}>
            <li className={css.link}>
              <NavLink to="/about">Про нас</NavLink>
            </li>
            <li className={css.link}>
              <NavLink to="/delivery">Доставка і оплата</NavLink>
            </li>
            <li className={css.link}>
              <NavLink to="/guarantee">Гарантія</NavLink>
            </li>
            <li className={css.link}>
              <NavLink to="/category">Бренди</NavLink>
            </li>
            <li className={css.link}>
              <NavLink to="/">Акції</NavLink>
            </li>
          </ul>
        </li>
        <li>
          <h3 className={css.title}>
            <NavLink to="/">Служба підтримки</NavLink>
          </h3>
          <ul className={css.linksList}>
            <li className={css.link}>
              <NavLink to="/">Контакти</NavLink>
            </li>
            <li className={css.link}>
              <NavLink to="/">Повернення товару</NavLink>
            </li>
            <li className={css.link}>
              <NavLink to="/">Політика безпеки</NavLink>
            </li>
          </ul>
        </li>
        <li>
          <h3 className={css.title}>Слідкуйте за акціями та новинами</h3>
          <form>
            <label>
              <input
                required
                className={css.input}
                type="email"
                name="emailFooter"
                placeholder="Введіть ваш Email"
              />
            </label>
            <div className={css.btnWrap}>
              <Button title={"Підписатися"}></Button>
            </div>
          </form>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
