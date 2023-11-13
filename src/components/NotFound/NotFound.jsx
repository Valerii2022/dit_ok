import notFoundImage from "../../images/not_found.png";
import css from "./NotFound.module.css";

const NotFound = () => {
  return (
    <div className={css.container}>
      <img src={notFoundImage} alt="Not found" width={522} />
      <h2 className={css.title}>Нажаль за вашим запитом нічого не знайдено</h2>
    </div>
  );
};

export default NotFound;
