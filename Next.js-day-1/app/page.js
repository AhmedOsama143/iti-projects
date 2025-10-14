"use client";
import Link from "next/link";
import React from "react";

export default function Home() {
  return (
    <div className="bg-gray-50 text-gray-800">
      {/* 🟢 Hero Section */}
      <section className="relative bg-[url('https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=1920')] bg-cover bg-center h-[90vh] flex items-center justify-center text-center">
        <div className="bg-black/50 absolute inset-0"></div>
        <div className="relative z-10 max-w-3xl px-4">
          <h1 className="text-5xl md:text-6xl font-extrabold text-white mb-4">
            Upgrade Your Style This Season
          </h1>
          <p className="text-gray-200 mb-6 text-lg">
            Discover our latest collection and exclusive offers — your perfect
            outfit awaits!
          </p>
          <Link
            href="/products"
            className="bg-white text-gray-900 font-semibold px-8 py-3 rounded-full hover:bg-gray-200 transition"
          >
            Shop Now
          </Link>
        </div>
      </section>

      {/* 🟠 Categories Section */}
      <section className="max-w-7xl mx-auto py-20 px-6">
        <h2 className="text-3xl font-bold text-center mb-12">
          Shop by Category
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            {
              name: "Men",
              img: "https://images.unsplash.com/photo-1516822003754-cca485356ecb?q=80&w=600",
            },
            {
              name: "Women",
              img: "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=600",
            },
            {
              name: "Electronics",
              img: "https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?q=80&w=600",
            },
            {
              name: "Accessories",
              img: "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?q=80&w=600",
            },
          ].map((cat) => (
            <div
              key={cat.name}
              className="relative group rounded-lg overflow-hidden shadow-md hover:shadow-xl transition"
            >
              <img
                src={cat.img}
                alt={cat.name}
                className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                <h3 className="text-white text-2xl font-semibold tracking-wide">
                  {cat.name}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 💎 Featured Products */}
      <section className="bg-gradient-to-b from-gray-100 to-white py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-14">
            Featured Products
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
            {[1, 2, 3, 4].map((i) => (
              <div
                key={i}
                className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden transform hover:-translate-y-2"
              >
                <div className="relative">
                  <img
                    src={`https://picsum.photos/600?random=${i}`}
                    alt={`Product ${i}`}
                    className="w-full h-72 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <span className="absolute top-3 left-3 bg-pink-500 text-white px-3 py-1 text-sm rounded-full shadow">
                    Hot
                  </span>
                </div>

                <div className="p-6 text-center">
                  <h3 className="text-xl font-semibold mb-2 text-gray-800 group-hover:text-pink-500 transition">
                    Product {i}
                  </h3>
                  <p className="text-gray-500 mb-3">$ {(i * 20).toFixed(2)}</p>
                  <Link
                    href={`/products/${i}`}
                    className="inline-block mt-2 px-6 py-2 rounded-full bg-gradient-to-r from-pink-500 to-orange-400 text-white font-medium hover:opacity-90 hover:scale-105 transition"
                  >
                    View Details
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 🌈 Promo Banner */}
      <section className="bg-gradient-to-r from-pink-500 to-orange-400 text-white text-center py-24 mt-10">
        <h2 className="text-4xl font-bold mb-4">Mega Sale – Up to 60% Off</h2>
        <p className="text-lg mb-8">
          Refresh your wardrobe with exclusive deals. Limited time only!
        </p>
        <Link
          href="/products"
          className="bg-white text-pink-600 px-10 py-3 rounded-full font-semibold text-lg hover:bg-gray-100 transition shadow-md hover:shadow-lg"
        >
          Shop Now
        </Link>
      </section>

      {/* 🆕 New Arrivals */}
      <section className="max-w-7xl mx-auto py-24 px-6">
        <h2 className="text-4xl font-bold text-center mb-14">New Arrivals</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
          {[5, 6, 7, 8].map((i) => (
            <div
              key={i}
              className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden transform hover:-translate-y-2"
            >
              <img
                src={`https://picsum.photos/600?random=${i + 10}`}
                alt="New product"
                className="w-full h-72 object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute top-3 right-3 bg-orange-400 text-white px-3 py-1 text-sm rounded-full shadow">
                New
              </div>
              <div className="p-6 text-center">
                <h3 className="text-xl font-semibold mb-2 text-gray-800 group-hover:text-orange-500 transition">
                  Item {i}
                </h3>
                <p className="text-gray-500 mb-3">$ {(i * 15).toFixed(2)}</p>
                <Link
                  href={`/products/${i}`}
                  className="inline-block mt-2 px-6 py-2 rounded-full bg-gradient-to-r from-orange-400 to-pink-500 text-white font-medium hover:opacity-90 hover:scale-105 transition"
                >
                  View Product
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 💬 Testimonials */}
      <section className="bg-gray-100 py-24">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-14">What Our Customers Say</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Sarah Ali",
                text: "Absolutely love the quality! Delivery was super fast.",
              },
              {
                name: "Omar Khaled",
                text: "Trendy designs and amazing prices. I’m a fan!",
              },
              {
                name: "Nour Ahmed",
                text: "Customer support was top-notch. Highly recommended.",
              },
            ].map((review, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl p-8 shadow-md hover:shadow-xl transition-all duration-500"
              >
                <p className="text-gray-600 mb-4 italic">"{review.text}"</p>
                <h4 className="font-semibold text-gray-800 text-lg">
                  {review.name}
                </h4>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
