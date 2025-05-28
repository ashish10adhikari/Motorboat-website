import React from "react";
import Navbar from "../Component/Navbar";
import Topbar from "../Component/Topbar";
import { Outlet } from "react-router-dom";
import Footer from "../Component/Footer";

const Layout = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;
