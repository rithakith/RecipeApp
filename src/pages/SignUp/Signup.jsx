import React from "react";
import "./Signup.css";
import Navbar from "../../components/Navbar/Navbar";

const Signup = () => {
  return (
    <>
      <Navbar />

      <div className="containerSignup">
        <div class="title">
          <h1>Join with us!!</h1>
        </div>

        <div className="usernameDiv">
          <label for="username">
            Username:
            <input
              type="text"
              name=""
              id="username"
              placeholder="username"
              required
            />
          </label>
        </div>

        <div className="collection">
          <div className="ageDiv">
            <label for="age">
              Age:
              <br />
              <input
                type="number"
                name=""
                id="age"
                placeholder="Age"
                min={10}
                required
              />
            </label>
          </div>
          <div className="genderDiv">
            <label for="gender">
              Gender:
              <br />
              <select name="gender" id="selectGender">
                <option value="" selected>
                  Male
                </option>
                <option value="">Female</option>
                <option value="">Other</option>
              </select>
            </label>
          </div>
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
            />
          </label>
        </div>

        <div className="collection">
          <div class="ageDiv">
            <label for="password">
              Password:
              <br />
              <input
                type="password"
                name=""
                id="password"
                placeholder="password"
                required
              />
            </label>
          </div>
          <div className="genderDiv">
            <label for="password">
              Confirm Password:
              <br />
              <input
                type="password"
                name=""
                id="password"
                placeholder="password"
                required
              />
            </label>
          </div>
        </div>

        <div className="passwordDivSignup">
          <div className="submitSignupDiv">
            <input type="submit" value="Sign up" id="submitSignup" />
          </div>
        </div>

        <div id="signin-direct">Already have an account? Signin here</div>
      </div>
    </>
  );
};

export default Signup;
