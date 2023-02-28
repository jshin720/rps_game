import React, { useState } from "react";

function MainCard() {
  const [playerChoice, setPlayerChoice] = useState("");
  const [computerChoice, setComputerChoice] = useState([
    "Rock",
    "Paper",
    "Scissor",
  ]);
  const [selected, setSelected] = useState(false);
  const [playerSelection, setPlayerSelection] = useState("");
  const [score, setScore] = useState(0);

  // const update = (e) => {
  //   setPlayerChoice(e.target.value)
  // };

  return <div>
    <div className="paper-tile">
      <button id="paper-button" type="button">Paper</button>
    </div>

    <div className="scissor-tile">
      <button id="scissor-button" type="button">Scissor</button>
    </div>

    <div className="rock-tile">
      <button id="rock-button" type="button">Rock</button>
    </div>

  </div>;
}

export default MainCard;
