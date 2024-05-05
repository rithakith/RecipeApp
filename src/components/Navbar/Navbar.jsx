import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import logo from "../../assets/images/logoFinal.png";

const Navbar = () => {
  return (
    <>
      <nav className="navContainer">
        <ul id="navUL">
          <div className="logo">
            <Link to={"/"}>
              <img src={logo} alt="logo" />
              <p>
                C<span>oo</span>kpal
              </p>
            </Link>
          </div>

          <div className="remainingNav">
            <li>
              <Link to={"/recipes"} style={{ textDecoration: "none" }}>
                Recipes
              </Link>
            </li>
            <li>
              {" "}
              <Link to={"/signup"}>Signup</Link>
            </li>
            <li id="loginButtonNavbar" style={{}}>
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
