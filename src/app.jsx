import React from "react";
import Header from "./Layout/Header";
import { Outlet } from "react-router-dom";
import Footer from "./Layout/Footer";

export default function App() {
  return (
    <div>
      <Header />
      <div className="outlet">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}
