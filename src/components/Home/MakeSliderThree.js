import React from "react";

const MakeSliderThree = ({ data }) => {
  console.log(data);
  const { name, id } = data;
  return (
    <div className="grid shadow m-4 bg-base-100 shadow-xl border cardstyle">
      <div>
        <h3 className="text-start">#{id}</h3>
        <h2 className="text-start p-2 text-2xl text-white">{name}</h2>
      </div>
    </div>
  );
};

export default MakeSliderThree;
