import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ProductCard from "./ProductCard";

export default function Category({ user }) {
  const { categoryName } = useParams();
  const [speCategory, setSpeCategory] = useState([]);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/category/${categoryName}`)
      .then((res) => res.json())
      .then((res) => setSpeCategory(res));
  }, [speCategory]);
  return (
    <>
      <h2>Kategori: {categoryName}</h2>
      <div className="row row-cols-sm-5 row-cols-md-4">
        {speCategory.map((item) => (
          <ProductCard key={item.id} item={item} user={user} />
        ))}
      </div>
    </>
  );
}
