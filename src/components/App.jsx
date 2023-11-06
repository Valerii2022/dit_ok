import { Routes, Route, Navigate } from "react-router-dom";
import Home from "../pages/Home/HomePage.jsx";
import Content from "../pages/Content/Content.jsx";
import Layout from "../components/Layout/Layout.jsx";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="content" element={<Content />} />
        </Route>

        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </>
  );
};

export default App;
