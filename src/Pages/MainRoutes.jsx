import React from "react";
import { Route, Routes } from "react-router-dom";

import Subnav from "../Components/Subnav";



import HomePage from "./Homepage";

import Login from "./Login";
import Productspage from "./ProductsPage";
import SingleProductPage from "./SingleProductPage";
const MainRoutes = () => {
  return (
    <div>
      <Subnav />
      <Routes>

        <Route path="/" element={<Dummy />} />

        <Route path="/" element={<HomePage/>} />
        <Route path="/product" element={<Productspage/>} />

        <Route path="/login" element={<Login />} />
        <Route path="/products/:category/:id" element={<SingleProductPage />} />
        <Route path="/products/:category" element={<Productspage />} />
      </Routes>
    </div>
  );
};

export default MainRoutes;
