import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Product({user}) {
  const { productId } = useParams();
  const [product, setProduct] = useState([]);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${productId}`)
      .then((res) => res.json())
      .then((res) => setProduct(res));
  }, [productId]);

  return (
    <>
      <h1>{product?.title}</h1>
      <img src={product.image} className="w-50 img-thumbnail" />
      <p>{product.description}</p>
      <span>{product.price}</span>
    </>
  );
}

export default Product;
