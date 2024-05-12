import React from "react";
import Dolor from "../components/Dolor";
import Products from "./Products";
import "../styles/Home.css";
import Footer from "../components/Footer";
import Header from "./Header";
const Home = () => {
  return (
    <div className="home-container">
      <Dolor />
      <Header />
      <Products />
      <Footer />
    </div>
  );
};

export default Home;
