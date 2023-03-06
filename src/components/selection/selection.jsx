import React, { useState, useEffect } from "react";

function Selection(props) {
  let {pChoice, choices} = props;

  console.log(props)

  const [winner, setWinner] = useState("");
  const [cChoice, setCChoice] = useState("")

  const randomIdx = Math.floor(Math.random() * choices.length);
  
  useEffect(() => {
    setTimeout(() => {
      if (!cChoice) setCChoice(choices[randomIdx]); // getting what the computer chooses
      console.log("random", choices[randomIdx])
      playerWins(cChoice);
      console.log("winner", winner)
      // setComputerChoice(computerChoices[randomIdx]);
    }, 2500)
  })

  const pSelection = choices.find((choice) => pChoice === choice.name);

  const playerWins = (cChoice) => {
    console.log("ps", pSelection)
    pSelection.beats === cChoice.name ? setWinner("Won") : setWinner("Lost")
    
  };
  

  const winOrLose = (winner) => {
    if (winner === "Won" || winner === "Lost") {
      return (
        <div>
          <div>
            <h4>You Picked</h4>
            <span>{`${pChoice}`}</span>
          </div>
          <div>
            <h1>{`You ${winner}`}</h1>
            <button>Play Again</button>
          </div>
          <div>
            <h4>The House Picked</h4>
            <span>{`${cChoice.name}`}</span>
          </div>
        </div>
      );
    } else {
      return (
        <div>
          <div>
            <h4>You Picked</h4>
            <span>{`${pChoice}`}</span>
          </div>
          <div>
            <h1>Draw</h1>
            <button>Play Again</button>
          </div>
          <div>
            <h4>The House Picked</h4>
            <span>{`${cChoice.name}`}</span>
          </div>
        </div>
      );
    }
  };

  return (
    <>
      {!winner ? (
        <div>
          <div>
            <h4>You Picked</h4>
            <span>{`${pChoice}`}</span>
          </div>
          <div>
            <h4>The House Picked</h4>
            <span>Empty</span>
          </div>
        </div>
      ) : (
        winOrLose(winner)
      )}
    </>
  ); 
}

export default Selection;
