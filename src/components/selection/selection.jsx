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

  const winOrLose = (winner) => {
    if (winner === "wins") {
      return (
        <div>
          <div>
            <h4>You Picked</h4>
            <span>Players Choicc</span>
          </div>
          <div>
            <h1>You Win</h1>
            <button>Play Again</button>
          </div>
          <div>
            <h4>The House Picked</h4>
            <span>computers choice</span>
          </div>
        </div>
      );
    } else if (winner === "lose") {
       return (
        <div>
          <div>
            <h4>You Picked</h4>
            <span>Players Choicc</span>
          </div>
          <div>
            <h1>You lose</h1>
            <button>Play Again</button>
          </div>
          <div>
            <h4>The House Picked</h4>
            <span>computers choice</span>
          </div>
        </div>
    }
  }

  return (
    <>
    { !winner ? 
    (<div>
        <div>
          <h4>You Picked</h4>
          <span>Players Choicc</span>
        </div>
        <div>
          <h4>The House Picked</h4>
          <span>computers choice</span>
        </div>
      </div> )
    : 
      winOrLose()
  }
    </>
  ); 
}

export default Selection;
