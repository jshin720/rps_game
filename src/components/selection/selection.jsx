import React, { useState, useEffect } from "react";

function Selection(props) {
  let {pChoice, choices} = props;

  console.log(props)

  const [winner, setWinner] = useState("");
  const [cChoice, setCChoice] = useState("");

  const randomIdx = Math.floor(Math.random() * choices.length);
  
  const pSelection = choices.find((choice) => pChoice === choice.name);

  
  useEffect(() => {
    setTimeout(() => {
      if (!cChoice && !winner) {
        setCChoice(choices[randomIdx]); // getting what the computer chooses
        console.log("random", randomIdx);
        console.log("cchoice", cChoice.name);
        
      }
      playerWins(cChoice);
      // setComputerChoice(computerChoices[randomIdx]);
    }, 2000)
  })
  
  const playerWins = (cChoice) => {
    console.log("ps", pSelection.beats === cChoice.name);
    console.log("pchoice", pChoice, "cchoice", cChoice.name)
    
    if (pSelection.beats === cChoice.name) {
      setWinner("Won")
    } else if (pChoice === cChoice.name) {
      setWinner("Draw")
    } else if (cChoice.beats === pChoice) {
      setWinner("Lost")
    }
  };
  

  const winOrLose = (winner) => {
    console.log("winner", winner);
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
