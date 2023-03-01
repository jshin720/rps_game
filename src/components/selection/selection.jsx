import React, { useState, useEffect } from "react";

function selection(props) {
  let [playerChoice] = props;

  console.log(props)

  const [winner, setWinner] = useState(false);
  const [computerChoice, setComputerChoice] = useState("")

  const computerChoices = ["Rock", "Paper", "Scissor"];
  const randomIdx = Math.floor(Math.random() * computerChoices.length);
  

  useEffect(() => {
    setTimeout(() => {
      setComputerChoice(computerChoices[randomIdx]);
    }, 2500)
  })


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
