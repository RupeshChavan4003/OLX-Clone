import React from "react";
import { Route, Routes } from "react-router-dom";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import Login from "./Login";
import Productspage from "./ProductsPage";

const MainRoutes = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Productspage />} />
        <Route path="/login" element={<Login />} />
       </Routes>
      <Footer/>
    </div>
  );
};

export default MainRoutes;
