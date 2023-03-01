import React from "react";

function selection(props) {
  let [playerChoice] = props;

  console.log(props)
  
  const computerChoices = ["Rock", "Paper", "Scissor"];
  const randomIdx = Math.floor(Math.random() * computerChoices.length);
  let computerChoice = computerChoices[randomIdx];

  const playerWins = (playerChoice, computerChoice) => {
    if (playerChoice === "paper" && computerChoice === "rock") {
      //return winners page
    }
  };

  const playerLoses = (playerChoice, computerChoice) => {
    //return the losers page
  };

  return <div>selection</div>;
}

export default selection;
