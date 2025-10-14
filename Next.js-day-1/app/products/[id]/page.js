"use client";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";

export default function ProductDetails() {
  const { id } = useParams();
  const [product, setProduct] = useState();

  async function getProduct() {
    const res = await fetch(`https://fakestoreapi.com/products/${id}`);
    const data = await res.json();
    setProduct(data);
  }

  useEffect(() => {
    getProduct();
  }, [id]);
  if (!product) return null;

  return (
    <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700 m-5">
      <img
        className="rounded-t-lg w-full h-64 object-contain"
        src={product.image}
        alt={product.title || "Product image"}
      />
      <div className="p-5">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {product.title}
        </h5>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          {product.description}
        </p>
        <p className="mb-3 font-bold text-gray-700 dark:text-gray-400">
          ${product.price}
        </p>
      </div>
    </div>
  );
}
