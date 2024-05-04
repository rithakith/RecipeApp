import React from "react";
import "./Signup.css";
import Navbar from "../../components/Navbar/Navbar";

const Signup = () => {
  return (
    <>
      <Navbar />

      <div class="containerSignup">
        <div class="title">
          <h1>Join with us!!</h1>
        </div>

        <div class="usernameDiv">
          Username:
          <label for="username">
            <br />
            <input type="text" name="" id="username" placeholder="username"  />
          </label>
        </div>

        <div class="collection">
          <div class="ageDiv">
            <label for="age">
              Age:
              <br />
              <input
                type="number"
                name=""
                id="age"
                placeholder="Age"
                min={10}
              />
            </label>
          </div>
          <div class="genderDiv">
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

        <div class="emailDiv">
          <label for="email">
            Email:
            <br />
            <input type="email" name="" id="email" placeholder="email" />
          </label>
        </div>

        <div class="collection">
          <div class="ageDiv">
            <label for="password">
              Password:
              <br />
              <input
                type="password"
                name=""
                id="password"
                placeholder="password"
              />
            </label>
          </div>
          <div class="genderDiv">
            <label for="password">
              Confirm Password:
              <br />
              <input
                type="password"
                name=""
                id="password"
                placeholder="password"
              />
            </label>
          </div>
        </div>

        <div class="passwordDivSignup">
          <div class="submitSignupDiv">
            <input type="submit" value="Sign up" id="submitSignup" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
