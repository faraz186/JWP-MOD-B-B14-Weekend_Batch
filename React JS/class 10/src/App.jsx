import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Screens/Home";
import About from "./Screens/About";
import User from "./Screens/User";
import Registration_form from "./Screens/Registration_form";
import NotFound from "./Screens/NotFound";
import Products from "./Screens/Products";
import SingleProduct from "./Screens/SingleProduct";
import ResponsiveDrawer from "./Screens/Dashboard";

const App = () => {
  return (
    <>
      <Routes>
        {/* <Route path="/" element={<h1>Home page</h1>} />
        <Route path="/users/:id" element={<User />} />
        <Route path="/products" element={<Products />} />
        <Route path="/singleproduct/:id" element={<SingleProduct />} /> */}
        
        <Route path="dashboard/*" element={<ResponsiveDrawer />} />
      </Routes>
    </>
  );
};

export default App;
