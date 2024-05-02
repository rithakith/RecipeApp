import React from 'react'

import './Login.css'
import Navbar from '../../components/Navbar/Navbar'
import leftImg from '../../assets/images/loginImg.png'
const Login = () => {
  return (
    <>
    <Navbar/>
    <div class="containerLogin">
      <div class="leftLogin">
        <img src={leftImg} alt="" />
      </div>
      <div class="rightLogin">
        <div class="contentLogin">
          <h1>Welcome Back!!</h1>

          <form action="">
            <div class="name">
              <label for="name">
                Username:
                <br />
                <input type="text" name="" id="name" placeholder="Username" />
              </label>
            </div>
            <div class="passwordDiv">
              <label for="password">
                Password:
                <br />
                <input type="password" name="" id="password" placeholder="Password" />
              </label>
            </div>

            <div class="buttonsLogin">
              <input type="submit" value="Login" id="loginButton" />
              <input type="submit" value="Cancel" id="cancelButton" />
            </div>
          </form>
          Don't have an account? then 
          <span id="SignupSpan"> <a href="'/signup" id="signupButton"> Sign up</a></span>
        </div>
      </div>
    </div>

    </>
  )
}

export default Login