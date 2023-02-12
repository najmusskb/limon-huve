import React from "react";
import backgroundImg from "../../Phase/Media asset/Home page/Background  Elements/Spiral.png";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { ProjectData, responsive } from "./data";
import Project from "./Project";
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
      </div>
    </section>
  );
};
export default MakeSlider;
