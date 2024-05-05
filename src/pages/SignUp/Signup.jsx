import React from "react";
import { useState } from "react";
import "./Signup.css";
import Navbar from "../../components/Navbar/Navbar";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    console.log(email, password, username);
  };
  return (
    <>
      <Navbar />

      <div className="containerSignup">
        <div class="title">
          <h1>Join with us!!</h1>
        </div>
        <form action="" onSubmit={handleLogin}>
          <div className="usernameDiv">
            <label for="username">
              Username:
              <input
                type="text"
                name=""
                id="username"
                placeholder="username"
                onChange={(e)=>{setUsername(e.target.value)}}
                value={username}
                required
              />
            </label>
          </div>

          <div className="emailDiv">
            <label for="email">
              Email:
              <br />
              <input
                type="email"
                name=""
                id="email"
                placeholder="email"
                required
                onChange={(e)=>{setEmail(e.target.value)}}
                value={email}
              />
            </label>
          </div>

          <div className="passwordDiv">
            <label for="password">
              Password:
              <br />
              <input
                type="password"
                name=""
                id="password"
                placeholder="Password"
                onChange={(e)=>{setPassword(e.target.value)}}
                value={password}
                required
              />
            </label>
          </div>

          <br />

          <div className="passwordDivSignup">
            <div className="submitSignupDiv">
              <input type="submit" value="Sign up" id="submitSignup" />
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
