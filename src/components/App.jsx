import { Routes, Route, Navigate } from "react-router-dom";
import Home from "../pages/Home/HomePage.jsx";
import Layout from "../components/Layout/Layout.jsx";
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
import AdminHome from "../pages/Admin/Admin.jsx";
import AdminMain from "../pages/AdminMain/AdminMain.jsx";
import { RestrictedRoute } from "../routes/RestrictedRoute/RestrictedRoute.jsx";
import { PrivateRoute } from "../routes/PrivateRoute/PrivateRoute.jsx";
import { AdminRoute } from "../routes/AdminRoute/AdminRoute.jsx";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/delivery" element={<Delivery />} />
          <Route path="/guarantee" element={<Guarantee />} />
          <Route
            path="/login"
            element={
              <RestrictedRoute redirectTo="/contacts" component={<LogIn />} />
            }
          />
          <Route
            path="/signup"
            element={
              <RestrictedRoute redirectTo="/contacts" component={<SignUp />} />
            }
          />
          <Route path="/category" element={<Category />} />
          <Route path="/item" element={<Item />} />
          <Route
            path="/order"
            element={<PrivateRoute redirectTo="/" component={<OrderPage />} />}
          />
          <Route
            path="/payment"
            element={
              <PrivateRoute redirectTo="/login" component={<Payment />} />
            }
          />
          <Route
            path="/account"
            element={
              <PrivateRoute redirectTo="/login" component={<Account />} />
            }
          >
            <Route index element={<General />} />
            <Route path="favourites" element={<Favourites />} />
            <Route path="orders" element={<Orders />} />
          </Route>
          <Route path="*" element={<Navigate to="/" />} />
        </Route>
        <Route
          path="/admin"
          element={<AdminRoute redirectTo="/login" component={<AdminHome />} />}
        >
          <Route index element={<AdminMain />} />
          <Route path="*" element={<Navigate to="/admin" />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
