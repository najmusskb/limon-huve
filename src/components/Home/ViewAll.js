import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import ViewAllSlider from "./ViewAllSlider";
const ViewAll = () => {
  const ProjectData = [
    {
      id: 1,
      imageurl: "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
      name: "Rick Sanchez",
    },
    {
      id: 2,
      imageurl: "https://rickandmortyapi.com/api/character/avatar/2.jpeg",
      name: "Morty Smith",
    },
    {
      id: 3,
      imageurl: "https://rickandmortyapi.com/api/character/avatar/3.jpeg",
      name: "Summer Smith",
    },
    {
      id: 4,
      imageurl: "https://rickandmortyapi.com/api/character/avatar/4.jpeg",
      name: "Beth Smith",
    },
    {
      id: 5,
      imageurl: "https://rickandmortyapi.com/api/character/avatar/5.jpeg",
      name: "Jerry Smith",
    },
    {
      id: 6,
      imageurl: "https://rickandmortyapi.com/api/character/avatar/6.jpeg",
      name: "Abadango Cluster Princess",
    },
    {
      id: 7,
      imageurl: "https://rickandmortyapi.com/api/character/avatar/7.jpeg",
      name: "Genetic experiment",
    },
    {
      id: 8,
      imageurl: "https://rickandmortyapi.com/api/character/avatar/8.jpeg",
      name: "Adjudicator Rick",
    },
    {
      id: 9,
      imageurl: "https://rickandmortyapi.com/api/character/avatar/9.jpeg",
      name: "Agency Director",
    },
    {
      id: 10,
      imageurl: "https://rickandmortyapi.com/api/character/avatar/10.jpeg",
      name: "Alan Rails",
    },
    {
      id: 11,
      imageurl: "https://rickandmortyapi.com/api/character/avatar/11.jpeg",
      name: "Albert Einstein",
    },
    {
      id: 12,
      imageurl: "https://rickandmortyapi.com/api/character/avatar/12.jpeg",
      name: "Alexander",
    },
    {
      id: 13,
      imageurl: "https://rickandmortyapi.com/api/character/avatar/13.jpeg",
      name: "Alien Googah",
    },
    {
      id: 14,
      imageurl: "https://rickandmortyapi.com/api/character/avatar/14.jpeg",
      name: "Alien Morty",
    },
    {
      id: 15,
      imageurl: "https://rickandmortyapi.com/api/character/avatar/15.jpeg",
      name: "Alien Rick",
    },
  ];

  return (
    <section>
      <div className="">
        <div className="grid grid-cols-4">
          {ProjectData.map((data) => (
            <ViewAllSlider key={data.id} data={data}></ViewAllSlider>
          ))}
        </div>
      </div>
    </section>
  );
};
export default ViewAll;
