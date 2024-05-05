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

      <div id="premium"></div>

      <Footer />
    </>
  );
};

export default Premium;
