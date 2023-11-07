import { Routes, Route, Navigate } from "react-router-dom";
import Home from "../pages/Home/HomePage.jsx";
import Layout from "../components/Layout/Layout.jsx";
import About from "../pages/AboutUs/About.jsx";
import Delivery from "../pages/Delivery/Delivery.jsx";
import Guarantee from "../pages/Guarantee/Guarantee.jsx";
import LogIn from "../pages/LogIn/LogIn.jsx";
import SignUp from "../pages/SignUp/SignUp.jsx";

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
        </Route>

        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </>
  );
};

export default App;
