import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import logo from "../../assets/Gemini_Generated_Image_jsac2kjsac2kjsac.jpeg";

const Navbar = () => {
  return (
    <>
      <nav className="navContainer">
        <ul id="navUL">
          <div className="logo">
            <Link to={"/"}>
              <img src={logo} alt="logo" />
            </Link>
            <p></p>
          </div>

          <div className="remainingNav">
            <li>
              <Link to={"/recipes"} style={{ textDecoration: "none" }}>
                Recipes
              </Link>
            </li>
            <li>
              <Link to={"/newrecipe"} style={{ textDecoration: "none" }}>
                Create Recipe
              </Link>
            </li>
            <li>Signup</li>
            <li
              style={{
                backgroundColor: "green",
                color: "white",
                border: "none",
              }}
            >
              <Link to={"/login"} style={{ color: "white" }}>
                Login
              </Link>
            </li>
          </div>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
