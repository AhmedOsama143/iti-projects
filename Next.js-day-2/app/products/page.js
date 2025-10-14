"use client";
import React, { useEffect, useState } from "react";

export default function page() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((err) => console.error("Error fetching products:", err));
  }, []);

  return (
    <div className="min-h-screen bg-gray-900 text-white py-10 pt-[150px] px-6">
      <h1 className="text-4xl font-bold text-center mb-10 text-violet-400">
        Our Products
      </h1>

      {products.length === 0 ? (
        <p className="text-center text-gray-400 text-xl">Loading products...</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-gray-800 p-5 rounded-2xl shadow-lg hover:scale-105 transition-transform duration-300"
            >
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-64 object-contain mb-4 rounded-lg bg-white p-3"
              />
              <h2 className="text-lg font-semibold mb-2 line-clamp-2">
                {product.title}
              </h2>
              <p className="text-gray-400 text-sm mb-3 line-clamp-3">
                {product.description}
              </p>
              <div className="flex justify-between items-center mt-4">
                <span className="text-violet-400 font-bold text-lg">
                  ${product.price}
                </span>
                <button className="bg-violet-500 hover:bg-violet-600 text-white px-4 py-2 rounded-lg transition">
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
