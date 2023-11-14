import { Routes, Route, Navigate } from "react-router-dom";
import Home from "../pages/Home/HomePage.jsx";
import Layout from "../components/Layout/Layout.jsx";
import About from "../pages/AboutUs/About.jsx";
import Delivery from "../pages/Delivery/Delivery.jsx";
import Guarantee from "../pages/Guarantee/Guarantee.jsx";
import LogIn from "../pages/LogIn/LogIn.jsx";
import SignUp from "../pages/SignUp/SignUp.jsx";
import Category from "../pages/Category/Category.jsx";
import Item from "../pages/Item/Item.jsx";
import OrderPage from "../pages/Order/OrderPage.jsx";
import Payment from "../pages/Payment/Payment.jsx";
import Account from "../pages/Account/Account.jsx";
import Orders from "./Orders/Orders.jsx";
import General from "./General/General.jsx";
import Favourites from "./Favourites/Favourites.jsx";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/delivery" element={<Delivery />} />
          <Route path="/guarantee" element={<Guarantee />} />
          <Route path="/login" element={<LogIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/category" element={<Category />} />
          <Route path="/item" element={<Item />} />
          <Route path="/order" element={<OrderPage />} />
          <Route path="/payment" element={<Payment />} />
          <Route path="/account" element={<Account />}>
            <Route path="general" element={<General />} />
            <Route path="favourites" element={<Favourites />} />
            <Route path="orders" element={<Orders />} />
          </Route>
        </Route>

        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </>
  );
};

export default App;
