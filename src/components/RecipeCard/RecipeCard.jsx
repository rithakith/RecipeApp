import React from "react";
import "./RecipeCard.css";
import { Link } from "react-router-dom";
import useFetch from "../../Hooks/useFetch";
import { Star, ArrowCircleRight, Heart } from "@phosphor-icons/react";

const RecipeCard = ({ recipe }) => {
  console.log(recipe);
  return (
    <div id="recipeCard">
      {/* <h5>{recipe.id}</h5> */}

      <div id="card-img">
        <img src={recipe.imageURL} alt={recipe.name} />
      </div>

      <div id="card-container">
        <p id="recipe-owner">{recipe.owner}</p>

        <div id="card-container-top">
          <p id="recipe-name">{recipe.name}</p>
          <section>
            <Star size={20} color="#ffd700" weight="fill" />
            <p>4.5</p>
          </section>
        </div>

        {/* <div>
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
        </div> */}

        <div id="card-container-bottom">
          <div id="recipe-time">{recipe.time}</div>

          <div id="card-button-section">
            <Heart size={32} color="#509e2f" />
            <Link to={`/recipes/${recipe.id}`}>
              <ArrowCircleRight size={32} color="#509e2f" weight="fill" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecipeCard;
