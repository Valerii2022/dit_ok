/*
  У вас є перелік UserRole, який використовується для класифікації користувачів у вашому додатку.
  Ви хочете створити об'єкт RoleDescription, який зіставлятиме кожну роль користувача з її описом.
*/

export enum UserRole {
  admin = "admin",
  editor = "editor",
  guest = "guest",
}

// Замініть наступний код на версію за допомогою Record
const RoleDescription = {
  admin: "Admin User",
  editor: "Editor User",
  guest: "Guest User",
};

export {};

// Ви можете використовувати Record для створення об'єкта RoleDescription з використанням типу UserRole для ключів та string для значень. Ось оновлений код:

// export enum UserRole {
//   admin = 'admin',
//   editor = 'editor',
//   guest = 'guest',
// }

// const RoleDescription: Record<UserRole, string> = {
//   admin: 'Admin User',
//   editor: 'Editor User',
//   guest: 'Guest User',
// };
// За допомогою Record<UserRole, string>, ви вказуєте, що ключі у RoleDescription мають бути значеннями з перерахування UserRole, а значення - строки.
