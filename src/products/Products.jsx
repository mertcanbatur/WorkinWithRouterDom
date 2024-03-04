import React from "react";
import { ProductCard } from "../products";
import { useState, useEffect } from "react";

export default function Products({ user }) {
  const [last10Products, setlast10Products] = useState([]);
  useEffect(() => {
    fetch("https://fakestoreapi.com/products?limit=10")
      .then((res) => res.json())
      .then((res) => setlast10Products(res));
  }, []);
  return (
    <>
      <h2>Ürünler:</h2>

      <div className="row row-cols-sm-5 row-cols-md-4">
        {last10Products.map((item) => (
          <ProductCard key={item.id} item={item} user={user} />
        ))}
      </div>
    </>
  );
}
