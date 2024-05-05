import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import logo from "../../assets/images/logoFinal.png";
import { useLogout } from "../../Hooks/useLogout";
import { useAuthContext } from "../../Hooks/useAuthContext";
import { SignOut, UserCircle } from "@phosphor-icons/react";

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
                    <SignOut size={24} />
                  </Link>
                </li>
              </>
            )}
            {user && (
              <>

                <li className="hello-user">
                  <UserCircle size={24} style={{ color: "#509e2f" }} />{" "}
                  <Link to={"/profile"}> {user.displayName} </Link>
                </li>
                <li id="loginButtonNavbar">
                  <Link to={"/login"} style={{ color: "white" }}>
                    <SignOut size={24} />
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
