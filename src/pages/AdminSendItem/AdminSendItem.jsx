import { useLocation } from "react-router-dom";
import orders from "../../redux/orders.json";

const SendedItem = () => {
  const location = useLocation();

  const currentItem = orders.filter((el) => el.id === location.state.key);
  console.log(currentItem);

  return <h1>Item</h1>;
};
export default SendedItem;
