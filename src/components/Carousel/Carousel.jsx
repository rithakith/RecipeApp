import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import Carousel from "react-bootstrap/Carousel";
import "./Carousel.css";
import sliderimg1 from "../../assets/Carousel_Images/Slider_img1.jpg";
import sliderimg2 from "../../assets/Carousel_Images/Slider_img2.jpg";
import sliderimg3 from "../../assets/Carousel_Images/Slider_img3.jpg";

export default function App() {
  return (
    <div className="carousel-container">
      <Carousel>
        <Carousel.Item interval={3000}>
          <img className="slider-image" src={sliderimg1} alt="Image One" />
          <Carousel.Caption>
            <h3>Kabsa</h3>
            <p>Kabsa is a mixed rice dish</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={3000}>
          <img className="slider-image" src={sliderimg2} alt="Image Two" />
          <Carousel.Caption>
            <h3>Grilled Fish</h3>
            <p>Whole Grilled Fish with Fried Pepper Sauce</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={3000}>
          <img className="slider-image" src={sliderimg3} alt="Image Three" />
          <Carousel.Caption>
            <h3>Croissants</h3>
            <p>
              {" "}
              a French pastry made from yeast-risen, laminated dough in the
              shape of a crescent
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}
