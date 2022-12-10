import React from "react";
import "./Slider.css";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";

export default function BtnSlider({ direction, moveSlide }) {
  return (
    <button
      onClick={moveSlide}
      className={direction === "next" ? "btn-slide next" : "btn-slide prev"}
    >
      {direction === "next" ? <FaAngleRight /> : <FaAngleLeft />}
    </button>
  );
}