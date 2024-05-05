import React from "react";
import "./Home.css";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import Carousel from "../../components/Carousel/Carousel";
import { CaretRight } from "@phosphor-icons/react";
import Modal from "../../components/Modal/Modal";

const Home = () => {
  return (
    <>
      <Navbar />

      <div id="home">
        <div id="home-container">
          <Carousel />

          <div id="tag-buttons">
            <div id="tag-button-1">
              <a href="/recipes">
                <p>Recipes & Menus</p>
              </a>
              <CaretRight size={28} />
            </div>

            <div id="tag-button-2">
              <a href="/newrecipe">
                <p>Create Recipe</p>
              </a>
              <CaretRight size={28} />
            </div>

            <div id="tag-button-3">
              <a href="/">
                <p>Custom Meal Plan</p>
              </a>
              <CaretRight size={28} />
            </div>

            <div id="tag-button-4">
              <a href="/">
                <p>Create Grocery List</p>
              </a>
              <CaretRight size={28} />
            </div>

            <div id="tag-button-5">
              <a href="/">
                <p>Cooking Tips</p>
              </a>
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
