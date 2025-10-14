"use client";
import Image from "next/image";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

export default function About() {
  const values = [
    {
      icon: "💎",
      title: "Quality First",
      desc: "We handpick premium materials and ensure every detail reflects excellence.",
    },
    {
      icon: "🌍",
      title: "Sustainability",
      desc: "Eco-friendly practices are at the heart of what we do — because the planet matters.",
    },
    {
      icon: "🤝",
      title: "Customer-Centric",
      desc: "Our community drives us — your feedback shapes our collections.",
    },
    {
      icon: "⚡",
      title: "Innovation",
      desc: "We stay ahead of trends and technology to create unique experiences.",
    },
    {
      icon: "❤️",
      title: "Passion",
      desc: "We live and breathe fashion — it’s in every thread we design.",
    },
    {
      icon: "📦",
      title: "Reliability",
      desc: "Fast delivery, secure payments, and trusted service — every time.",
    },
  ];

  return (
    <div className="bg-gray-50 text-gray-800 overflow-hidden">
      {/* 🟣 Hero Section */}
      <section className="relative h-[80vh] flex items-center justify-center text-center bg-[url('https://images.unsplash.com/photo-1520975916090-3105956dac38?q=80&w=1920')] bg-cover bg-center">
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-transparent"></div>
        <div className="relative z-10 px-4 max-w-3xl">
          <h1 className="text-6xl md:text-7xl font-extrabold text-white mb-4 tracking-tight">
            Who <span className="text-blue-400">We Are</span>
          </h1>
          <p className="text-gray-200 text-lg md:text-xl leading-relaxed">
            A modern fashion & lifestyle brand redefining online shopping
            through style, quality, and innovation.
          </p>
        </div>
      </section>

      {/* 🟢 Brand Identity */}
      <section className="max-w-7xl mx-auto py-24 px-6 md:px-10 grid md:grid-cols-2 gap-14 items-center">
        <div className="space-y-6">
          <h2 className="text-4xl font-bold text-gray-900 leading-tight">
            We’re more than a store —<br /> we’re a{" "}
            <span className="text-blue-600">movement of style</span>.
          </h2>
          <p className="text-gray-600 leading-relaxed">
            Since day one, our mission has been simple: to make fashion
            accessible, expressive, and empowering. From minimalist essentials
            to bold statements, every piece we offer is designed with love,
            sustainability, and authenticity.
          </p>
          <p className="text-gray-600 leading-relaxed">
            We partner with trusted suppliers and artisans worldwide to bring
            you collections that reflect craftsmanship and modern design —
            without compromise.
          </p>
        </div>

        <div className="relative rounded-3xl overflow-hidden shadow-2xl">
          <img
            src="https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?q=80&w=1200"
            alt="Fashion Inspiration"
            className="w-full h-[480px] object-cover hover:scale-105 transition-transform duration-700"
          />
        </div>
      </section>

      {/* 💎 Modern Values Carousel Section */}
      <section className="bg-gray-50 py-24">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-16">Our Core Values</h2>

          <div className="relative overflow-hidden">
            <div id="carousel-track" className="flex gap-6 animate-scroll">
              {[
                {
                  title: "Quality First",
                  desc: "We handpick premium materials and ensure every detail reflects excellence.",
                  img: "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?q=80&w=600",
                },
                {
                  title: "Sustainability",
                  desc: "Eco-friendly practices are at the heart of what we do — because the planet matters.",
                  img: "https://images.unsplash.com/photo-1503341455253-b2e723bb3dbb?q=80&w=600",
                },
                {
                  title: "Innovation",
                  desc: "We stay ahead of trends and technology to create unique experiences.",
                  img: "https://images.unsplash.com/photo-1520975916090-3105956dac38?q=80&w=600",
                },
                {
                  title: "Customer Focus",
                  desc: "Our community drives us — your feedback shapes our collections.",
                  img: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=600",
                },
                {
                  title: "Reliability",
                  desc: "Fast delivery, secure payments, and trusted service — every time.",
                  img: "https://images.unsplash.com/photo-1549122728-f519709caa9c?q=80&w=600",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="min-w-[300px] md:min-w-[360px] bg-white rounded-3xl shadow-md hover:shadow-2xl transition-all duration-500 overflow-hidden group"
                >
                  <div className="relative">
                    <img
                      src={item.img}
                      alt={item.title}
                      className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    <h3 className="absolute bottom-4 left-4 text-white text-xl font-semibold">
                      {item.title}
                    </h3>
                  </div>
                  <div className="p-5 text-gray-600 text-sm leading-relaxed">
                    {item.desc}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* 🔥 Animation Style */}
        <style jsx>{`
          @keyframes scroll {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(-50%);
            }
          }
          .animate-scroll {
            width: max-content;
            animation: scroll 20s linear infinite;
          }
        `}</style>
      </section>

      {/* 🟠 Team Section */}
      <section className="py-24 bg-gray-100">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-16">Meet the Dream Team</h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-10">
            {[
              {
                name: "Ahmed Osama",
                role: "Founder & CEO",
                img: "https://images.unsplash.com/photo-1603415526960-f7e0328ec8aa?q=80&w=400",
              },
              {
                name: "Sara Ahmed",
                role: "Creative Director",
                img: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?q=80&w=400",
              },
              {
                name: "Omar Khaled",
                role: "Marketing Manager",
                img: "https://images.unsplash.com/photo-1600180758890-6cc96cd0f5b9?q=80&w=400",
              },
              {
                name: "Nour Ali",
                role: "Lead Designer",
                img: "https://images.unsplash.com/photo-1554151228-14d9def656e4?q=80&w=400",
              },
            ].map((m, i) => (
              <div
                key={i}
                className="bg-white p-6 rounded-2xl shadow hover:shadow-lg hover:-translate-y-2 transition-all duration-300"
              >
                <img
                  src={m.img}
                  alt={m.name}
                  className="w-32 h-32 object-cover rounded-full mx-auto mb-5"
                />
                <h3 className="text-xl font-semibold text-gray-800">
                  {m.name}
                </h3>
                <p className="text-blue-600">{m.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 🔥 Stats Section */}
      <section className="bg-gradient-to-r from-blue-700 to-indigo-800 text-white py-20 text-center">
        <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-8">
          {[
            { num: "500K+", label: "Happy Customers" },
            { num: "10K+", label: "Products Sold" },
            { num: "4.9★", label: "Average Rating" },
            { num: "35+", label: "Partner Brands" },
          ].map((s, i) => (
            <div key={i} className="flex flex-col items-center">
              <h3 className="text-5xl font-bold mb-2">{s.num}</h3>
              <p className="text-gray-200">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 🟣 Story Video Section */}
      <section className="py-24 max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold mb-10">Our Journey in Motion</h2>
        <div className="rounded-2xl overflow-hidden shadow-2xl">
          <iframe
            src="https://www.youtube.com/embed/dQw4w9WgXcQ"
            title="Our Story"
            className="w-full h-[420px]"
            allowFullScreen
          ></iframe>
        </div>
      </section>
    </div>
  );
}
