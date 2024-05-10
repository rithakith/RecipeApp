import React from "react";
import { useState } from "react";
import "./Signup.css";
import Navbar from "../../components/Navbar/Navbar";
import { useSignup } from "../../Hooks/useSignup";
import Modal from "../../components/Modal/Modal";
import { X } from "@phosphor-icons/react";
import { Link } from "react-router-dom";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [displayName, setDisplayName] = useState("");
  const { signup, isPending, error } = useSignup();
  const [showModal, setShowModal] = useState(false); // State for showing/hiding modal

  const handleSignup = (e) => {
    e.preventDefault();
    signup(email, password, displayName);
    setEmail("");
    setPassword("");
    setDisplayName("");
    setShowModal(true);
  };
  return (
    <>
      <Navbar />

      <div className="containerSignup">
        <div className="title">
          <h1>Join with us!!</h1>
        </div>
        <form action="" onSubmit={handleSignup}>
          <div className="usernameDiv">
            <label htmlFor="displayName">
              Username:
              <input
                type="text"
                name=""
                className="signup-details"
                placeholder="Username"
                onChange={(e) => {
                  setDisplayName(e.target.value);
                }}
                value={displayName}
                required
              />
            </label>
          </div>

          <div className="emailDiv">
            <label htmlFor="email">
              Email:
              <br />
              <input
                type="email"
                name=""
                className="signup-details"
                placeholder="email"
                required
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                value={email}
              />
            </label>
          </div>

          <div className="passwordDiv">
            <label htmlFor="password">
              Password:
              <br />
              <input
                type="password"
                name=""
                className="signup-details"
                placeholder="Password"
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
                value={password}
                required
              />
            </label>
          </div>

          <br />
          {error && <p>{error}</p>}
          <div className="passwordDivSignup">
            {/* <div className="submitSignupDiv"> */}
            {isPending && (
              <button className="submitSignup" disabled>
                Loading...
              </button>
            )}
            {!isPending && <button className="submitSignup">Sign up</button>}
            {/* </div> */}
          </div>
        </form>

        <div id="signin-direct">
          Already have an account?{" "}
          <span id="SignupSpan">
            <a href="/signup" id="signupButton">
              Login
            </a>
          </span>
        </div>
      </div>

      {showModal && (
        <Modal>
          <div id="close-button">
            <Link to={"/"}>
              <X size={32} color="#509e2f" weight="bold" />
            </Link>
          </div>
          <div id="signup-modal">
            <h2>You have successfully signed up!</h2>
          </div>
        </Modal>
      )}
    </>
  );
};

export default Signup;
