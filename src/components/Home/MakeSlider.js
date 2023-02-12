import React from "react";
import backgroundImg from "../../Phase/Media asset/Home page/Background  Elements/Spiral.png";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { ProjectData, responsive } from "./data";
import Project from "./Project";
import MakeProjectSlider from "./MakeProjectSlider";
import MakeSliderThreeData from "./MakeSliderThreeData";
const MakeSlider = () => {
  return (
    <section
      style={{
        background: `url(${backgroundImg})`,
      }}
    >
      <div>
        <Carousel responsive={responsive}>
          {ProjectData.map((data) => (
            <Project key={data.id} data={data}></Project>
          ))}
        </Carousel>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <MakeProjectSlider></MakeProjectSlider>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <MakeSliderThreeData></MakeSliderThreeData>
      </div>
    </section>
  );
};
export default MakeSlider;
