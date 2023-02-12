import React from "react";
import "./Project.css";

const ProjectTwo = ({ data }) => {
  const { name, position } = data;
  return (
    <div className="grid shadow m-4 bg-base-100 shadow-xl border cardstyle">
      <div>
        {/* <h2 className="text-start p-2 text-2xl text-white">{position}</h2> */}
        <h6 className="text-start p-2 text-2xl text-white">{position}</h6>
        <h4 className="text-start p-2 text-2xl text-white">{name}</h4>
      </div>
    </div>
  );
};

export default ProjectTwo;
