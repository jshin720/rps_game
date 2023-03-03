import React, { useState, useEffect } from "react";

function Selection(props) {
  let {pChoice, choices} = props;

  console.log(props)

  const [winner, setWinner] = useState("");
  const [cChoice, setCChoice] = useState("")

  const randomIdx = Math.floor(Math.random() * choices.length);
  
  useEffect(() => {
    setTimeout(() => {
      if (!cChoice) setCChoice([randomIdx]); // getting what the computer chooses
      // setComputerChoice(computerChoices[randomIdx]);
    }, 2500)
  })

  const pSelection = choices.find((choice) => pChoice === choice.name);

  const playerWins = (cChoice) => {
    pSelection.beats === cChoice ? setWinner("wins") : setWinner("lose")
  };

 

  return <div>selection</div>;
}

export default Selection;
