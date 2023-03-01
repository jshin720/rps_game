import React, { useState } from "react";

function MainCard() {
  const [playerChoice, setPlayerChoice] = useState("");
  const [selected, setSelected] = useState(false);
  const [score, setScore] = useState(0);

  const computerChoices = ["Rock", "Paper", "Scissor"];
  const randomIdx = Math.floor(Math.random() * computerChoices.length);
  let computerChoice = computerChoices[randomIdx];

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

  const playerLoses = (playerChoice, computerChoice) => {
    //return the losers page
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
