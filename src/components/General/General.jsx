import { useDispatch } from "react-redux";
import { updateUser } from "../../redux/operations";
import Button from "../Button/Button";
import css from "./General.module.css";

const General = () => {
  const dispatch = useDispatch();

  const handleSubmitForm = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = {};
    formData.forEach((value, name) => {
      if (value.trim()) {
        data[name] = value.trim();
      }
    });
    console.table(data);
    dispatch(
      updateUser({
        id: "3",
        orders: ["777", "rfdr"],
        user: {
          user: {
            name: data.updatedName,
            surname: data.updatedSurname,
            phone: data.updatedPhone,
            email: data.updatedEmail,
            // password: "1444",
          },
        },
      })
    );
  };

  return (
    <>
      <form onSubmit={handleSubmitForm}>
        <div className={css.inputWrapper}>
          <label className={css.label}>
            Ім&#96;я
            <input
              autoComplete="on"
              pattern="[a-zA-Zа-яА-Я і є]+"
              title="Ім'я не повинно включати цифри"
              type="text"
              name="updatedName"
              className={css.input}
            />
          </label>
          <label className={css.label}>
            Прізвище
            <input
              autoComplete="on"
              pattern="[a-zA-Zа-яА-Я і є]+"
              title="Прізвище не повинно включати цифри"
              type="text"
              name="updatedSurname"
              className={css.input}
            />
          </label>
          <label className={css.label}>
            Номер телефону
            <input
              autoComplete="on"
              pattern="[0-9]{3} [0-9]{2}-[0-9]{2}-[0-9]{3}"
              title="Телефон має бути у форматі 000 00-00-000"
              type="tel"
              name="updatedPhone"
              className={css.input}
            />
          </label>
          <label className={css.label}>
            Email
            <input
              autoComplete="on"
              type="email"
              name="updatedEmail"
              className={css.input}
            />
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
