import React, { useEffect, useState } from "react";
import CastSlider from "./CastSlider";
const Cast = () => {
  const [characters, setCharacters] = useState([]);
  useEffect(() => {
    fetch("https://rickandmortyapi.com/api/character")
      .then((response) => response.json())
      .then((data) => setCharacters(data.results))
      .catch((error) => console.error(error));
  }, []);
  return (
    <div className="">
      {characters.map((character) => (
        <CastSlider key={character.id} character={character}></CastSlider>
      ))}
    </div>
  );
};
export default Cast;
