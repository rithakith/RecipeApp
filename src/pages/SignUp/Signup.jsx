import React from "react";
import { useState } from "react";
import "./Signup.css";
import Navbar from "../../components/Navbar/Navbar";
import { useSignup } from "../../Hooks/useSignup";
import Modal from "../../components/Modal/Modal";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [displayName, setDisplayName] = useState("");
  const { signup, isPending, error } = useSignup();

  const handleLogin = (e) => {
    e.preventDefault();
    signup(email, password, displayName);
  };
  return (
    <>
      <Navbar />

      <div className="containerSignup">
        <div className="title">
          <h1>Join with us!!</h1>
        </div>
        <form action="" onSubmit={handleLogin}>
          <div className="usernameDiv">
            <label htmlFor="displayName">
              Username:
              <input
                type="text"
                name=""
                id="username"
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
                id="email"
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
                id="password"
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
            <div className="submitSignupDiv">
              {isPending && (
                <button className="submitSignup" disabled>
                  Loading...
                </button>
              )}
              {!isPending && (
                <input type="submit" value="Sign up" className="submitSignup" />
              )}
            </div>
          </div>
        </form>

        <br />
        <br />
        <div id="signin-direct">
          Already have an account?{" "}
          <span id="SignupSpan">
            <a href="/signup" id="signupButton">
              Login
            </a>
          </span>
        </div>
      </div>
    </>
  );
};

export default Signup;
