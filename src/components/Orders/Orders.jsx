import { useEffect } from "react";
import NotFound from "../NotFound/NotFound.jsx";
import SearchForm from "../SearchhForm/SearchForm.jsx";
import css from "./Orders.module.css";
import { useDispatch, useSelector } from "react-redux";
import { getAdverts, getOrders } from "../../redux/selectors.js";
import { fetchAdverts } from "../../redux/operations.js";
import Card from "../Card/Card.jsx";

const Orders = () => {
  const currentOrders = useSelector(getOrders);
  const ordersId = currentOrders.map((el) => el.key);

  const dispatch = useDispatch();
  const { adverts } = useSelector(getAdverts);

  useEffect(() => {
    dispatch(fetchAdverts());
  }, [dispatch]);

  const orders = adverts.filter((el) => ordersId.includes(el.id));

  return (
    <>
      <div className={css.searchWrapper}>
        <SearchForm />
      </div>
      <ul className={css.carouselWrap}>
        {orders.length ? (
          orders.map((element) => {
            return (
              <Card key={element.id} cardElement={element} orders={true} />
            );
          })
        ) : (
          <NotFound />
        )}
      </ul>
    </>
  );
};

export default Orders;
