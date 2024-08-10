import React from "react";
import { Inter } from "next/font/google";

import Header from "../components/home/Header/Header";
import Sidebar from "../components/home/SideBar";
import LayoutClient from "../components/layouts/LayoutClient";

import "./globals.css";
const inter = Inter({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head></head>
      <body
        className={inter.className}
        style={{ fontFamily: inter.style.fontFamily }}
      >
        <LayoutClient>
          <div className="mb-4">
            <Header />
          </div>
          {children}
        </LayoutClient>
      </body>
    </html>
  );
}
