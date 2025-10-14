"use client";
import Link from "next/link";
import React, { useState } from "react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = await response.json();

      if (response.ok) {
        setSubmitStatus("success");
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        throw new Error(data.error || "Failed to send message");
      }
    } catch (error) {
      console.error("Error:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      {/* ===== HERO SECTION ===== */}
      <section className="bg-gradient-to-r from-blue-950 to-violet-800 text-white py-32 px-8 text-center">
        <h1 className="text-5xl font-extrabold mb-4">
          Get In <span className="text-violet-400">Touch</span>
        </h1>
        <p className="text-gray-300 max-w-2xl mx-auto mb-8 text-lg">
          Have a question about our coffee, beans, or roasting process? We’d
          love to hear from you!
        </p>
      </section>

      {/* ===== CONTACT METHODS ===== */}
      <section className="py-20 bg-[#faf7f3]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {/* Email */}
            <div className="bg-white p-8 rounded-2xl shadow text-center hover:shadow-lg transition">
              <div className="w-16 h-16 bg-violet-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8 text-violet-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-violet-950   mb-2">
                Email Us
              </h3>
              <p className="text-gray-600 mb-1">hello@cukurcoffee.com</p>
              <p className="text-gray-500 text-sm">We reply within 24 hours</p>
            </div>

            {/* Phone */}
            <div className="bg-white p-8 rounded-2xl shadow text-center hover:shadow-lg transition">
              <div className="w-16 h-16 bg-violet-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8 text-violet-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-violet-950  mb-2">
                Call Us
              </h3>
              <p className="text-gray-600 mb-1">+20 100 555 1234</p>
              <p className="text-gray-500 text-sm">Everyday, 8AM - 10PM</p>
            </div>

            {/* Location */}
            <div className="bg-white p-8 rounded-2xl shadow text-center hover:shadow-lg transition">
              <div className="w-16 h-16 bg-violet-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8 text-violet-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-violet-950  mb-2">
                Visit Us
              </h3>
              <p className="text-gray-600 mb-1">Cukur Coffee, Cairo, Egypt</p>
              <p className="text-gray-500 text-sm">Open daily</p>
            </div>
          </div>

          {/* Map */}
          <div className="h-96 rounded-2xl overflow-hidden shadow-lg mb-16">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3451.5271734699893!2d31.24306827570283!3d30.04342047492232!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x145840d9a74e841b%3A0x8f3dbca50d1e8e3a!2sCairo%2C%20Egypt!5e0!3m2!1sen!2seg!4v1690000000000"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="h-full"
            ></iframe>
          </div>
        </div>
      </section>

      {/* ===== CONTACT FORM ===== */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12 text-center text-gray-800">
            Let’s Brew a Conversation ☕
          </h2>

          {submitStatus === "success" && (
            <div className="mb-8 p-4 bg-green-100 text-green-800 rounded-lg text-center">
              Thanks for reaching out! We’ll get back to you soon.
            </div>
          )}

          {submitStatus === "error" && (
            <div className="mb-8 p-4 bg-red-100 text-red-800 rounded-lg text-center">
              Something went wrong. Please try again.
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-gray-700 font-medium mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="John Doe"
                  className="w-full px-4 py-3 rounded-lg border placeholder-gray-400 border-gray-300 focus:ring-2 focus:ring-violet-500"
                />
              </div>
              <div>
                <label className="block text-gray-700 font-medium mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="your@email.com"
                  className="w-full px-4 py-3 rounded-lg border placeholder-gray-400 border-gray-300 focus:ring-2 focus:ring-violet-500"
                />
              </div>
            </div>

            <div>
              <label className="block text-gray-700 font-medium mb-2">
                Subject
              </label>
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                placeholder="Coffee inquiry or feedback"
                className="w-full px-4 py-3 rounded-lg border  border-gray-300 placeholder-gray-400 focus:ring-2 focus:ring-violet-500"
              />
            </div>

            <div>
              <label className="block text-gray-700 font-medium mb-2">
                Your Message
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="5"
                placeholder="Tell us how we can make your next cup even better..."
                className="w-full px-4 py-3 rounded-lg border border-gray-300 placeholder-gray-400 focus:ring-2 focus:ring-violet-500"
              ></textarea>
            </div>

            <div className="text-center">
              <button
                type="submit"
                disabled={isSubmitting}
                className={`bg-violet-600 hover:bg-violet-700 text-white px-8 py-3 rounded-full text-lg font-medium transition-all ${
                  isSubmitting ? "opacity-70 cursor-not-allowed" : ""
                }`}
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </button>
            </div>
          </form>
        </div>
      </section>

      {/* ===== FINAL CTA ===== */}
      <section className="bg-gradient-to-r from-gray-900 to-gray-800 text-white py-20 text-center">
        <h2 className="text-3xl font-bold mb-4">Still Have Questions?</h2>
        <p className="text-lg mb-8 max-w-2xl mx-auto text-gray-300">
          Whether it’s about our roasting process or your favorite blend, our
          baristas are happy to help.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link
            href="/menu"
            className="bg-violet-600 hover:bg-violet-700 text-white px-8 py-3 rounded-full font-medium transition-all"
          >
            View Our Menu
          </Link>
          <Link
            href="#"
            onClick={() =>
              document
                .querySelector("form")
                .scrollIntoView({ behavior: "smooth" })
            }
            className="border-2 border-white text-white px-8 py-3 rounded-full font-medium hover:bg-white hover:text-gray-900 transition-all"
          >
            Message Us
          </Link>
        </div>
      </section>
    </>
  );
}
