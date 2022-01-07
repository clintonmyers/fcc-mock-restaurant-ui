import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header/Header";
import Footer from "../components/Footer/Footer";

const Restaurants = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

export default Restaurants;
