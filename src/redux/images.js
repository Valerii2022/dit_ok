import item from "../images/truck.jpg";
import item1 from "../images/01.jpg";
import item2 from "../images/02.jpg";
import item3 from "../images/03.jpg";
import { nanoid } from "nanoid";
// import item4 from "../images/04.jpg";
// import item5 from "../images/05.jpg";

const images = [
  {
    id: nanoid(6),
    src: item,
    price: 1500,
    description:
      "Утепленний комплекс (штанці і кофтинка) для хлопчика, комплекс (штанці і кофтинка) для хлопчика",
    brand: "Flamingo",
    material: "Поліестер 30%, бавовна 70%",
    color: "Сірий",
    sale: 1250,
  },

  {
    id: nanoid(6),
    src: item1,
    price: 1300,
    description: "Утепленний комплекс (штанці і кофтинка) для хлопчика",
    brand: "Flamingo",
    material: "Поліестер 30%, бавовна 70%",
    color: "Сірий",
    sale: false,
  },
  {
    id: nanoid(6),
    src: item2,
    price: 700,
    description: "Утепленний комплекс (штанці і кофтинка) для хлопчика",
    brand: "Flamingo",
    material: "Поліестер 30%, бавовна 70%",
    color: "Сірий",
    sale: false,
  },
  {
    id: nanoid(6),
    src: item3,
    price: 1200,
    description: "Утепленний комплекс (штанці і кофтинка) для хлопчика",
    brand: "Flamingo",
    material: "Поліестер 30%, бавовна 70%",
    color: "Сірий",
    sale: 800,
  },
];

export default images;
