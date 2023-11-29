/*
  У вас є тип Form, який містить інформацію про форму, включаючи поле errors. 
  Ви хочете створити новий тип Params, який включає всі поля з Form, крім errors.
*/

type Errors = {
  email?: string[];
  firstName?: string[];
  lastName?: string[];
  phone?: string[];
};

type Form = {
  email: string | null;
  firstName: string | null;
  lastName: string | null;
  phone: string | null;
  errors: Errors;
};

// Реалізуйте Params так, щоб унеможливити поле 'errors' з типу Form
type Params = Form;

export {};

// Для того щоб виключити поле 'errors' з типу Form і створити новий тип Params, ви можете використовувати TypeScript'овий механізм "mapped types" з оператором Omit. Ось оновлений код:

// type Errors = {
//   email?: string[];
//   firstName?: string[];
//   lastName?: string[];
//   phone?: string[];
// };

// type Form = {
//   email: string | null;
//   firstName: string | null;
//   lastName: string | null;
//   phone: string | null;
//   errors: Errors;
// };

// type Params = Omit<Form, 'errors'>;
// Таким чином, Params буде містити всі поля з Form, крім 'errors'.
