import Button from "../../components/Button/Button";
import css from "./AdminNewItem.module.css";
import targetImg from "../../images/target.png";

const NewItem = () => {
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
          <div className={css.btnWrapper}>
            <Button title={"Створити позицію"} fontSize={"28"} />
          </div>
        </form>
      </div>
    </div>
  );
};

export default NewItem;
