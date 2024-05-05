import React from "react";
import "./Premium.css";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";

const Premium = () => {
  return (
    <>
      <Navbar />

      <div class="context">
        <h1>PREMIUM ACCESS</h1>
      </div>

      <div class="area">
        <ul class="circles">
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div>

      <div id="premium-content">
        <div className="premium-option">
          <div id="premium-option-top">
            <h2>Plan 1</h2>
            <span>1 Month</span>
          </div>

          <hr />

          <ul>
            <li>Access for latest recipes</li>
            <li>Create your own meal plan</li>
            <li>Create a grocery list</li>
            <li>Get daily cooking tips</li>
          </ul>

          <h3>$5</h3>

          <input type="button" value="Buy Now"></input>
        </div>

        <div className="premium-option">
          <div id="premium-option-top">
            <h2>Plan 2</h2>
            <span>6 Months</span>
          </div>

          <hr />

          <ul>
            <li>Access for latest recipes</li>
            <li>Create your own meal plan</li>
            <li>Create a grocery list</li>
            <li>Get daily cooking tips</li>
          </ul>

          <h3>$28</h3>

          <input type="button" value="Buy Now"></input>
        </div>

        <div className="premium-option">
          <div id="premium-option-top">
            <h2>Plan 3</h2>
            <span>12 Months</span>
          </div>

          <hr />

          <ul>
            <li>Access for latest recipes</li>
            <li>Create your own meal plan</li>
            <li>Create a grocery list</li>
            <li>Get daily cooking tips</li>
          </ul>

          <h3>$55</h3>

          <input type="button" value="Buy Now"></input>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Premium;
