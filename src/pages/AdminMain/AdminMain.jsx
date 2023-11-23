import css from "./AdminMain.module.css";
import orders from "../../redux/orders.json";
import Button from "../../components/Button/Button";

const AdminMain = () => {
  const description = [
    orders[0].advert.description,
    orders[0].advert.color,
    orders[0].advert.brand,
    orders[0].advert.material,
  ].join(". ");

  return (
    <div className={css.container}>
      <h1 className={css.title}>Нові замовлення</h1>
      <ul className={css.orderList}>
        {orders &&
          orders.map((el) => {
            return (
              <li key={el.id} className={css.card}>
                <div className={css.imageWrap}>
                  <img src={el.advert.src} alt={el.advert.description} />
                </div>
                <p className={css.description}>
                  {description.length < 110
                    ? `${description}.`
                    : `${description.slice(0, 100)}...`}
                </p>
                {el.advert.sale ? (
                  <p>
                    <span>{el.advert.sale} грн</span>
                    <span className={css.salePrice}>{el.advert.price} грн</span>
                  </p>
                ) : (
                  <p>{el.advert.price} грн</p>
                )}
                <div className={css.cardBottom}>
                  <Button title={"Переглянути дані"} />
                </div>
              </li>
            );
          })}
      </ul>
    </div>
  );
};

export default AdminMain;
