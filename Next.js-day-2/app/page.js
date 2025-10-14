import Link from "next/link";
import React from "react";

// Enable ISR for this page - revalidate every 30 seconds
export const revalidate = 30;

export default function page() {
  return (
    <>
      {/* ====== HERO SECTION ====== */}
      <section className="bg-gradient-to-r from-blue-950 to-violet-800 h-[500px] text-white py-48 px-8 text-center">
        <h1 className="text-5xl font-extrabold mb-4">
          Welcome to <span className="text-violet-300">Cukur Brand</span>
        </h1>
        <p className="text-gray-300 max-w-2xl mx-auto mb-8 text-lg">
          Your one-stop shop for premium organic and eco-friendly products.
          Embrace a sustainable lifestyle with us!
        </p>
        <Link
          href="/products"
          className="bg-gradient-to-r from-blue-950 to-violet-800 hover:bg-blue-950 text-white px-8 py-3 rounded-full text-lg transition-all"
        >
          Shop Now
        </Link>
      </section>

      {/* ====== FEATURES ====== */}
      <section className="py-20 bg-gray-100 text-center">
        <h2 className="text-3xl font-bold mb-12 text-gray-800">
          Why Choose Us?
        </h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="bg-white p-8 rounded-2xl shadow">
            <h3 className="text-xl font-semibold mb-3 text-violet-500">
              Eco-Friendly
            </h3>
            <p className="text-gray-600">
              Our products are made with the planet in mind — sustainable and
              recyclable materials only.
            </p>
          </div>
          <div className="bg-white p-8 rounded-2xl shadow">
            <h3 className="text-xl font-semibold mb-3 text-violet-500">
              Affordable Quality
            </h3>
            <p className="text-gray-600">
              Get premium quality without breaking the bank. We focus on value
              and durability.
            </p>
          </div>
          <div className="bg-white p-8 rounded-2xl shadow">
            <h3 className="text-xl font-semibold mb-3 text-violet-500">
              Fast Delivery
            </h3>
            <p className="text-gray-600">
              We ensure your orders arrive on time with eco-conscious packaging
              and logistics.
            </p>
          </div>
        </div>
      </section>

      {/* ====== FEATURED PRODUCTS ====== */}
      <section className="py-20 bg-white text-center">
        <h2 className="text-3xl font-bold mb-12 text-gray-800">
          Featured Products
        </h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 max-w-7xl mx-auto px-6">
          {[1, 2, 3, 4].map((i) => (
            <div
              key={i}
              className="border rounded-2xl overflow-hidden shadow hover:shadow-lg transition"
            >
              <img
                src={`https://picsum.photos/400?random=${i}`}
                alt={`Product ${i}`}
                className="object-cover w-full h-52"
              />
              <div className="p-5">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                  Eco Product {i}
                </h3>
                <p className="text-gray-500 text-sm mb-3">
                  Sustainable and stylish. Perfect for daily use.
                </p>
                <Link
                  href="/products"
                  className="text-violet-500 font-semibold hover:underline"
                >
                  View Details →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ====== ABOUT SECTION ====== */}
      <section className="bg-gray-900 text-white py-20 px-8 text-center">
        <h2 className="text-3xl font-bold mb-6">About Cukur Brand</h2>
        <p className="max-w-3xl mx-auto text-gray-300 text-lg leading-relaxed">
          <strong>Cukur Brand</strong> is a cozy and modern café that brings
          together the rich aroma of freshly roasted beans with a welcoming
          atmosphere. It’s the perfect spot to enjoy premium coffee, relax, and
          connect with good vibes.
        </p>
      </section>

      {/* ====== CALL TO ACTION ====== */}
      <section className="bg-gradient-to-r from-blue-950 to-violet-800 text-white py-20 text-center">
        <h2 className="text-3xl font-bold mb-4">Join to the Coffee </h2>
        <p className="text-lg mb-8">
          Be part of a better tomorrow — shop sustainably today!
        </p>
        <Link
          href="/products"
          className="bg-white text-violet-500 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-all"
        >
          Explore Products
        </Link>
      </section>
    </>
  );
}
