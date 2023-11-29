/*
  Вам потрібно реалізувати інтерфейс KeyValuePair, який описує пару ключ-значення. 
  Використовуйте generics, щоб цей інтерфейс міг працювати з будь-якими типами ключів та значень.
*/

interface KeyValuePair {
  key;
  value;
}

export {};

// Для реалізації інтерфейсу KeyValuePair з використанням generics можна змінити оголошення інтерфейсу, дозволяючи вказати типи для ключа та значення. Ось оновлений код:

// interface KeyValuePair<K, V> {
//   key: K;
//   value: V;
// }

// // Приклад використання:
// const stringKeyValuePair: KeyValuePair<string, number> = {
//   key: "example",
//   value: 42,
// };

// const numberKeyValuePair: KeyValuePair<number, boolean> = {
//   key: 123,
//   value: true,
// };
// В цьому коді KeyValuePair приймає два параметри типу K і V, які представляють типи ключа і значення відповідно. Коли ви використовуєте KeyValuePair, ви можете вказати конкретні типи для ключа і значення при створенні об'єктів цього типу.
