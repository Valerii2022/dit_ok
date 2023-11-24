import css from "./AdminAccount.module.css";
import Button from "../../components/Button/Button";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { getAdverts } from "../../redux/selectors";
import { useDispatch, useSelector } from "react-redux";
import { fetchAdverts } from "../../redux/operations";

const AdminAccount = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { adverts } = useSelector(getAdverts);

  useEffect(() => {
    dispatch(fetchAdverts());
  }, [dispatch]);
  return (
    <div className={css.container}>
      <div className={css.breadcrumbs}>
        <span>Аккаунт</span>
      </div>
      <h1 className={css.title}>Всі позиції</h1>
      <ul className={css.orderList}>
        {adverts &&
          adverts.map((el) => {
            const description = [
              el.description,
              el.color,
              el.brand,
              el.material,
            ].join(". ");
            return (
              <li key={el.id} className={css.card}>
                <div className={css.imageWrap}>
                  <img src={el.src} alt={el.description} />
                </div>
                <p className={css.description}>
                  {description.length < 110
                    ? `${description}.`
                    : `${description.slice(0, 100)}...`}
                </p>
                {el.sale ? (
                  <p>
                    <span>{el.sale} грн</span>
                    <span className={css.salePrice}>{el.price} грн</span>
                  </p>
                ) : (
                  <p>{el.price} грн</p>
                )}
                <div
                  className={css.cardBottom}
                  onClick={() =>
                    navigate("/admin/details", { state: { key: el.id } })
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

export default AdminAccount;
