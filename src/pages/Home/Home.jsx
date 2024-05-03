import React from "react";
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
      <div>Home</div>
      <Footer />

      <div id="home-container">
        <div id="home-section1">Carousel</div>
      </div>
    </>
  );
};

export default Home;
