import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../pages/shared/Navbar";
import Footer from "../components/Footer/Footer";
import Banner from "../components/Header/Banner";

const MainLayout = () => {
  const location = useLocation();

  return (
    <>
      <header>
        <Navbar />
        {location.pathname === "/" && <Banner />}
      </header>

      <main className="max-w-6xl mx-4 xl:mx-auto ">
        <Outlet />
      </main>

      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default MainLayout;
