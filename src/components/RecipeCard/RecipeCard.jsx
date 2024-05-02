import React from "react";
import "./RecipeCard.css";
import { Link } from "react-router-dom";
import useFetch from "../../Hooks/useFetch";

const RecipeCard = ({ recipe }) => {
  console.log(recipe);
  return (
    <div>
      <h5>{recipe.id}</h5>
      <p>{recipe.name}</p>

      <img src={recipe.imageURL} alt={recipe.name} />
      <br />
      {recipe.category &&
        recipe.category.map((cat) => {
          return (
            <>
              <button
                onClick={() => {
                  // setURL("http://localhost:3000/recipes?category=option3");
                                    setURL("http://localhost:3000/recipes");

                }}
                className="tags"
              >
                {cat}
              </button>
            </>
          );
        })}
      <br />
      <Link to={`/recipes/${recipe.id}`}>
        <button>View Recipe</button>
      </Link>
    </div>
  );
};

export default RecipeCard;
