import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./RecipeCollection.css";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import RecipeCard from "../../components/RecipeCard/RecipeCard";
import useFetch from "../../Hooks/useFetch";
import Modal from "../../components/Modal/Modal";
const RecipeCollection = () => {
  const [url, setURL] = useState("http://localhost:3000/recipes");
  const { data: recipes, isPending, error } = useFetch(url);
  console.log(recipes);
  console.log(isPending);

  // Function to update URL and navigate
  const handleButtonClick = (newUrl) => {
    setURL(newUrl); // Update the URL state
    history.push(newUrl); // Push the new URL to history
  };

  return (
    <>
      <Navbar />

      <div id="recipe-collection-container">
        <div id="collectionpage-topic">
          Browse through our <span>Collection</span>
        </div>

        <div id="collectionpage-buttons">
          <button
            onClick={() => handleButtonClick("http://localhost:3000/recipes")}
          >
            All
          </button>
          <button
            onClick={() =>
              handleButtonClick(
                "http://localhost:3000/recipes?category" +
                  encodeURIComponent("Itallian")
              )
            }
          >
            Itallian
          </button>
          <button
            onClick={() =>
              handleButtonClick(
                "http://localhost:3000/recipes?category=" +
                  encodeURIComponent("Grilled")
              )
            }
          >
            Grilled
          </button>
          <button
            onClick={() =>
              handleButtonClick(
                "http://localhost:3000/recipes?category=" +
                  encodeURIComponent("Quick & Easy")
              )
            }
          >
            Quick & Easy
          </button>
          <span className="createRecipeBtn">
            <Link
              to={"/newrecipe"}
              style={{ textDecoration: "none", color: "white" }}
            >
              + Recipe
            </Link>
          </span>
        </div>

        {isPending && <div>Loading...</div>}
        {error && <div>{error}</div>}

        <div id="collection-container">
          {recipes &&
            recipes.map((recipe, index) => {
              return <RecipeCard key={index} recipe={recipe} />;
            })}
        </div>
      </div>
      {/* <Modal>
      <h2>jdfljfdslkjf</h2>
          <Link to={'/'}>hehe</Link>
          <button></button>
      </Modal> */}
      <Footer />
    </>
  );
};

export default RecipeCollection;
