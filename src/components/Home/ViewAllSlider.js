import React from "react";
import "./ViewAllslider.css";

const ViewAllSlider = ({ data }) => {
  const { imageurl } = data;
  return (
    <div className=" gap-4  m-4   border cardstylee">
      <img src={imageurl} alt="" />
    </div>
  );
};

export default ViewAllSlider;
