"use client";
import Link from "next/link";
import React from "react";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-gray-900 to-gray-800 py-10 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <Link href="/" className="text-violet-500  font-bold text-2xl">
            Cukur<span className="text-violet-400">Brand</span>
          </Link>
          <p className="mt-3 text-sm text-gray-400 leading-relaxed">
            <strong>Cukur Brand</strong> is a cozy and modern café that brings
            together the rich aroma of freshly roasted beans with a welcoming
            atmosphere.
          </p>
        </div>

        <div className="flex flex-col space-y-2 md:items-center">
          <h4 className="text-lg font-semibold text-white mb-2">Quick Links</h4>
          <Link href="/" className="hover:text-violet-400 transition">
            Home
          </Link>
          <Link href="/products" className="hover:text-violet-400 transition">
            Products
          </Link>
          <Link href="/about" className="hover:text-violet-400 transition">
            About Us
          </Link>
          <Link href="/contact" className="hover:text-violet-400 transition">
            Contact
          </Link>
        </div>

        <div className="md:text-right text-sm flex flex-col justify-between">
          <div className="flex justify-center md:justify-end gap-4 mt-3">
            <Link href="#" className="hover:text-violet-400">
              Facebook
            </Link>
            <Link href="#" className="hover:text-violet-400">
              Twitter
            </Link>
            <Link href="#" className="hover:text-violet-400">
              Instagram
            </Link>
          </div>
          <p>© {new Date().getFullYear()} Cukur Brand. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
