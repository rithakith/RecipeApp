import React, { useState } from "react";
import Navbar from "../../components/Navbar/Navbar";

const CreateRecipe = () => {
  const [title, setTitle] = useState("");
  const [steps, setSteps] = useState("");
  const [newIngredient, setNewIngredient] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("hey");
    console.log(title, steps, newIngredient);
  };

  return (
    <>
      <Navbar />
      <br />
      <form action="">
        <label>
          Recipe name:
          <input
            type="text"
            onChange={(e) => {
              setTitle(e.target.value);
            }}
            value={title}
          />
        </label>
        <br />
        <label>
          Category:
          <select>
            <option value="1">Option1</option>
            <option value="2">Option2</option>
            <option value="3">Option3</option>
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
                />
                <button onClick={() => {}}>Add</button>
              </label>
            </li>
          </ol>
        </div>
        <br />
        <label>
          Method: <br />
          <textarea
            name=""
            id=""
            cols="30"
            rows="10"
            onChange={(e) => {
              setSteps(e.target.value);
            }}
            value={steps}
          ></textarea>
        </label>
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
