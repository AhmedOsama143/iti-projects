"use client";
import Link from "next/link";
import React from "react";

export default function AboutPage() {
  return (
    <>
      {/* ====== HERO SECTION ====== */}
      <section className="bg-gradient-to-r from-gray-900 to-gray-800 text-white py-24 px-8 text-center">
        <h1 className="text-5xl font-extrabold mb-4">
          The <span className="text-violet-400">Cukur</span> Coffee Story
        </h1>
        <p className="text-gray-300 max-w-3xl mx-auto mb-8 text-lg">
          Cukur Coffee was founded with one goal — to bring people together
          through the perfect cup of coffee, crafted with passion and precision
          from bean to brew.
        </p>
        <Link
          href="/products"
          className="bg-violet-500 hover:bg-violet-600 text-white px-8 py-3 rounded-full text-lg transition-all"
        >
          Explore Our Blends
        </Link>
      </section>

      {/* ====== OUR STORY ====== */}
      <section className="py-20 bg-gray-100">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
              <img
                src="https://images.unsplash.com/photo-1511920170033-f8396924c348?auto=format&fit=crop&w=1470&q=80"
                alt="Cukur Coffee founders"
                className="rounded-2xl shadow-xl w-full h-auto"
              />
            </div>
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold mb-6 text-gray-800">
                Our Journey
              </h2>
              <p className="text-gray-600 mb-4">
                Born in 2020 out of a love for bold flavors and authentic
                experiences, Cukur Coffee began as a small roastery determined
                to redefine the way people enjoy coffee. From humble beginnings
                in a cozy café corner, our brand has grown into a community of
                coffee lovers who share our passion for craft and quality.
              </p>
              <p className="text-gray-600 mb-4">
                At Cukur, we believe coffee is more than a drink — it’s a story
                told in every sip. That’s why we carefully select ethically
                sourced beans and roast them to perfection, celebrating the
                culture, aroma, and warmth of every cup.
              </p>
              <div className="flex items-center gap-4 mt-6">
                <div className="text-violet-500 text-4xl font-bold">2020</div>
                <div>
                  <p className="font-semibold">Where It All Began</p>
                  <p className="text-sm text-gray-500">Our first roast</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ====== OUR MISSION ====== */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-12 text-gray-800">
            What Drives Us
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-8 rounded-2xl">
              <div className="w-16 h-16 bg-violet-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg
                  className="w-8 h-8 text-violet-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-violet-500 mb-3">
                Craft with Care
              </h3>
              <p className="text-gray-600">
                Every batch we roast is handled with precision, ensuring rich
                flavors and consistent quality that coffee enthusiasts can truly
                savor.
              </p>
            </div>
            <div className="bg-gray-50 p-8 rounded-2xl">
              <div className="w-16 h-16 bg-violet-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg
                  className="w-8 h-8 text-violet-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-violet-500 mb-3">
                Share the Culture
              </h3>
              <p className="text-gray-600">
                We aim to connect people worldwide through the culture of coffee
                — inspiring moments of creativity, comfort, and connection.
              </p>
            </div>
            <div className="bg-gray-50 p-8 rounded-2xl">
              <div className="w-16 h-16 bg-violet-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg
                  className="w-8 h-8 text-violet-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-violet-500 mb-3">
                Grow Together
              </h3>
              <p className="text-gray-600">
                Cukur Coffee is more than a brand — it’s a community. We grow by
                supporting local farmers, artists, and coffee lovers alike.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ====== IMPACT STATS ====== */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-12">Our Growth So Far</h2>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="p-6">
              <div className="text-4xl font-bold text-violet-400 mb-2">
                85K+
              </div>
              <p className="text-gray-300">Cups served</p>
            </div>
            <div className="p-6">
              <div className="text-4xl font-bold text-violet-400 mb-2">
                40K+
              </div>
              <p className="text-gray-300">Loyal customers</p>
            </div>
            <div className="p-6">
              <div className="text-4xl font-bold text-violet-400 mb-2">25+</div>
              <p className="text-gray-300">Coffee origins</p>
            </div>
            <div className="p-6">
              <div className="text-4xl font-bold text-violet-400 mb-2">10+</div>
              <p className="text-gray-300">Award-winning blends</p>
            </div>
          </div>
        </div>
      </section>

      {/* ====== TEAM SECTION ====== */}
      <section className="py-20 bg-gray-100">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12 text-center text-gray-800">
            Meet Our Team
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                name: "Ahmet Kaya",
                role: "Founder & Head Roaster",
                img: "https://randomuser.me/api/portraits/men/21.jpg",
              },
              {
                name: "Elif Demir",
                role: "Creative Director",
                img: "https://randomuser.me/api/portraits/women/49.jpg",
              },
              {
                name: "Mert Can",
                role: "Coffee Specialist",
                img: "https://randomuser.me/api/portraits/men/61.jpg",
              },
              {
                name: "Selin Aras",
                role: "Brand Manager",
                img: "https://randomuser.me/api/portraits/women/72.jpg",
              },
            ].map((member, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-2xl text-center shadow"
              >
                <img
                  src={member.img}
                  alt={member.name}
                  className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
                />
                <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                <p className="text-gray-600">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ====== CALL TO ACTION ====== */}
      <section className="bg-violet-500 text-white py-20 text-center px-6">
        <h2 className="text-3xl font-bold mb-4">Experience Cukur Coffee</h2>
        <p className="text-lg mb-8 max-w-2xl mx-auto">
          Each cup you enjoy supports our mission to craft exceptional coffee
          while empowering the people and communities behind it. Join us — taste
          the story, feel the passion.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link
            href="/products"
            className="bg-white text-violet-500 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-all"
          >
            Shop Our Coffee
          </Link>
          <Link
            href="/contact"
            className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-violet-500 transition-all"
          >
            Collaborate With Us
          </Link>
        </div>
      </section>
    </>
  );
}
