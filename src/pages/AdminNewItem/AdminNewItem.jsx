import Button from "../../components/Button/Button";
import css from "./AdminNewItem.module.css";
import targetImg from "../../images/target.png";
import { useState } from "react";

const NewItem = () => {
  const [isSizesOpen, setIsSizesOpen] = useState(false);

  return (
    <div className={css.container}>
      <div className={css.breadcrumbs}>
        <span>Створити позицію</span>
      </div>
      <div className={css.contentWrapper}>
        <div>
          <div className={css.mainImageWrap}>
            <img src={targetImg} alt="Child on play" width={100} />
          </div>
          <ul className={css.imageList}>
            <li>
              <img src={targetImg} alt="Child on play" width={50} />
            </li>
            <li>
              <img src={targetImg} alt="Child on play" width={50} />
            </li>
          </ul>
        </div>
        <form className={css.form}>
          <label>
            Назва
            <input required type="text" name="description" id="description" />
          </label>
          <label>
            Ціна
            <input required type="number" name="price" id="price" />
          </label>
          <label>
            Матеріал
            <input required type="text" name="material" id="material" />
          </label>
          <label>
            Виробник
            <input required type="text" name="brand" id="brand" />
          </label>
          <label
            onClick={(e) => {
              e.preventDefault();
              setIsSizesOpen(!isSizesOpen);
            }}
          >
            Категорія
            <input required type="text" name="brand" />
          </label>
          {isSizesOpen && (
            <label>
              Які є розміри
              <input required type="text" name="brand" />
            </label>
          )}
          <label>
            Колір
            <input required name="brand" />
          </label>
          <label className={css.textarea}>
            Опис
            <textarea required type="textarea" name="brand" />
          </label>
          <div className={css.btnWrapper}>
            <Button title={"Створити позицію"} fontSize={"28"} />
          </div>
        </form>
      </div>
    </div>
  );
};

export default NewItem;
