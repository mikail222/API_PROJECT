import React, { useEffect, useState } from "react";
import "./App.css";
import AvatarCharacter from "./AvatarCharacter";

const App = () => {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    const baseUrl = "https://last-airbender-api.herokuapp.com";
    const url = `${baseUrl}/api/v1/characters`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setCharacters(data));
  }, []);
  return (
    <div className="App">
      {characters.map((character) => (
        <AvatarCharacter key={character.name} characterName={character.name} />
      ))}
      {characters.length === 0 && "loading..."}
    </div>
  );
};
export default App;
