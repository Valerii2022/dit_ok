import Button from "../Button/Button";
import css from "./General.module.css";

const General = () => {
  return (
    <>
      <form>
        <div className={css.inputWrapper}>
          <label className={css.label}>
            Ім&#96;я
            <input type="text" name="updatedName" className={css.input} />
          </label>
          <label className={css.label}>
            Прізвище
            <input type="text" name="updatedSurname" className={css.input} />
          </label>
          <label className={css.label}>
            Номер телефону
            <input type="text" name="updatedPhone" className={css.input} />
          </label>
          <label className={css.label}>
            Email
            <input type="text" name="updatedEmail" className={css.input} />
          </label>
        </div>
        <div className={css.btnWrapper}>
          <Button title={"Зберегти зміни"} fontSize={"28"} />
        </div>
      </form>
    </>
  );
};

export default General;
