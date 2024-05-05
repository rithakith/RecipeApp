import React from "react";
import { useParams } from "react-router-dom";
import useFetch from "../../Hooks/useFetch";
import "./RecipePage.css";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import { Timer, CookingPot, CalendarBlank } from "@phosphor-icons/react";

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
          <div className="sub-titles">
            <h6>By: {recipe.owner}</h6>
            <div>
              <Timer size={25} /> <h6>{recipe.time} minutes</h6>
            </div>
            <div>
              <CookingPot size={25} /> <h6>{recipe.portions} serves</h6>
            </div>
            <div>
              <CalendarBlank size={25} /> <h6>{recipe.last_update}</h6>
            </div>
          </div>
          <img src={recipe.imageURL} alt={recipe.title} />
        </div>

        <div className="recipe-details">
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
      </div>

      <Footer />
    </>
  );
};

export default RecipePage;
