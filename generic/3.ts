/*
  У вас є функція merge, яка поєднує два об'єкти. 
  Використовуйте generics, щоб вказати, що ці об'єкти можуть бути будь-якого типу.
*/

type Any = any;

function merge<Any>(objA: any, objB: any) {
  return Object.assign(objA, objB);
}

export {};

// Використання generics може допомогти вам створити функцію merge, яка може працювати з об'єктами будь-якого типу. Ось оновлений код:

// function merge<T, U>(objA: T, objB: U): T & U {
//   return Object.assign(objA, objB);
// }

// // Приклад використання:
// const obj1 = { a: 1, b: 2 };
// const obj2 = { c: 3, d: 4 };

// const mergedObject = merge(obj1, obj2);
// console.log(mergedObject);
// У цьому випадку <T, U> вказує, що objA може бути об'єктом будь-якого типу T, а objB може бути об'єктом будь-якого типу U. Також, T & U вказує, що функція повертає об'єкт, який містить властивості обох типів T та U.
