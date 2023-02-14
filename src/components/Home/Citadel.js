import React from "react";
// import im1 from "../../Phase/Media asset/Cast Details/Icons/PNG/Episode(s).png";
import im2 from "../../Phase/Media asset/Cast Details/Icons/PNG/origin.png";
import im3 from "../../Phase/Media asset/Cast Details/Icons/PNG/Redirect.png";
import "./Citadel.css";

const Citadel = () => {
  return (
    <div className="border p-5 m-5 rounded">
      <div className="flex">
        <div>
          <img src={im2} alt="" />
          {/* <img src={im1} alt="" /> */}
          <h1 className="text-start">Origin</h1>
        </div>
        <div className="imgfileend">
          <img src={im3} alt="" />
        </div>
      </div>
    </div>
  );
};
export default Citadel;
