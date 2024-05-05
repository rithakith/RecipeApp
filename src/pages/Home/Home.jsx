import React from "react";
import "./Home.css";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import Carousel from "../../components/Carousel/Carousel";
import { CaretRight } from "@phosphor-icons/react";

const Home = () => {
  return (
    <>
      <Navbar />

      <div id="home">
        <div id="home-container">
          <Carousel />

          <div id="tag-buttons">
            <div id="tag-button-1">
              <p>Recipes & Menus</p>
              <CaretRight size={28} />
            </div>

            <div id="tag-button-2">
              <p>Create Recipe</p>
              <CaretRight size={28} />
            </div>

            <div id="tag-button-3">
              <p>Custom Meal Plan</p>
              <CaretRight size={28} />
            </div>

            <div id="tag-button-4">
              <p>Create Grocery List</p>
              <CaretRight size={28} />
            </div>

            <div id="tag-button-5">
              <p>Cooking Tips</p>
              <CaretRight size={28} />
            </div>
          </div>

          <div id="home-container-top">
            <p className="section-topic">Today's Special</p>
          </div>

          <div id="home-container-middle">
            <p className="section-topic">Recommended Recipes</p>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Home;
