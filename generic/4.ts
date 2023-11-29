/*
  Використовуйте generics та інтерфейси, щоб виправити помилку в наступних класах:
*/

class Component {
  constructor(public props) {}
}

class Page extends Component {
  pageInfo() {
    console.log(this.props.title);
  }
}

export {};

// Для використання generics та інтерфейсів вам слід змінити оголошення класу Component і додати generics для вказівки типу T. Ось оновлений код:

// interface ComponentProps {
//   // Оголошення властивостей, які очікується в props
// }

// class Component<T extends ComponentProps> {
//   constructor(public props: T) {}
// }

// // Припустимо, що у Page має бути властивість title у props
// interface PageProps extends ComponentProps {
//   title: string;
// }

// class Page extends Component<PageProps> {
//   pageInfo() {
//     console.log(this.props.title);
//   }
// }

// // Приклад використання:
// const pageInstance = new Page({ title: "Sample Page Title" });
// pageInstance.pageInfo();
// Тут ми використовуємо інтерфейс ComponentProps для оголошення властивостей, які очікується в props. Клас Component приймає generics <T extends ComponentProps>, щоб вказати, що тип T повинен розширювати ComponentProps. Клас Page вказує конкретний тип PageProps для generics, який містить title та інші властивості.
