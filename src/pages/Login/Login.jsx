import React from "react";
import "./Login.css";
import Navbar from "../../components/Navbar/Navbar";
import leftImg from "../../assets/images/loginImg.jpeg";
import { useState } from "react";
import { useLogin } from "../../Hooks/useLogin";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login, error, isPending } = useLogin();

  const handleLogin = (e) => {
    e.preventDefault();
    login(email, password);
  };

  return (
    <>
      <Navbar />

      <div className="containerLogin">
        <div className="leftLogin">
          <img src={leftImg} alt="" id="loginImg" />
        </div>

        <div className="rightLogin">
          <div className="contentLogin">
            <h1>Welcome Back!!</h1>
            <form action="" onSubmit={handleLogin}>
              <div className="name">
                <label htmlFor="email">
                  email:
                  <br />
                  <input
                    type="email"
                    name=""
                    id="email"
                    placeholder="email"
                    onChange={(e) => {
                      setEmail(e.target.value);
                    }}
                    value={email}
                    required
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
                    id="passwordLogin"
                    placeholder="Password"
                    onChange={(e) => {
                      setPassword(e.target.value);
                    }}
                    value={password}
                    required
                  />
                </label>
              </div>
              {error && <p>{error}</p>}

              <div className="buttonsLogin">
                {isPending && (
                  <button className="loginButton" disabled>
                    Loading...
                  </button>
                )}
                {!isPending && (
                  <input type="submit" value="Login" className="loginButton" />
                )}
              </div>
            </form>
            Don't have an account? then
            <span id="SignupSpan">
              <a href="/signup" id="signupButton">
                {" "}
                Sign up
              </a>
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
