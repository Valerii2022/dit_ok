import css from "./Home.module.css";
// import Carousel from "better-react-carousel";
import Button from "../../components/Button/Button.jsx";

const Home = () => {
  return (
    <>
      <div className={css.container}>
        <section className={css.newArrivalsSection}>
          <h2 className={css.title}>Нові надходження</h2>
          <div className={css.caruselWrap}>
            <div className={css.card}>
              <div className={css.imageWrap}>
                <img src="/truck.jpg" alt="Truck" width={280} height={280} />
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
            <div className={css.card}>
              <div className={css.imageWrap}>
                <img src="/truck.jpg" alt="Truck" width={280} height={280} />
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
            <div className={css.card}>
              <div className={css.imageWrap}>
                <img src="/truck.jpg" alt="Truck" width={280} height={280} />
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
            <div className={css.card}>
              <div className={css.imageWrap}>
                <img src="/truck.jpg" alt="Truck" width={280} height={280} />
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
          </div>
          {/* <Carousel cols={4} rows={1} gap={20} loop>
          <Carousel.Item>
            <div className={css.card}>
              <div className={css.imageWrap}>
                <img src="/truck.jpg" alt="Truck" width={280} height={280} />
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
          <Carousel.Item>
            <div className={css.card}>
              <img src="/truck.jpg" alt="Truck" width={280} height={280} />
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
              <img src="/truck.jpg" alt="Truck" width={280} height={280} />
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
              <img src="/truck.jpg" alt="Truck" width={280} height={280} />
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
              <img src="/truck.jpg" alt="Truck" width={280} height={280} />
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
                <img src="/truck.jpg" alt="Truck" width={280} height={280} />
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
        </Carousel> */}
        </section>
      </div>
      <div className={css.container}>
        <section className={css.salesSection}>
          <h2 className={css.title}>Акції</h2>
          <div className={css.caruselWrap}>
            <div className={css.card}>
              <div className={css.imageWrap}>
                <img src="/truck.jpg" alt="Truck" width={280} height={280} />
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
            <div className={css.card}>
              <div className={css.imageWrap}>
                <img src="/truck.jpg" alt="Truck" width={280} height={280} />
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
            <div className={css.card}>
              <div className={css.imageWrap}>
                <img src="/truck.jpg" alt="Truck" width={280} height={280} />
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
            <div className={css.card}>
              <div className={css.imageWrap}>
                <img src="/truck.jpg" alt="Truck" width={280} height={280} />
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
          </div>
        </section>
      </div>
      <section className={css.reviewsSection}>
        <div className={css.container}>
          <h2 className={css.title}>Відгуки</h2>
        </div>
      </section>
      <section>
        <h2 className={css.title}>Про нас</h2>
      </section>
    </>
  );
};

export default Home;
