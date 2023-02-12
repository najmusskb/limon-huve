import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import MakeSliderThree from "./MakeSliderThree";
const MakeSliderThreeData = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 2,
    },
  };

  const ProjectData = [
    {
      id: 1,
      name: "Earth",
    },
    {
      id: 2,
      name: "Abodango",
    },
    {
      id: 3,
      name: "citadel ",
    },
    {
      id: 4,
      name: "Wprldenders",
    },
    {
      id: 5,
      name: "Anatomy",
    },
    {
      id: 6,
      name: "Interdemential ",
    },
    {
      id: 7,
      name: "Field resort",
    },
    {
      id: 8,
      name: "Adjudicator ",
    },
    {
      id: 9,
      name: "Agency Director",
    },
    {
      id: 10,
      name: "Alan Rails",
    },
    {
      id: 11,
      name: "Albert Einstein",
    },
    {
      id: 12,
      name: "Alexander",
    },
    {
      id: 13,
      name: "Alien Googah",
    },
    {
      id: 14,
      name: "Alien Morty",
    },
    {
      id: 15,
      name: "Alien Rick",
    },
  ];

  return (
    <section>
      <div>
        <Carousel responsive={responsive}>
          {ProjectData.map((data) => (
            <MakeSliderThree key={data.id} data={data}></MakeSliderThree>
          ))}
        </Carousel>
      </div>
    </section>
  );
};

export default MakeSliderThreeData;
