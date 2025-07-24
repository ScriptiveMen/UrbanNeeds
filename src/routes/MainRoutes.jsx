import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Products from "../pages/Products";
import ProductDetail from "../pages/ProductDetail";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Cart from "../pages/Cart";
import Contact from "../pages/Contact";
import Policy from "../pages/Policy";
import PageNotFound from "../pages/PageNotFound";

const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/about" element={<About />}></Route>
      <Route path="/contact" element={<Contact />}></Route>
      <Route path="/policy" element={<Policy />}></Route>
      <Route path="/products" element={<Products />}></Route>
      <Route path="/product/:id" element={<ProductDetail />}></Route>
      <Route path="/login" element={<Login />}></Route>
      <Route path="/register" element={<Register />}></Route>
      <Route path="/cart" element={<Cart />}></Route>
      <Route path="*" element={<PageNotFound />}></Route>
    </Routes>
  );
};

export default MainRoutes;
