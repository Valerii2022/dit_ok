import css from "./AdminMain.module.css";
import orders from "../../redux/orders.json";
import Button from "../../components/Button/Button";
import { useNavigate } from "react-router-dom";

const AdminMain = () => {
  const navigate = useNavigate();
  return (
    <div className={css.container}>
      <h1 className={css.title}>Нові замовлення</h1>
      <ul className={css.orderList}>
        {orders &&
          orders.map((el) => {
            const description = [
              el.advert.description,
              el.advert.color,
              el.advert.brand,
              el.advert.material,
            ].join(". ");
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
                  </p>
                ) : (
                  <p>{el.advert.price} грн</p>
                )}
                <div
                  className={css.cardBottom}
                  onClick={() =>
                    navigate("/admin/item", { state: { key: el.id } })
                  }
                >
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
