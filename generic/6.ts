/*
  Ви маєте форму реєстрації користувачів. 
  Іноді потрібно попередньо заповнити форму даними користувача для оновлення його профілю. 
  Однак вам не завжди потрібно заповнити всі поля. Наприклад, користувач може хотіти оновити лише свій email та пароль, 
  залишивши ім'я та прізвище без змін.

  Виправте тип у аргументі функції так, щоб не було помилок типу.
*/

type User = {
  name: string;
  surname: string;
  email: string;
  password: string;
};

function createOrUpdateUser(initialValues: User) {
  // Оновлення користувача
}

createOrUpdateUser({ email: "user@mail.com", password: "password123" });

export {};

// Для вирішення проблеми визначте параметри initialValues як частковий (Partial) об'єкт типу User. Це дозволить передавати тільки певні частини об'єкта User, не обов'язково всі поля. Ось оновлений код:

// type User = {
//   name: string;
//   surname: string;
//   email: string;
//   password: string;
// }

// function createOrUpdateUser(initialValues: Partial<User>) {
//   // Оновлення користувача
// }

// createOrUpdateUser({ email: 'user@mail.com', password: 'password123' });
// Тепер ви можете передавати лише ті поля, які ви хочете оновити, інші залишаючи без змін.
