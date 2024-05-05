import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import logo from "../../assets/images/logoFinal.png";
import { useLogout } from "../../Hooks/useLogout";
import { useAuthContext } from "../../Hooks/useAuthContext";

const Navbar = () => {
  const { logout } = useLogout();
  const { user } = useAuthContext();
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
            {!user && (
              <>
                <li>
                  <Link to={"/signup"}>Signup</Link>
                </li>
                <li id="loginButtonNavbar">
                  <Link to={"/login"} style={{ color: "white" }}>
                    Login
                  </Link>
                </li>
              </>
            )}
            {user && (
              <>
                {" "}
                <li>hello, {user.displayName}</li>
                <li id="loginButtonNavbar">
                  <Link style={{ color: "white" }} onClick={logout}>
                    Logout
                  </Link>
                </li>
              </>
            )}
          </div>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
