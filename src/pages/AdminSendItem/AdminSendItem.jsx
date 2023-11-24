import { NavLink, useLocation } from "react-router-dom";
import orders from "../../redux/orders.json";
import css from "./AdminSendItem.module.css";
import { nanoid } from "nanoid";
import Button from "../../components/Button/Button";

const SendedItem = () => {
  const location = useLocation();

  const currentItem = orders.find((el) => el.id === location.state?.key);

  return (
    <div className={css.container}>
      <div className={css.breadcrumbs}>
        <>
          <NavLink to="/admin">
            <span>Аккаунт</span>
          </NavLink>
        </>
      </div>
      {currentItem && (
        <div className={css.contentWrapper}>
          <div>
            <div className={css.mainImageWrap}>
              <img
                src={currentItem.advert.src}
                alt="Main"
                width={413}
                height={413}
              />
            </div>
            <ul className={css.imageList}>
              {currentItem.advert &&
                currentItem.advert.images.map((el) => {
                  return (
                    <li key={nanoid(6)}>
                      <img src={el} alt="" width={197} height={197} />
                    </li>
                  );
                })}
            </ul>
          </div>
          <div className={css.infoWrapper}>
            <div className={css.generalInfo}>
              <p>{currentItem.advert.description}</p>
              <p>
                <span>Колір:</span>
                <span>{currentItem.advert.color}</span>
              </p>
              <p>
                <span>Матеріал:</span>
                <span>{currentItem.advert.material}</span>
              </p>
              <p>
                <span>Виробник:</span>
                <span>{currentItem.advert.brand}</span>
              </p>
              <p>
                <span>Ціна:</span>
                {currentItem.advert.sale ? (
                  <span>{currentItem.advert.sale} грн</span>
                ) : (
                  <span>{currentItem.advert.price} грн</span>
                )}
              </p>
              <p>
                <span>ПІБ:</span>
                <span>{currentItem.user.name}</span>
              </p>
              <p>
                <span>Адреса:</span>
                <span>{currentItem.user.address}</span>
              </p>
              <p>
                <span>Коментар:</span>
                <span>{currentItem.user.comment}</span>
              </p>
            </div>
            <div>
              <div className={css.sizesWrapper}>
                <div>
                  <p>Розміри:</p>
                  <ul className={css.boxWrapper}>
                    {currentItem.advert.sizes.map((el) => {
                      return (
                        <li key={nanoid(6)}>
                          {Number(currentItem.user.size) === el.size ? (
                            <div
                              style={{ borderColor: "#fac917" }}
                              className={css.label}
                              id={el.size}
                            >
                              {el.size}
                            </div>
                          ) : (
                            <div className={css.label} id={el.size}>
                              {el.size}
                            </div>
                          )}
                        </li>
                      );
                    })}
                  </ul>
                </div>
                <div>
                  <p>Кількість:</p>
                  <div className={css.quantity}>
                    <div className={css.label}>
                      <span className={css.box}>
                        {currentItem.user.quantity}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className={css.btnWrapper}>
              {currentItem.sended ? (
                <Button title={"Відзначити як відправлене"} fontSize={"28"} />
              ) : (
                <Button title={"Замовлення відправлене"} fontSize={"28"} />
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
export default SendedItem;
