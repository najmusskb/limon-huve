import React from "react";

import img1 from "../../Phase/Screenshot 2023-02-13 214432.png";

import icon1 from "../../Phase/Media asset/Cast Details/Icons/PNG/Status.png";
import icon2 from "../../Phase/Media asset/Cast Details/Icons/PNG/Species.png";
import icon3 from "../../Phase/Media asset/Cast Details/Icons/PNG/Gender.png";
// import bacground from "../../Phase/Media asset/Cast Details/Background.png";
// import regret from "../../Phase/Media asset/Cast Details/Icons/PNG/Redirect.png";
import Earth from "./Earth";
import Citadel from "./Citadel";
import Pilot from "./Pilot";
const DataEnd = () => {
  return (
    <div class="grid grid-rows-3 grid-flow-col gap-4 p-36 ">
      <div class="row-span-3 ...  mx-5">
        <h3 className="text-start p-2 text-blue-300">Rick Sanchez</h3>
        <img className="border p-2 rounded" src={img1} alt="/" />
        {/* <img src={regret} alt="" /> */}
      </div>
      <div class="col-span-2 p-16 ">
        <div className="border h-56">
          <div class="grid grid-cols-3 gap-4 p-5">
            <div class="border p-5 rounded">
              <img className="mx-auto" src={icon1} alt="" />
              <p>Status</p>
              <h3 className="text-white">
                <b>Alive</b>
              </h3>
            </div>
            <div class="border p-5 rounded">
              <img className="mx-auto" src={icon2} alt="" />
              <p>Species</p>
              <h3 className="text-white">
                <b>Human</b>
              </h3>
            </div>
            <div class="border p-5 rounded">
              <img className="mx-auto" src={icon3} alt="" />
              <p>Gender</p>
              <h3 className="text-white">
                <b>Male</b>
              </h3>
            </div>
          </div>
        </div>
        <Earth></Earth>
        <Citadel></Citadel>
        <Pilot></Pilot>
      </div>
    </div>
  );
};

export default DataEnd;
