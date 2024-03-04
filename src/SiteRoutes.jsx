import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import PageNotFound from "./pages/PageNotFound";
import ProductLayout from "./products/ProductsLayout";
import { Category, Product, Products } from "./products";
import Login from "./pages/Login";
import Fav from "./pages/Fav";
import PrivateRoute from "./PrivateRoute";

export default function ({ handleLogin, user }) {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home user={user} />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/products" element={<ProductLayout user={user} />}>
          <Route index={true} element={<Products user={user} />} />
          <Route
            path="category/:categoryName"
            element={<Category user={user} />}
          />
          <Route path="product/:productId" element={<Product user={user} />} />
        </Route>
        <Route path="*" element={<PageNotFound />} />
        <Route path="/login" element={<Login handleLogin={handleLogin} />} />
        <Route
          path="/fav"
          element={
            <PrivateRoute user={user}>
              <Fav />
            </PrivateRoute>
          }
        />
      </Routes>
    </>
  );
}
