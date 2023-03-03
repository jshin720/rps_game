import React, { useState, useEffect } from "react";

function Selection(props) {
  let {pChoice, choices} = props;

  console.log(props)

  const [winner, setWinner] = useState(false);
  // const [computerChoice, setComputerChoice] = useState("")

  const randomIdx = Math.floor(Math.random() * choices.length);
  
  const cChoice = choices[randomIdx]; // getting what the computer chooses

  useEffect(() => {
    setTimeout(() => {
      // setComputerChoice(computerChoices[randomIdx]);
    }, 2500)
  })

  const pSelection = choices.find((choice) => pChoice === choice.name);

  const playerWins = (pChoice, cChoice) => {
    
    
  };

  const playerLoses = (playerChoice, computerChoice) => {
    //return the losers page
  };

  return <div>selection</div>;
}

export default Selection;
