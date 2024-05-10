import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./RecipePage.css";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import { Timer, CookingPot, CalendarBlank } from "@phosphor-icons/react";
import { projectFirestore } from "../../firebase/config";
import { ThreeDots } from "react-loader-spinner";

const RecipePage = () => {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchRecipe = async () => {
      try {
        setIsPending(true);
        let recipeData = null;

        // Try fetching from the "recipes" collection
        const recipeRef = projectFirestore.collection("recipes").doc(id);
        const recipeDoc = await recipeRef.get();
        if (recipeDoc.exists) {
          recipeData = { id: recipeDoc.id, ...recipeDoc.data() };
        } else {
          // Try fetching from the "recommended" collection
          const recommendedRef = projectFirestore.collection("recommended").doc(id);
          const recommendedDoc = await recommendedRef.get();
          if (recommendedDoc.exists) {
            recipeData = { id: recommendedDoc.id, ...recommendedDoc.data() };
          } else {
            // Try fetching from the "favorites" collection
            const favoritesRef = projectFirestore.collection("favourites").doc(id);
            const favoritesDoc = await favoritesRef.get();
            if (favoritesDoc.exists) {
              recipeData = { id: favoritesDoc.id, ...favoritesDoc.data() };
            } else {
              setError("Recipe not found");
            }
          }
        }

        if (recipeData) {
          setRecipe(recipeData);
        }
        setIsPending(false);
      } catch (error) {
        setError("Error fetching recipe: " + error.message);
        setIsPending(false);
      }
    };

    fetchRecipe();
  }, [id]);

  return (
    <>
      <Navbar />

      <div className="recipe-container">
        {isPending &&  <div className="threeDots"><ThreeDots   visible={true}
    height="360"
    width="360"
    color="#4fa94d"
    radius="20"
    ariaLabel="three-dots-loading"
    wrapperStyle={{}}
    wrapperClass=""/></div>}
        {error && <div>{error}</div>}
        {recipe && (
          <>
            <div className="title-section">
              <h3>{recipe.name}</h3>

              <div className="sub-titles">
                <p>By: {recipe.owner}</p>

                <div>
                  <Timer size={25} color="#509e2f" />{" "}
                  <p>{recipe.time} minutes</p>
                </div>

                <div>
                  <CookingPot size={25} color="#509e2f" />{" "}
                  <p>{recipe.portions} serves</p>
                </div>

                <div>
                  <CalendarBlank size={25} color="#509e2f" />{" "}
                  <p>{recipe.last_update}</p>
                </div>
              </div>

              <img src={recipe.imageURL} alt={recipe.title} />
            </div>

            <div className="recipe-details">
              <div className="ingredients">
                <h4>Ingredients</h4>

                <ul>
                  {recipe.ingredients &&
                    recipe.ingredients.map((ingredient, index) => (
                      <li key={index}>{ingredient}</li>
                    ))}
                </ul>
              </div>

              <div className="directions">
                <h4>Directions</h4>

                <ol>
                  {recipe.steps &&
                    recipe.steps.map((step, index) => (
                      <li key={index}>{step}</li>
                    ))}
                </ol>
              </div>
            </div>
          </>
        )}
      </div>

      <div id="recipe-page-bottom">
        <p>You might also like</p>
      </div>

      <Footer />
    </>
  );
};

export default RecipePage;
