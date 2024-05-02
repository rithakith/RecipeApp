import React from "react";
import './Signup.css'
import Navbar from "../../components/Navbar/Navbar";

const Signup = () => {
  return (
    <>
    <Navbar/>

     <div class="containerSignup">
        <div class="title"><h1>Join with us!!</h1></div>

      <div class="fullname">
        <div class="firstnameDiv">
          <label for="firstname">First Name: <br/>
            <input type="text" name="" id="firstname" placeholder="First Name" />
          </label>
        </div>
        <div class="lastnameDiv">
          <label for="lastname"
            >Last Name:<br/>
            <input type="text" name="" id="lastname" placeholder="Last Name" />
          </label>
        </div>
      </div>
      <div class="collection">
        <div class="ageDiv">
            <label for="age"
              >Age:<br/>
              <input type="number" name="" id="age" placeholder="Age" />
            </label>
          </div>
          <div class="genderDiv">
            <label for="gender">
              Gender:<br/>
              <select name="gender" id="selectGender">
                <option value="" selected>Male</option>
                <option value="">Female</option>
                <option value="">Other</option>
              </select>
            </label>
          </div>
      </div>
        
        <div class="emailDiv">
          <label for="email"
            >Email:<br/>
            <input type="email" name="" id="email" placeholder="email" />
          </label>
        </div>
        <div class="contactNoDiv">
          <label for="contactno"
            >Contact Number:<br/>
            <input type="text" name="" id="contactno" placeholder="Emergency Contact"/>
          </label>
        </div>
        <div class="usernameDiv">
          Username:
          <label for="username"><br/>
            <input type="text" name="" id="username" placeholder="username" />
          </label>
        </div>
        <div class="passwordDivSignup">
          <label for="password">
            Password:<br/>
            <input
              type="password"
              name=""
              id="password"
              placeholder="password"
            />
          </label>
          <div class="submitSignupDiv">
            <input type="submit" value="Sign up" id="submitSignup"/>
          </div>
        </div>
      </div>

    </>
  );
};

export default Signup;
