import React from "react";
import "./Project.css";

const Project = ({ data }) => {
  //   console.log(data);
  const { name, imageurl } = data;
  return (
    <div className="grid shadow m-4 bg-base-100 shadow-xl border cardstyle">
      <figure>
        <img className="rounded" src={imageurl} alt="Shoes" />
      </figure>
      <div>
        <h2 className="text-start p-2 text-2xl text-white">{name}</h2>
      </div>
    </div>
  );
};
export default Project;
