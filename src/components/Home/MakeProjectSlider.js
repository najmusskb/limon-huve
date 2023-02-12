import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import ProjectTwo from "./ProjectTwo";
const MakeProjectSlider = () => {
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
      name: "Rick Sanchez",
      position: "pilot",
    },
    {
      id: 2,
      name: "Morty Smith",
      position: "pilot",
    },
    {
      id: 3,
      name: "Summer Smith",
      position: "pilot",
    },
    {
      id: 4,
      name: "Beth Smith",
      position: "pilot",
    },
    {
      id: 5,
      name: "Jerry Smith",
      position: "pilot",
    },
    {
      id: 6,
      name: "Abadango ",
      position: "pilot",
    },
    {
      id: 7,
      name: "Genetic ",
      position: "pilot",
    },
    {
      id: 8,
      name: "Adjudicator ",
      position: "pilot",
    },
    {
      id: 9,
      name: "Agency Director",
      position: "pilot",
    },
    {
      id: 10,
      name: "Alan Rails",
      position: "pilot",
    },
    {
      id: 11,
      name: "Albert Einstein",
      position: "pilot",
    },
    {
      id: 12,
      name: "Alexander",
      position: "pilot",
    },
    {
      id: 13,
      name: "Alien Googah",
      position: "pilot",
    },
    {
      id: 14,
      name: "Alien Morty",
      position: "pilot",
    },
    {
      id: 15,
      name: "Alien Rick",
      position: "pilot",
    },
  ];

  return (
    <section>
      <div>
        <Carousel responsive={responsive}>
          {ProjectData.map((data) => (
            <ProjectTwo key={data.id} data={data}></ProjectTwo>
          ))}
        </Carousel>
      </div>
    </section>
  );
};
export default MakeProjectSlider;
