import React from "react";
import "./RecipeCard.css";
import { Link } from "react-router-dom";
import useFetch from "../../Hooks/useFetch";
import { Star } from "@phosphor-icons/react";

const RecipeCard = ({ recipe }) => {
  console.log(recipe);
  return (
    <div id="recipeCard">
      {/* <h5>{recipe.id}</h5> */}

      <div id="card-img">
        <img src={recipe.imageURL} alt={recipe.name} />
      </div>

      <div id="card-container">
        <p>{recipe.owner}</p>

        <div>
          <p id="recipe-name">{recipe.name}</p>
          <section>
            <Star size={32} color="#ffd700" weight="fill" />
            <p>4.5</p>
          </section>
        </div>

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
    </div>
  );
};

export default RecipeCard;
