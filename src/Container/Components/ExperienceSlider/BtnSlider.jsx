import React from "react";
import "./Slider.css";
import rightArrow from "../../../Static/Images/slider_arrow_right.png";

export default function BtnSlider({ direction, moveSlide }) {
  return (
    <button
      onClick={moveSlide}
      className={direction === "next" ? "btn-slide next" : "btn-slide prev"}
    >
      <img src={direction === "next" ? rightArrow : rightArrow} width='30px' height='60px'/>
    </button>
  );
}