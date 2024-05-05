import React from "react";
import { useParams } from "react-router-dom";
import useFetch from "../../Hooks/useFetch";
import "./RecipePage.css";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import { Timer } from "@phosphor-icons/react";

const RecipePage = () => {
  const { id } = useParams();
  const url = `http://localhost:3000/recipes/${id}`;
  const { data: recipe, isPending, error } = useFetch(url);

  return (
    <>
      <Navbar />
      <div className="recipe-container">
        {isPending && <div>Loading...</div>}
        {error && <div>{error}</div>}
        <div className="title-section">
          <h3>{recipe.name}</h3>
          <div className="recipe-details">
            <h5>By: {recipe.owner}</h5>
            <Timer size={25} /> <h6>{recipe.time} minutes</h6>
          </div>
          <img src={recipe.imageURL} alt={recipe.title} />
        </div>
        <div className="ingredients">
          <h4>Ingredients</h4>
          <ul>
            {recipe.ingredients &&
              recipe.ingredients.map((ingredient, index) => {
                return (
                  <>
                    <li key={index}>{ingredient}</li>
                  </>
                );
              })}
          </ul>
        </div>
        <div className="directions">
          <h4>Directions</h4>
          <ol>
            {recipe.steps &&
              recipe.steps.map((step) => {
                return (
                  <>
                    <li>{step}</li>
                  </>
                );
              })}
          </ol>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default RecipePage;
