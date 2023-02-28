import React, { useState } from "react";

function MainCard() {
  const [playerChoice, setPlayerChoice] = useState("");
  const [computerChoice, setComputerChoice] = useState([
    "Rock",
    "Paper",
    "Scissor",
  ]);
  const [selected, setSelected] = useState(false);
  const [score, setScore] = useState(0);

  const update = (e) => {
    setPlayerChoice(e.target.value);
    setSelected = useState(true);
  };

  const randomizeComputerChoice = () => {
    computerChoice = 
  }

  const playerWins = (playerChoice, computerChoice) => {
    if (playerChoice === "paper" && computerChoice === "rock") {
      //return winners page
    }
  }

  return <div>
    <div className="paper-tile">
      <button id="paper-button" type="button" value="paper" onClick={update}>Paper</button>
    </div>

    <div className="scissor-tile">
      <button id="scissor-button" type="button" value="scissor" onClick={update}>Scissor</button>
    </div>

    <div className="rock-tile">
      <button id="rock-button" type="button" value="rock" onClick={update}>Rock</button>
    </div>

  </div>;
}

export default MainCard;
