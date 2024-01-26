import "./testimonials.scss";
import { useEffect, useState } from "react";
import { FaStar } from "react-icons/fa6";
import Slider from "../slider/Slider";

const Testimonials = () => {
  return (
    <div className="testimonials">
      <div className="container">
        <div className="top">
          <h1>What our Clients say about us!</h1>
          <p>
            Our clients send us bunch of smiles with our services and we love
            them.
          </p>
        </div>
      </div>
      <div className="sliderDiv">
        <Slider />
        <div class="slanted-line"></div>
      </div>
    </div>
  );
};

export default Testimonials;
