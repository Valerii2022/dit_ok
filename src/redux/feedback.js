import { nanoid } from "nanoid";
import review from "../images/rev01.png";
import review2 from "../images/rev02.png";
import review3 from "../images/rev03.png";

const reviews = [
  {
    id: nanoid(6),
    name: "Алена Блаблаблаківна",
    src: review,
    text: "Дуже круто! Замовила синочку комбінезончик і донечці сукню.Обидва товари прийшли чудової якості і дуже шкидко! Замовила синочку комбінезончик і донечці сукню.Обидва товари прийшли чудової якості і дуже шкидко!",
  },
  {
    id: nanoid(6),
    name: "Алена Блаблаблаківна",
    src: review2,
    text: "Дуже круто! Замовила синочку комбінезончик і донечці сукню.Обидва товари прийшли чудової якості і дуже шкидко!",
  },
  {
    id: nanoid(6),
    name: "Алена Блаблаблаківна",
    src: review3,
    text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aut quidem necessitatibus perspiciatis fugit laudantium sed neque adipisci similique reprehenderit illum!",
  },
  {
    id: nanoid(6),
    name: "анонім",
    src: review,
    text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aut quidem necessitatibus perspiciatis fugit laudantium sed neque adipisci similique reprehenderit illum!",
  },
  {
    id: nanoid(6),
    name: "Невідомий",
    src: review2,
    text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aut quidem necessitatibus perspiciatis fugit laudantium sed neque adipisci similique reprehenderit illum!",
  },
  {
    id: nanoid(6),
    name: "Користувач Світлана",
    src: review3,
    text: "Дуже круто! Замовила синочку комбінезончик і донечці сукню.Обидва товари прийшли чудової якості і дуже шкидко!",
  },
];

export default reviews;
