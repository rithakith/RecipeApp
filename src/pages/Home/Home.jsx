import React from "react";
import "./Home.css";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import Carousel from "../../components/Carousel/Carousel";

const Home = () => {
  return (
    <>
      <Navbar />

      <div id="home">
        <div id="home-container">
          <Carousel />
          <div id="tag-buttons">
            <input type="button" value="Recipes and Menus" />
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Home;
