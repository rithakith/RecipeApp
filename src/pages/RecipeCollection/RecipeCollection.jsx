import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./RecipeCollection.css";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import RecipeCard from "../../components/RecipeCard/RecipeCard";
import { PlusCircle } from "@phosphor-icons/react";
import { ThreeDots } from "react-loader-spinner";
import { projectFirestore } from "../../firebase/config";

const RecipeCollection = () => {
  const [recipes, setRecipes] = useState([]);
  const [isPending, setIsPending] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setIsPending(true);
    projectFirestore
      .collection("recipes")
      .get()
      .then((snapshot) => {
        if (snapshot.empty) {
          setError("No recipes to load");
        } else {
          const results = snapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
          }));
          setRecipes(results);
        }
        setIsPending(false);
      })
      .catch((err) => {
        setError(err.message);
        setIsPending(false);
      });
  }, []);

  const handleButtonClick = (tag) => {
    setIsPending(true);
    let query = projectFirestore.collection("recipes");
    if (tag) {
      query = query.where("category", "array-contains", tag);
    }
    query
      .get()
      .then((snapshot) => {
        if (snapshot.empty) {
          setError("No recipes found with this tag");
          setRecipes([]);
        } else {
          setError(null);

          const results = snapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
          }));
          setRecipes(results);
        }
        setIsPending(false);
      })
      .catch((err) => {
        setError(err.message);
        setIsPending(false);
      });
  };

  return (
    <>
      <Navbar />
      <br />
      <br />
      <div id="recipe-collection-container">
        <div id="collectionpage-topic">
          Browse through our <span>Collection</span>
        </div>

        <div id="collectionpage-buttons">
          <div id="collectionpage-buttons-left">
            <button onClick={() => handleButtonClick()}>All</button>
            <button onClick={() => handleButtonClick("Italian")}>
              Italian
            </button>
            <button onClick={() => handleButtonClick("Grilled")}>
              Grilled
            </button>
            <button onClick={() => handleButtonClick("Quick & Easy")}>
              Quick & Easy
            </button>
          </div>
          <div className="createRecipeBtn">
            <Link
              className="hover-underline-animation"
              to={"/newrecipe"}
              style={{ textDecoration: "none", color: "white" }}
            >
              <PlusCircle size={22} weight="bold" /> Recipe
            </Link>
          </div>
        </div>

        {isPending && <div><ThreeDots></ThreeDots></div>}
        {error && <div>{error}</div>}
        <div id="collection-container">
          {recipes.map((recipe, index) => (
            <RecipeCard key={index} recipe={recipe} />
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default RecipeCollection;
