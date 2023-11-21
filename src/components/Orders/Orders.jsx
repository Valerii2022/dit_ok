import { useEffect } from "react";
import NotFound from "../NotFound/NotFound.jsx";
import SearchForm from "../SearchhForm/SearchForm.jsx";
import css from "./Orders.module.css";
import { useDispatch, useSelector } from "react-redux";
import { getOrders } from "../../redux/selectors.js";
import { fetchAdverts } from "../../redux/operations.js";
import Card from "../Card/Card.jsx";
import { nanoid } from "nanoid";

const Orders = () => {
  const currentOrders = useSelector(getOrders);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAdverts());
  }, [dispatch]);

  return (
    <>
      <div className={css.searchWrapper}>
        <SearchForm />
      </div>
      <ul className={css.carouselWrap}>
        {currentOrders.length ? (
          currentOrders.map((element) => {
            const orders = {
              order: true,
              size: element.size,
              quantity: element.quantity,
            };
            return (
              <Card
                key={nanoid(6)}
                cardElement={element.advert}
                orders={orders}
              />
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
