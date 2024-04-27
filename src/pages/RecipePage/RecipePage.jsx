import React from "react";
import { useParams } from "react-router-dom";
import useFetch from "../../Hooks/useFetch";
import "./RecipePage.css";
import Navbar from "../../components/Navbar/Navbar";

const RecipePage = () => {
  const { id } = useParams();
  const url = `http://localhost:3000/recipes/${id}`;
  const { data: recipe, isPending, error } = useFetch(url);

  return (
    <>
      <Navbar />
      <div>
        {isPending && <div>Loading...</div>}
        {error && <div>{error}</div>}
        <h3>{recipe.name}</h3>
        <img src={recipe.imageURL} alt={recipe.title} />
        <h4>
          <u>Ingredients</u>
        </h4>
        <ul>
          {recipe.ingredients &&
            recipe.ingredients.map((ingredient, index) => {
              return (
                <>
                  <li key={index}>
                    {ingredient.quantity}
                    {ingredient.name}
                  </li>
                </>
              );
            })}
        </ul>
        <h4>
          <u>Directions</u>
        </h4>
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
    </>
  );
};

export default RecipePage;
