"use client";
import Link from "next/link";
import React, { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-4 left-1/2 transform -translate-x-1/2 w-[90%] max-w-7xl bg-gray-800/70 backdrop-blur-md border border-gray-700 text-gray-200 rounded-full px-6 py-3 flex items-center justify-between shadow-lg z-50">
      {/* Logo */}
      <Link
        href="/"
        className="text-violet-500 font-bold text-2xl hover:scale-105 transition-transform"
      >
        Cukur<span className="text-violet-400">Brand</span>
      </Link>

      {/* Desktop Links */}
      <div className="hidden md:flex gap-8 text-lg">
        <Link href="/" className="hover:text-violet-400 transition-colors">
          Home
        </Link>
        <Link
          href="/products"
          className="hover:text-violet-400 transition-colors"
        >
          Products
        </Link>
        <Link
          href="/about"
          className="hover:text-natural-400 transition-colors"
        >
          About Us
        </Link>
        <Link
          href="/contact"
          className="hover:text-natural-400 transition-colors"
        >
          Contact
        </Link>
      </div>

      {/* Mobile Menu Button */}
      <button
        className="md:hidden text-3xl text-violet-400"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <FiX /> : <FiMenu />}
      </button>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="absolute top-16 right-4 bg-gray-800 border border-gray-700 rounded-2xl shadow-lg flex flex-col items-start w-48 p-4 space-y-3 animate-slideDown md:hidden">
          <Link
            href="/"
            className="w-full hover:text-violet-400 transition"
            onClick={() => setIsOpen(false)}
          >
            Home
          </Link>
          <Link
            href="/products"
            className="w-full hover:text-violet-400 transition"
            onClick={() => setIsOpen(false)}
          >
            Products
          </Link>
          <Link
            href="/about"
            className="w-full hover:text-violet-400 transition"
            onClick={() => setIsOpen(false)}
          >
            About Us
          </Link>
          <Link
            href="/contact"
            className="w-full hover:text-violet-400 transition"
            onClick={() => setIsOpen(false)}
          >
            Contact
          </Link>
        </div>
      )}

      {/* Animation for dropdown */}
      <style jsx>{`
        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-slideDown {
          animation: slideDown 0.25s ease-out forwards;
        }
      `}</style>
    </nav>
  );
}
