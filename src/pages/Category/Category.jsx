import css from "./Category.module.css";
import Button from "../../components/Button/Button";
import itemImg from "../../images/truck.jpg";
import heartSvg from "../../images/heart.svg";
import { NavLink } from "react-router-dom";

const Category = () => {
  return (
    <>
      <div className={css.container}>
        <div className={css.breadcrumbs}>
          <NavLink to="/home">Головна /</NavLink>
        </div>
        <section className={css.categoryTop}>
          <h2 className={css.title}>Одяг і взуття </h2>
          <ul className={css.caruselWrap}>
            <li className={css.card}>
              <div className={css.imageWrap}>
                <img src={itemImg} alt="Truck" width={280} height={280} />
                <div className={css.addToFavourites}>
                  <img src={heartSvg} alt="Heart" width={30} />
                </div>
              </div>
              <p>
                Утепленний комплекс (штанці і кофтинка) для хлопчика. Сірий.
                Поліестер 30%, бавовна 70% Flamingo
              </p>
              <p>1440 грн</p>
              <div className={css.cardBottom}>
                <div className={css.btnWrap}>
                  <Button title={"Купити"} />
                </div>
                <button className={css.moreBtn}>Докладніше</button>
              </div>
            </li>
            <li className={css.card}>
              <div className={css.imageWrap}>
                <img src={itemImg} alt="Truck" width={280} height={280} />
                <div className={css.addToFavourites}>
                  <img src={heartSvg} alt="Heart" width={30} />
                </div>
              </div>
              <p>
                Утепленний комплекс (штанці і кофтинка) для хлопчика. Сірий.
                Поліестер 30%, бавовна 70% Flamingo
              </p>
              <p>1440 грн</p>
              <div className={css.cardBottom}>
                <div className={css.btnWrap}>
                  <Button title={"Купити"} />
                </div>
                <button className={css.moreBtn}>Докладніше</button>
              </div>
            </li>
            <li className={css.card}>
              <div className={css.imageWrap}>
                <img src={itemImg} alt="Truck" width={280} height={280} />
                <div className={css.addToFavourites}>
                  <img src={heartSvg} alt="Heart" width={30} />
                </div>
              </div>
              <p>
                Утепленний комплекс (штанці і кофтинка) для хлопчика. Сірий.
                Поліестер 30%, бавовна 70% Flamingo
              </p>
              <p>1440 грн</p>
              <div className={css.cardBottom}>
                <div className={css.btnWrap}>
                  <Button title={"Купити"} />
                </div>
                <button className={css.moreBtn}>Докладніше</button>
              </div>
            </li>
            <li className={css.card}>
              <div className={css.imageWrap}>
                <img src={itemImg} alt="Truck" width={280} height={280} />
                <div className={css.addToFavourites}>
                  <img src={heartSvg} alt="Heart" width={30} />
                </div>
              </div>
              <p>
                Утепленний комплекс (штанці і кофтинка) для хлопчика. Сірий.
                Поліестер 30%, бавовна 70% Flamingo
              </p>
              <p>1440 грн</p>
              <div className={css.cardBottom}>
                <div className={css.btnWrap}>
                  <Button title={"Купити"} />
                </div>
                <button className={css.moreBtn}>Докладніше</button>
              </div>
            </li>
            <li className={css.card}>
              <div className={css.imageWrap}>
                <img src={itemImg} alt="Truck" width={280} height={280} />
                <div className={css.addToFavourites}>
                  <img src={heartSvg} alt="Heart" width={30} />
                </div>
              </div>
              <p>
                Утепленний комплекс (штанці і кофтинка) для хлопчика. Сірий.
                Поліестер 30%, бавовна 70% Flamingo
              </p>
              <p>1440 грн</p>
              <div className={css.cardBottom}>
                <div className={css.btnWrap}>
                  <Button title={"Купити"} />
                </div>
                <button className={css.moreBtn}>Докладніше</button>
              </div>
            </li>
            <li className={css.card}>
              <div className={css.imageWrap}>
                <img src={itemImg} alt="Truck" width={280} height={280} />
                <div className={css.addToFavourites}>
                  <img src={heartSvg} alt="Heart" width={30} />
                </div>
              </div>
              <p>
                Утепленний комплекс (штанці і кофтинка) для хлопчика. Сірий.
                Поліестер 30%, бавовна 70% Flamingo
              </p>
              <p>1440 грн</p>
              <div className={css.cardBottom}>
                <div className={css.btnWrap}>
                  <Button title={"Купити"} />
                </div>
                <button className={css.moreBtn}>Докладніше</button>
              </div>
            </li>
            <li className={css.card}>
              <div className={css.imageWrap}>
                <img src={itemImg} alt="Truck" width={280} height={280} />
                <div className={css.addToFavourites}>
                  <img src={heartSvg} alt="Heart" width={30} />
                </div>
              </div>
              <p>
                Утепленний комплекс (штанці і кофтинка) для хлопчика. Сірий.
                Поліестер 30%, бавовна 70% Flamingo
              </p>
              <p>1440 грн</p>
              <div className={css.cardBottom}>
                <div className={css.btnWrap}>
                  <Button title={"Купити"} />
                </div>
                <button className={css.moreBtn}>Докладніше</button>
              </div>
            </li>
            <li className={css.card}>
              <div className={css.imageWrap}>
                <img src={itemImg} alt="Truck" width={280} height={280} />
                <div className={css.addToFavourites}>
                  <img src={heartSvg} alt="Heart" width={30} />
                </div>
              </div>
              <p>
                Утепленний комплекс (штанці і кофтинка) для хлопчика. Сірий.
                Поліестер 30%, бавовна 70% Flamingo
              </p>
              <p>1440 грн</p>
              <div className={css.cardBottom}>
                <div className={css.btnWrap}>
                  <Button title={"Купити"} />
                </div>
                <button className={css.moreBtn}>Докладніше</button>
              </div>
            </li>
          </ul>
        </section>
      </div>
      <section className={css.discontSection}>
        <div className={css.container}>
          <h2 className={css.title}>Акційні товари</h2>
          <ul className={css.caruselWrap}>
            <li className={css.card}>
              <div className={css.imageWrap}>
                <img src={itemImg} alt="Truck" width={280} height={280} />
                <div className={css.addToFavourites}>
                  <img src={heartSvg} alt="Heart" width={30} />
                </div>
              </div>
              <p>
                Утепленний комплекс (штанці і кофтинка) для хлопчика. Сірий.
                Поліестер 30%, бавовна 70% Flamingo
              </p>
              <p>1440 грн</p>
              <div className={css.cardBottom}>
                <div className={css.btnWrap}>
                  <Button title={"Купити"} />
                </div>
                <button className={css.moreBtn}>Докладніше</button>
              </div>
            </li>
            <li className={css.card}>
              <div className={css.imageWrap}>
                <img src={itemImg} alt="Truck" width={280} height={280} />
                <div className={css.addToFavourites}>
                  <img src={heartSvg} alt="Heart" width={30} />
                </div>
              </div>
              <p>
                Утепленний комплекс (штанці і кофтинка) для хлопчика. Сірий.
                Поліестер 30%, бавовна 70% Flamingo
              </p>
              <p>1440 грн</p>
              <div className={css.cardBottom}>
                <div className={css.btnWrap}>
                  <Button title={"Купити"} />
                </div>
                <button className={css.moreBtn}>Докладніше</button>
              </div>
            </li>
            <li className={css.card}>
              <div className={css.imageWrap}>
                <img src={itemImg} alt="Truck" width={280} height={280} />
                <div className={css.addToFavourites}>
                  <img src={heartSvg} alt="Heart" width={30} />
                </div>
              </div>
              <p>
                Утепленний комплекс (штанці і кофтинка) для хлопчика. Сірий.
                Поліестер 30%, бавовна 70% Flamingo
              </p>
              <p>1440 грн</p>
              <div className={css.cardBottom}>
                <div className={css.btnWrap}>
                  <Button title={"Купити"} />
                </div>
                <button className={css.moreBtn}>Докладніше</button>
              </div>
            </li>
            <li className={css.card}>
              <div className={css.imageWrap}>
                <img src={itemImg} alt="Truck" width={280} height={280} />
                <div className={css.addToFavourites}>
                  <img src={heartSvg} alt="Heart" width={30} />
                </div>
              </div>
              <p>
                Утепленний комплекс (штанці і кофтинка) для хлопчика. Сірий.
                Поліестер 30%, бавовна 70% Flamingo
              </p>
              <p>1440 грн</p>
              <div className={css.cardBottom}>
                <div className={css.btnWrap}>
                  <Button title={"Купити"} />
                </div>
                <button className={css.moreBtn}>Докладніше</button>
              </div>
            </li>
          </ul>
        </div>
      </section>
      <div className={css.container}>
        <section className={css.categoryBottom}>
          <ul className={css.caruselWrap}>
            <li className={css.card}>
              <div className={css.imageWrap}>
                <img src={itemImg} alt="Truck" width={280} height={280} />
                <div className={css.addToFavourites}>
                  <img src={heartSvg} alt="Heart" width={30} />
                </div>
              </div>
              <p>
                Утепленний комплекс (штанці і кофтинка) для хлопчика. Сірий.
                Поліестер 30%, бавовна 70% Flamingo
              </p>
              <p>1440 грн</p>
              <div className={css.cardBottom}>
                <div className={css.btnWrap}>
                  <Button title={"Купити"} />
                </div>
                <button className={css.moreBtn}>Докладніше</button>
              </div>
            </li>
            <li className={css.card}>
              <div className={css.imageWrap}>
                <img src={itemImg} alt="Truck" width={280} height={280} />
                <div className={css.addToFavourites}>
                  <img src={heartSvg} alt="Heart" width={30} />
                </div>
              </div>
              <p>
                Утепленний комплекс (штанці і кофтинка) для хлопчика. Сірий.
                Поліестер 30%, бавовна 70% Flamingo
              </p>
              <p>1440 грн</p>
              <div className={css.cardBottom}>
                <div className={css.btnWrap}>
                  <Button title={"Купити"} />
                </div>
                <button className={css.moreBtn}>Докладніше</button>
              </div>
            </li>
            <li className={css.card}>
              <div className={css.imageWrap}>
                <img src={itemImg} alt="Truck" width={280} height={280} />
                <div className={css.addToFavourites}>
                  <img src={heartSvg} alt="Heart" width={30} />
                </div>
              </div>
              <p>
                Утепленний комплекс (штанці і кофтинка) для хлопчика. Сірий.
                Поліестер 30%, бавовна 70% Flamingo
              </p>
              <p>1440 грн</p>
              <div className={css.cardBottom}>
                <div className={css.btnWrap}>
                  <Button title={"Купити"} />
                </div>
                <button className={css.moreBtn}>Докладніше</button>
              </div>
            </li>
            <li className={css.card}>
              <div className={css.imageWrap}>
                <img src={itemImg} alt="Truck" width={280} height={280} />
                <div className={css.addToFavourites}>
                  <img src={heartSvg} alt="Heart" width={30} />
                </div>
              </div>
              <p>
                Утепленний комплекс (штанці і кофтинка) для хлопчика. Сірий.
                Поліестер 30%, бавовна 70% Flamingo
              </p>
              <p>1440 грн</p>
              <div className={css.cardBottom}>
                <div className={css.btnWrap}>
                  <Button title={"Купити"} />
                </div>
                <button className={css.moreBtn}>Докладніше</button>
              </div>
            </li>
            <li className={css.card}>
              <div className={css.imageWrap}>
                <img src={itemImg} alt="Truck" width={280} height={280} />
                <div className={css.addToFavourites}>
                  <img src={heartSvg} alt="Heart" width={30} />
                </div>
              </div>
              <p>
                Утепленний комплекс (штанці і кофтинка) для хлопчика. Сірий.
                Поліестер 30%, бавовна 70% Flamingo
              </p>
              <p>1440 грн</p>
              <div className={css.cardBottom}>
                <div className={css.btnWrap}>
                  <Button title={"Купити"} />
                </div>
                <button className={css.moreBtn}>Докладніше</button>
              </div>
            </li>
            <li className={css.card}>
              <div className={css.imageWrap}>
                <img src={itemImg} alt="Truck" width={280} height={280} />
                <div className={css.addToFavourites}>
                  <img src={heartSvg} alt="Heart" width={30} />
                </div>
              </div>
              <p>
                Утепленний комплекс (штанці і кофтинка) для хлопчика. Сірий.
                Поліестер 30%, бавовна 70% Flamingo
              </p>
              <p>1440 грн</p>
              <div className={css.cardBottom}>
                <div className={css.btnWrap}>
                  <Button title={"Купити"} />
                </div>
                <button className={css.moreBtn}>Докладніше</button>
              </div>
            </li>
            <li className={css.card}>
              <div className={css.imageWrap}>
                <img src={itemImg} alt="Truck" width={280} height={280} />
                <div className={css.addToFavourites}>
                  <img src={heartSvg} alt="Heart" width={30} />
                </div>
              </div>
              <p>
                Утепленний комплекс (штанці і кофтинка) для хлопчика. Сірий.
                Поліестер 30%, бавовна 70% Flamingo
              </p>
              <p>1440 грн</p>
              <div className={css.cardBottom}>
                <div className={css.btnWrap}>
                  <Button title={"Купити"} />
                </div>
                <button className={css.moreBtn}>Докладніше</button>
              </div>
            </li>
            <li className={css.card}>
              <div className={css.imageWrap}>
                <img src={itemImg} alt="Truck" width={280} height={280} />
                <div className={css.addToFavourites}>
                  <img src={heartSvg} alt="Heart" width={30} />
                </div>
              </div>
              <p>
                Утепленний комплекс (штанці і кофтинка) для хлопчика. Сірий.
                Поліестер 30%, бавовна 70% Flamingo
              </p>
              <p>1440 грн</p>
              <div className={css.cardBottom}>
                <div className={css.btnWrap}>
                  <Button title={"Купити"} />
                </div>
                <button className={css.moreBtn}>Докладніше</button>
              </div>
            </li>
          </ul>
        </section>
      </div>
    </>
  );
};

export default Category;
