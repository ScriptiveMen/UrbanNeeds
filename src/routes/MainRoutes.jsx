import React, { lazy } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";

const About = lazy(() => import("../pages/About"));
const Products = lazy(() => import("../pages/Products"));
const Login = lazy(() => import("../pages/Login"));
const Register = lazy(() => import("../pages/Register"));
const Cart = lazy(() => import("../pages/Cart"));
const Contact = lazy(() => import("../pages/Contact"));
const Policy = lazy(() => import("../pages/Policy"));
const PageNotFound = lazy(() => import("../pages/PageNotFound"));
const Profile = lazy(() => import("../pages/Profile"));

const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/about" element={<About />}></Route>
      <Route path="/contact" element={<Contact />}></Route>
      <Route path="/policy" element={<Policy />}></Route>
      <Route path="/products" element={<Products />}></Route>
      <Route path="/login" element={<Login />}></Route>
      <Route path="/register" element={<Register />}></Route>
      <Route path="/cart" element={<Cart />}></Route>
      <Route path="/profile" element={<Profile />}></Route>
      <Route path="*" element={<PageNotFound />}></Route>
    </Routes>
  );
};

export default MainRoutes;
