import React, { useState } from "react";
import "./RecipeCollection.css";
import Navbar from "../../components/Navbar/Navbar";
import RecipeCard from "../../components/RecipeCard/RecipeCard";
import useFetch from "../../Hooks/useFetch";
const RecipeCollection = () => {
  const [url, setURL] = useState("http://localhost:3000/recipes");
  const { data: recipes, isPending, error } = useFetch(url);
  console.log(recipes);
  console.log(isPending);
  return (
    <>
      <Navbar />
      <br />
      <button
        onClick={() => {
          setURL("http://localhost:3000/recipes");
        }}
      >
        All
      </button>
      <button
        onClick={() => {
          setURL("http://localhost:3000/recipes?category=option1");
        }}
      >
        Option 1
      </button>
      <button
        onClick={() => {
          setURL("http://localhost:3000/recipes?category=option2");
        }}
      >
        Option 2
      </button>
      <button
        onClick={() => {
          setURL("http://localhost:3000/recipes?category=option3");
        }}
      >
        Option 3
      </button>

      {isPending && <div>Loading...</div>}
      {error && <div>{error}</div>}

      {recipes &&
        recipes.map((recipe, index) => {
          return (
            <>
              <RecipeCard key={index} recipe={recipe} />
            </>
          );
        })}
    </>
  );
};

export default RecipeCollection;
