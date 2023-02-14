import React from "react";
import im1 from "../../Phase/Media asset/Cast Details/Icons/PNG/Episode(s).png";
import im2 from "../../Phase/Media asset/Cast Details/Icons/PNG/Location.png";

const Earth = () => {
  return (
    <div className="border p-5 m-5 rounded">
      <img src={im1} alt="" />
      <h1
        className="text-start
      "
      >
        Origin
      </h1>
      <img src={im2} alt="" />
    </div>
  );
};

export default Earth;
