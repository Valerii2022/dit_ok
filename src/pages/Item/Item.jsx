import { NavLink } from "react-router-dom";
import css from "./Item.module.css";
import Button from "../../components/Button/Button";

const Item = () => {
  return (
    <div className={css.container}>
      <div className={css.breadcrumbs}>
        <NavLink to="/home">
          <span>Головна</span>
        </NavLink>
        <NavLink to="/category">
          <span>Одяг і взуття</span>{" "}
        </NavLink>
      </div>
      <div>
        <div>
          <img src="" alt="Main" width={413} height={413} />
          <img src="" alt="" width={197} height={197} />
          <img src="" alt="" width={197} height={197} />
        </div>
        <div>
          <div>
            <p>Утепленний комплекс (штанці і кофтинка) для хлопчика</p>
            <p>
              <span>Колір:</span>
              <span>Сірий</span>
            </p>
            <p>
              <span>Матеріал:</span>
              <span>Поліестер 30%, бавовна 70%</span>
            </p>
            <p>
              <span>Виробник:</span>
              <span>Flamingo</span>
            </p>
            <p>
              <span>Ціна:</span>
              <span>1140 грн</span>
            </p>
          </div>
          <div>
            <p>Розміри:</p>
            <div>122</div>
            <div>128</div>
            <div>134</div>
            <div>140</div>
          </div>
          <div>
            <p>Кількість:</p>
            <span>-</span>
            <div>1</div>
            <span>+</span>
          </div>
          <div>
            <Button title={"Купити"} />
            <button>Додати в &#171;Улюблене &#187;</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Item;
