import React from "react";
import { Outlet, useLocation, useNavigation } from "react-router-dom";
import Navbar from "../pages/shared/Navbar";
import Footer from "../components/Footer/Footer";
import Banner from "../components/Header/Banner";

const MainLayout = () => {
  const location = useLocation();

  return (
    <div className="overflow-hidden">
      <header>
        <Navbar />
        {location.pathname === "/" && <Banner />}
      </header>

      <main className="max-w-7xl mx-4 xl:mx-auto ">
        <Outlet />
      </main>

      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default MainLayout;
