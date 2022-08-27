import React from "react";
import { Route, Routes } from "react-router-dom";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import Login from "./Login";
import Productspage from "./ProductsPage";
import Subnav from "../Components/Subnav";
import SingleProductPage from "./SingleProductPage";
import HomePage from "./Homepage";
import Login from "./Login";

const MainRoutes = () => {
  return (
    <div>
      <Navbar />
      <Subnav />
       <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/product" element={<Productspage/>} />
        <Route path="/login" element={<Login />} />
        <Route path="/products/:category/:id" element={<SingleProductPage />} />
        <Route path="/products/:category" element={<Productspage />} />
       </Routes>
      <Footer/>
</div>
  );
};

export default MainRoutes;
