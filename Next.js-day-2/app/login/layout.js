import { Geist, Geist_Mono } from "next/font/google";
import "../globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Login - Cukur Brand",
  description: "Login to your GreenLeaf Market account",
};

export default function LoginLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/greenleaf-logo.svg" type="image/svg+xml" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased !bg-gray-100`}
      >
        {children}
      </body>
    </html>
  );
}
