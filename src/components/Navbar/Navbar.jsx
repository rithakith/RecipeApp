import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav>
        <div className="navContainer">
          <ul id="navUL">
            <div className="logo">
              <li>
                <Link to={"/"}>LOGO</Link>
              </li>
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
                <Link to={"/login"} style={{color:"white"}}>Login</Link>
              </li>
            </div>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
