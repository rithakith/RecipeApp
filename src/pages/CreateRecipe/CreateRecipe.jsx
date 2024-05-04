import React, { useState, useRef, useEffect } from "react";
import Navbar from "../../components/Navbar/Navbar";
import useFetch from "../../Hooks/useFetch";
import {useNavigate} from 'react-router-dom'

import "./CreateRecipe.css";

const CreateRecipe = () => {
  const [title, setTitle] = useState("");
  const [newStep, setNewStep] = useState("");
  const [steps, setSteps] = useState([]);
  const [newIngredient, setNewIngredient] = useState("");
  const [ingredients, setIngredients] = useState([]);
  const ingredientInput = useRef(null);
  const stepInput = useRef(null);
  const [category, setCategory] = useState("option1");
  const [owner, setOwner] = useState("");
  const [image, setImage] = useState("");
  const history = useNavigate()

  const { postData, data, error } = useFetch(
    "http://localhost:3000/recipes",
    "POST"
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(
      title,
      steps,
      newIngredient,
      ingredients,
      category,
      owner,
      image
    );
    postData({
      name: title,
      owner,
      category: [category],
      ingredients,
      steps,
      imageURL: image,
    });
  };

  const handleIngAdd = (e) => {
    e.preventDefault();
    const ing = newIngredient.trim();

    if (ing && !ingredients.includes(ing)) {
      setIngredients((prevIngredients) => [...prevIngredients, ing]);
    }

    setNewIngredient("");
    ingredientInput.current.focus();
  };
  const handleStepAdd = (e) => {
    e.preventDefault();
    const step = newStep.trim();

    if (step && !steps.includes(step)) {
      setSteps((prevSteps) => [...prevSteps, step]);
    }

    setNewStep("");
    stepInput.current.focus();
  };

  // redirect
  useEffect(() => {
    if(data){

    }
  }, [data]);

  return (
    <>
      <Navbar />
      <br />
      <form onSubmit={handleSubmit}>
        <label>
          Recipe name:
          <input
            type="text"
            onChange={(e) => {
              setTitle(e.target.value);
            }}
            value={title}
            required
          />
        </label>
        <br />
        <label>
          Name of owner:
          <input
            type="text"
            onChange={(e) => {
              setOwner(e.target.value);
            }}
            value={owner}
            required
          />
        </label>
        <br />
        <label>
          Category:
          <select
            onChange={(e) => {
              setCategory(e.target.value);
            }}
            value={category}
          >
            <option value="option1">Option1</option>
            <option value="option2">Option2</option>
            <option value="option3">Option3</option>
          </select>
        </label>
        <div>
          Ingredients
          <ol>
            <li>
              <label>
                {" "}
                <input
                  type="text"
                  onChange={(e) => {
                    setNewIngredient(e.target.value);
                  }}
                  value={newIngredient}
                  ref={ingredientInput}
                />
                <button onClick={handleIngAdd}>Add</button>
              </label>
            </li>
          </ol>
          <p>Current Ingredients :</p>
          {ingredients.map((ing) => {
            return <li key={ing}>{ing}</li>;
          })}
        </div>
        <br />
        <label>
          Image URL:
          <input
            type="text"
            onChange={(e) => {
              setImage(e.target.value);
            }}
            required
            value={image}
          />
        </label>
        {/* <label>
          Directions: <br />
          <textarea
            name=""
            id=""
            cols="30"
            rows="10"
            onChange={(e) => {
              setSteps(e.target.value);
            }}
            value={steps}
            required
          ></textarea>
        </label> */}
        <div>
          Steps:
          <ol>
            <li>
              <label>
                {" "}
                <input
                  type="text"
                  onChange={(e) => {
                    setNewStep(e.target.value);
                  }}
                  value={newStep}
                  ref={stepInput}
                  required
                />
                <button onClick={handleStepAdd}>Add</button>
              </label>
            </li>
          </ol>
          <p>Current Steps :</p>
          {steps.map((step) => {
            return <li key={step}>{step}</li>;
          })}
        </div>
        <br />
        <br />
        <button
          onClick={() => {
            handleSubmit;
          }}
        >
          Create New
        </button>
      </form>
    </>
  );
};

export default CreateRecipe;
