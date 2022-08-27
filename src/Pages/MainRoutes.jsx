import React from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "../Components/Navbar";
import Login from "./Login";
import Productspage from "./ProductsPage";
import SingleProductPage from "./SingleProductPage";
const MainRoutes = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Productspage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/products/:id" element={<SingleProductPage />} />
      </Routes>
    </div>
  );
};

export default MainRoutes;
