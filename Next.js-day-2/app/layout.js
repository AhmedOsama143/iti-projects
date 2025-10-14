import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Cukur Brand - Cozy Modern Café",
  description:
    "Premium organic and sustainable products for mindful living. Shop now!",
  icons: {
    icon: "/globe.svg", // favicon
    shortcut: "/globe.svg",
    apple: "/globe.svg",
  },
  openGraph: {
    title: "Cukur Brand - Cozy Modern Café",
    description:
      "Premium organic and sustainable products for mindful living. Shop now!",
    url: "https://www.greenleafmarket.com",
    siteName: "GreenLeaf Market",
    images: [
      {
        url: "/globe.svg",
        width: 800,
        height: 600,
        alt: "Cukur Brand",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Cukur Brand - Cozy Modern Café",
    description:
      "Premium organic and sustainable products for mindful living. Shop now!",
    images: ["/globe.svg"],
  },
};

export const revalidate = 60;

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/globe.svg" type="image/svg+xml" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased !bg-gray-100`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
