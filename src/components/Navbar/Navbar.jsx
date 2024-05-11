import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import logo from "../../assets/images/logoFinal.png";
import { useLogout } from "../../Hooks/useLogout";
import { useAuthContext } from "../../Hooks/useAuthContext";
import { SignOut, UserCircle } from "@phosphor-icons/react";
import SearchBar from "../SearchBar/SearchBar";

const Navbar = () => {
  const { logout } = useLogout();
  const { user } = useAuthContext();

  const handleLogout = () => {
    logout();
  };
  return (
    <>
      <nav className="navContainer">
        <ul id="navUL">
          <div className="logo">
            <Link to={"/"}>
              <img src={logo} alt="logo" />
              <p id="hover-underline-animation-1">
                C<span>oo</span>kpal
              </p>
            </Link>
          </div>

          <SearchBar />

          <div className="remainingNav">
            <li>
              <Link
                to={"/recipes"}
                style={{ textDecoration: "none" }}
                id="hover-underline-animation-1"
              >
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
                <li className="hello-user">
                  <UserCircle size={24} style={{ color: "#509e2f" }} />{" "}
                  <Link to={"/profile"} id="hover-underline-animation-1">
                    {" "}
                    {user.displayName}{" "}
                  </Link>
                </li>
                {/* i want to logout when i click below icon */}
                <li id="loginButtonNavbar" onClick={handleLogout}>
                  <SignOut size={24} />
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
