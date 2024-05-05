import React, { useState, useRef, useEffect } from "react";
import Navbar from "../../components/Navbar/Navbar";
import useFetch from "../../Hooks/useFetch";
import Modal from "../../components/Modal/Modal";
import "./CreateRecipe.css";
import { Link, useNavigate } from "react-router-dom";
import Footer from "../../components/Footer/Footer";

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
  const [showModal, setShowModal] = useState(false); // State for showing/hiding modal
  const navigate = useNavigate();

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
    setImage("");
    setTitle("");
    setCategory("option1");
    setIngredients([]);
    setSteps([]);
    setOwner("");
    setShowModal(true); // Show modal after submitting
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

  return (
    <>
      <Navbar />

      <form className="form-container" onSubmit={handleSubmit}>
        <h2 id="form-topic">
          <span>Create</span> your own recipe
        </h2>

        <label className="recipe-name">
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

        <label className="owner-name">
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

        <label className="category">
          Category:
          <select
            onChange={(e) => {
              setCategory(e.target.value);
            }}
            value={category}
          >
            <option value="option1">Grilled</option>
            <option value="option2">Italian</option>
            <option value="option3">Quick & easy</option>
          </select>
        </label>
        <label className="portions">
          Portions:
          <input
            type="number"
            required
          />
        </label>
        <label className="time">
          Time:
          <input
            type="number"
            required
          />
        </label>
        <div className="ingredients">
          <label>
            Ingredients:{" "}
            <div>
              <input
                type="text"
                onChange={(e) => {
                  setNewIngredient(e.target.value);
                }}
                value={newIngredient}
                ref={ingredientInput}
              />
              <button onClick={handleIngAdd}>Add</button>
            </div>
          </label>
          <p>Current Ingredients :</p>
          {ingredients.map((ing) => {
            return <li key={ing}>{ing}</li>;
          })}
        </div>

        <label className="image-url">
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

        <div className="steps">
          Steps:
          <label>
            {" "}
            <input
              type="text"
              onChange={(e) => {
                setNewStep(e.target.value);
              }}
              value={newStep}
              ref={stepInput}
            />
            <button onClick={handleStepAdd}>Add</button>
          </label>
          <p>Current Steps :</p>
          {steps.map((step) => {
            return <li key={step}>{step}</li>;
          })}
        </div>

        <button
          className="create-recipe-btn"
          type="submit"
          onClick={() => {
            handleSubmit();
          }}
        >
          Create New
        </button>
      </form>

      {showModal && (
        <Modal className="custom-modal">
          <h2>Recipe Created Successfully!</h2>
          <Link to={"/"} className="modal-link">
            Go Back
          </Link>
          <button className="modal-button" onClick={() => setShowModal(false)}>
            Close
          </button>
        </Modal>
      )}

      <Footer />
    </>
  );
};

export default CreateRecipe;
