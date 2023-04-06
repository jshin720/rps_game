import React, { useState, useEffect } from "react";

export default function ResultCard(props) {
  const [winner, setWinner] = useState("");
  const {
    playerChoice,
    computerChoice,
    choices,
    score,
    setComputerChoice,
    setPlayerChoice,
    setSwitchCard,
  } = props;

  console.log("choices", choices);
  const pSelection = choices.find((choice) => playerChoice === choice.name);
  console.log("ps", pSelection.beats === computerChoice.name);
  console.log("result props", props);

  const gameResult = () => {
    console.log("inside gameresult", choices, computerChoice, playerChoice)
    if (pSelection.beats === computerChoice.name) {
      setWinner("Won");
      score.current = score.current + 1;
      return (
        <div>
          <div>
            <h4>You Picked</h4>
            <span>{`${playerChoice}`}</span>
          </div>
          <div>
            <h1>{`You ${winner}`}</h1>
            <button onClick={handleClick}>Play Again</button>
          </div>
          <div>
            <h4>The House Picked</h4>
            <span>{`${computerChoice.name}`}</span>
          </div>
        </div>
      );
    } else if (playerChoice === computerChoice.name) {
      setWinner("Draw");
      return (
        <div>
          <div>
            <h4>You Picked</h4>
            <span>{`${playerChoice}`}</span>
          </div>
          <div>
            <h1>{`You ${winner}`}</h1>
            <button onClick={handleClick}>Play Again</button>
          </div>
          <div>
            <h4>The House Picked</h4>
            <span>{`${computerChoice.name}`}</span>
          </div>
        </div>
      );
    } else if (computerChoice.beats === playerChoice) {
      setWinner("Lost");
      return (
        <div>
          <div>
            <h4>You Picked</h4>
            <span>{`${playerChoice}`}</span>
          </div>
          <div>
            <h1>{`You ${winner}`}</h1>
            <button onClick={handleClick}>Play Again</button>
          </div>
          <div>
            <h4>The House Picked</h4>
            <span>{`${computerChoice.name}`}</span>
          </div>
        </div>
      );
    }
  };

  const handleClick = () => {
    setPlayerChoice("");
    setComputerChoice("");
    setSwitchCard("main");
  };

  // const winOrLose = (winner) => {
  //

  // };
  console.log("winner", winner);

  return (
    <>
    {gameResult()}
    </>
  );
}
