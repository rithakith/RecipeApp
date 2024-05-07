import React, { useState } from "react";
import "./Home.css";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import Carousel from "../../components/Carousel/Carousel";
import { CaretRight } from "@phosphor-icons/react";
import Modal from "../../components/Modal/Modal";
import useFetch from "../../Hooks/useFetch";
import RecipeCard from "../../components/RecipeCard/RecipeCard";
const Home = () => {
  // Today's special
  const [urlFavourites, setURLFavourites] = useState(
    "http://localhost:3000/favourites"
  );

  const {
    data: favourites,
    isPending: isFavouritesPending,
    error: favouritesError,
  } = useFetch(urlFavourites);
  console.log(favourites);
  console.log(isFavouritesPending);

  // recommended recipes
  const [urlRecommended, setURLRecommended] = useState(
    "http://localhost:3000/recommended"
  );

  const {
    data: recommended,
    isPending: isRecommendedPending,
    error: recommendedError,
  } = useFetch(urlRecommended);
  console.log(recommended);
  console.log(isRecommendedPending);

  return (
    <>
      <Navbar />

      <div id="home">
        <div id="home-container">
          <Carousel />

          <div id="tag-buttons">
            <div id="tag-button-1">
              <a href="/recipes">
                <p className="hover-underline-animation">Recipes & Menus</p>
              </a>
              <CaretRight size={28} />
            </div>

            <div id="tag-button-2">
              <a href="/newrecipe">
                <p className="hover-underline-animation">Create Recipe</p>
              </a>
              <CaretRight size={28} />
            </div>

            <div id="tag-button-3">
              <a href="/Premium">
                <p className="hover-underline-animation">Custom Meal Plan</p>
              </a>
              <CaretRight size={28} />
            </div>

            <div id="tag-button-4">
              <a href="/premium">
                <p className="hover-underline-animation">Create Grocery List</p>
              </a>
              <CaretRight size={28} />
            </div>

            <div id="tag-button-5">
              <a href="/premium">
                <p className="hover-underline-animation">Cooking Tips</p>
              </a>
              <CaretRight size={28} />
            </div>
          </div>

          <div id="home-container-top">
            <p className="section-topic">Today's Special</p>

            {isFavouritesPending && <div>Loading...</div>}
            {favouritesError && <div>{error}</div>}
            <div id="collection-container">
              {favourites &&
                favourites.map((recipe, index) => {
                  return (
                    <>
                      <RecipeCard key={index} recipe={recipe} />
                    </>
                  );
                })}
            </div>
          </div>

          <div id="home-container-middle">
            <p className="section-topic">Recommended Recipes</p>

            {isRecommendedPending && <div>Loading...</div>}
            {recommendedError && <div>{error}</div>}
            <div id="collection-container">
              {recommended &&
                recommended.map((recipe, index) => {
                  return <RecipeCard key={index} recipe={recipe} />;
                })}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Home;
