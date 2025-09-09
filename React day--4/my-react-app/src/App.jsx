// src/App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Layout from "./components/Layout/Layout";
import Home from "./components/Hero/Hero";
import About from "./components/About/About";
import Portfolio from "./components/Portfolio/Portfolio";
import ProductDetails from "./components/ProductDetails/ProductDetails";
import Contact from "./components/Contact/Contact";
import ErrorPage from "./components/ErrorPage/ErrorPage";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="home" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="portfolio" element={<Portfolio />} />
        <Route path="/product/:id" element={<ProductDetails />} />
        <Route path="contact" element={<Contact />} />
        <Route path="*" element={<ErrorPage />} />
      </Route>
    </Routes>
  );
}
