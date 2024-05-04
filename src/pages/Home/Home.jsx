import React from "react";

import './Home.css'

import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import { Carousel } from "bootstrap";
import sliderimg1 from "../../assets/Carousel/Slider_img1.jpg";
import sliderimg2 from "../../assets/Carousel/Slider_img2.jpg";
import sliderimg3 from "../../assets/Carousel/Slider_img3.jpg";

const Home = () => {
  return (
    <>
      <Navbar />

      <div id="home">
        <div id="home-container">
          <div id="home-section1">Carousel</div>
          <div id="tag-buttons">
            <input type="button" value="Recipes and Menus"  />
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Home;
