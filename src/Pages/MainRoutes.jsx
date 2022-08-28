import React from "react";
import { Route, Routes } from "react-router-dom";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import Productspage from "./ProductsPage";
import SingleProduct from "./SingleProduct";
import HomePage from "./Homepage";
import AddData from "./AddData"
import Bikes from "./Bikes"
import CarPage from "./CarPage"
import Mobile from "./Mobile"
import Login from "./Login";
import RequiredAuth from "../HOC/RequiredAuth";

const MainRoutes = () => {
  return (
    <div>
      <Navbar />
       <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/product" element={<Productspage/>} />
        <Route path="/login" element={<Login />} />
        <Route path="/products/:category/:id" element={<RequiredAuth><SingleProduct/></RequiredAuth>} />
        <Route path="/products/:category" element={<Productspage />} />

        {/* aurag */}
        <Route path="/adddata" element={<AddData/>} />
        <Route path="/bikes" element={<Bikes/>} />
        <Route path="/carpage" element={<CarPage/>} />
        <Route path="/mobile" element={<Mobile/>} />
       </Routes>
      <Footer/>
</div>
  );
};

export default MainRoutes;
