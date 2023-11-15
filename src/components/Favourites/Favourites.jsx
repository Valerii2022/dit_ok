import { useEffect } from "react";
import NotFound from "../NotFound/NotFound.jsx";
import SearchForm from "../SearchhForm/SearchForm.jsx";
import css from "./Favourites.module.css";
import { useDispatch, useSelector } from "react-redux";
import { getAdverts, getFavourites } from "../../redux/selectors.js";
import { fetchAdverts } from "../../redux/operations.js";
import Card from "../Card/Card.jsx";

const Favourites = () => {
  const favouritesId = useSelector(getFavourites);

  const dispatch = useDispatch();
  const { adverts } = useSelector(getAdverts);

  useEffect(() => {
    dispatch(fetchAdverts());
  }, [dispatch]);

  const favourites = adverts.filter((el) => favouritesId.includes(el.id));

  return (
    <>
      <div className={css.searchWrapper}>
        <SearchForm />
      </div>
      <ul className={css.carouselWrap}>
        {favourites.length ? (
          favourites.map((element) => {
            return <Card key={element.id} cardElement={element} />;
          })
        ) : (
          <NotFound />
        )}
      </ul>
    </>
  );
};

export default Favourites;
