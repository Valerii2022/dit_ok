import css from "./Home.module.css";
import Carousel from "better-react-carousel";
import Button from "../../components/Button/Button.jsx";

const Home = () => {
  return (
    <div className={css.container}>
      <section>
        <h2 className={css.title}>Нові надходження</h2>
        <Carousel cols={4} rows={1} gap={20} loop>
          <Carousel.Item>
            <div className={css.card}>
              <div className={css.imageWrap}>
                <img
                  src="../../../public/truck.jpg"
                  alt="Truck"
                  width={280}
                  height={280}
                />
                <div className={css.addToFavourites}>
                  <img
                    src="../../../public/heart.svg"
                    alt=""
                    width={30}
                    height={30}
                  />
                  {/* <svg width="30" height="30">
                    <use href="../../../public/heart.svg"></use>
                  </svg> */}
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
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className={css.card}>
              <img
                src="../../../public/truck.jpg"
                alt="Truck"
                width={280}
                height={280}
              />
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
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className={css.card}>
              <img
                src="../../../public/truck.jpg"
                alt="Truck"
                width={280}
                height={280}
              />
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
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className={css.card}>
              <img
                src="../../../public/truck.jpg"
                alt="Truck"
                width={280}
                height={280}
              />
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
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className={css.card}>
              <img
                src="../../../public/truck.jpg"
                alt="Truck"
                width={280}
                height={280}
              />
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
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className={css.card}>
              <div className={css.imageWrap}>
                <img
                  src="../../../public/truck.jpg"
                  alt="Truck"
                  width={280}
                  height={280}
                />
                <div className={css.addToFavourites}></div>
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
            </div>
          </Carousel.Item>
        </Carousel>
      </section>
    </div>
  );
};

export default Home;
