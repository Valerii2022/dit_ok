import css from "./Order.module.css";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import Button from "../../components/Button/Button";
import { useDispatch, useSelector } from "react-redux";
import { getAdverts } from "../../redux/selectors";
import { nanoid } from "nanoid";
import { useEffect } from "react";
import { fetchCurrentAdvert } from "../../redux/operations";

const OrderPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const location = useLocation();
  const { currentAdvert } = useSelector(getAdverts);

  useEffect(() => {
    dispatch(fetchCurrentAdvert(location.state?.key));
  }, [dispatch, location.state?.key]);

  const handleSubmitForm = (e) => {
    e.preventDefault();
    let data = {};
    const formData = new FormData(e.currentTarget);
    formData.forEach((value, name) => (data[name] = value));
    navigate("/payment", {
      state: {
        key: currentAdvert.id,
        data,
        size: location.state?.size,
        quantity: location.state?.quantity,
        advert: location.state?.advert,
      },
    });
  };

  return (
    <div className={css.container}>
      <div className={css.breadcrumbs}>
        <NavLink to="/home">
          <span>Головна</span>
        </NavLink>
        <NavLink to="/category">
          {currentAdvert && (
            <span>{currentAdvert.category ? currentAdvert.category : ""}</span>
          )}
        </NavLink>
      </div>
      {currentAdvert && (
        <div className={css.contentWrapper}>
          <div className={css.imageWrapper}>
            <div className={css.mainImageWrap}>
              <img
                src={currentAdvert.src}
                alt="Main"
                width={200}
                height={200}
              />
            </div>
            <ul className={css.imageList}>
              {currentAdvert.images.map((el) => {
                return (
                  <li key={nanoid(6)}>
                    <img src={el} alt="" width={95} height={95} />
                  </li>
                );
              })}
            </ul>
          </div>
          <div className={css.infoWrapper}>
            <div className={css.generalInfo}>
              <p
                onClick={() =>
                  navigate("/item", {
                    state: {
                      key: currentAdvert.id,
                      quantity: location.state?.quantity,
                      size: location.state?.size,
                    },
                  })
                }
                className={css.detailsLink}
              >
                {currentAdvert.description}
              </p>
              <p>
                <span>Колір:</span>
                <span>{currentAdvert.color}</span>
              </p>
              <p>
                <span>Матеріал:</span>
                <span>{currentAdvert.material}</span>
              </p>
              <p>
                <span>Виробник:</span>
                <span>{currentAdvert.brand}</span>
              </p>
              {location.state.size && (
                <p>
                  <span
                    onClick={() =>
                      navigate("/item", {
                        state: {
                          key: currentAdvert.id,
                          quantity: location.state?.quantity,
                          size: location.state?.size,
                        },
                      })
                    }
                    className={css.detailsLink}
                  >
                    Розмір:
                  </span>
                  <span>
                    {location.state.size
                      ? location.state.size
                      : currentAdvert.sizes[0].size}
                  </span>
                </p>
              )}
              <p>
                <span
                  onClick={() =>
                    navigate("/item", {
                      state: {
                        key: currentAdvert.id,
                        quantity: location.state?.quantity,
                        size: location.state?.size,
                      },
                    })
                  }
                  className={css.detailsLink}
                >
                  Кількість:
                </span>
                <span>
                  {location.state.quantity ? location.state.quantity : "1"}
                </span>
              </p>
            </div>
          </div>
        </div>
      )}
      <form className={css.form} onSubmit={handleSubmitForm}>
        <h2 className={css.formTitle}>Дані для доставки</h2>
        <div className={css.addressWrapper}>
          <label className={css.inputLabel}>
            Адреса
            <input
              required
              type="text"
              name="deliveryAddress"
              placeholder="вул. Маршала Вусика 23"
              className={css.inputField}
            />
          </label>
          <div className={css.radioBtnWrapper}>
            <label>
              <input type="radio" name="delivery" value={"Нова пошта"} />
              Нова пошта
            </label>
            <label>
              <input type="radio" name="delivery" value={"Укрпошта"} />
              Укрпошта
            </label>
          </div>
        </div>
        <label className={css.inputLabel}>
          Коментар до замовлення
          <textarea
            name="feedback"
            placeholder="Напишіть щось"
            className={css.textareaField}
          />
        </label>
        <div className={css.btnWrapper}>
          <Button title={"Перейти до оплати"} fontSize={"28"} />
        </div>
      </form>
    </div>
  );
};

export default OrderPage;
