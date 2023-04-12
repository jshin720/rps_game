import React from "react";

export default function ResultCard(props) {

  const {
    playerChoice,
    computerChoice,
    choices,
    score,
    setComputerChoice,
    setPlayerChoice,
    setSwitchCard,
    setScore
  } = props;

  console.log("choices", choices);
  const pSelection = choices.find((choice) => playerChoice === choice.name);
  console.log("ps", pSelection.beats === computerChoice.name);
  console.log("result props", props);
  
  const handleClick = () => {
    setPlayerChoice("");
    setComputerChoice("");
    setSwitchCard("main");
  };


  const gameResult = () => {
    console.log("inside gameresult", choices, computerChoice, playerChoice)
    if (pSelection.beats === computerChoice.name) {
      
      // setScore((score) => score + 1);      
      // console.log("score-result", score);
      return (
        <div>
          <div>
            <h4>You Picked</h4>
            <span>{`${playerChoice}`}</span>
          </div>
          <div>
            <h1>You Won</h1>
            <button onClick={handleClick}>Play Again</button>
          </div>
          <div>
            <h4>The House Picked</h4>
            <span>{`${computerChoice.name}`}</span>
          </div>
        </div>
      );
    } else if (playerChoice === computerChoice.name) {
     
      return (
        <div>
          <div>
            <h4>You Picked</h4>
            <span>{`${playerChoice}`}</span>
          </div>
          <div>
            <h1>Draw</h1>
            <button onClick={handleClick}>Play Again</button>
          </div>
          <div>
            <h4>The House Picked</h4>
            <span>{`${computerChoice.name}`}</span>
          </div>
        </div>
      );
    } else if (computerChoice.beats === playerChoice) {
      
      return (
        <div>
          <div>
            <h4>You Picked</h4>
            <span>{`${playerChoice}`}</span>
          </div>
          <div>
            <h1>You Lose</h1>
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


  return (
    <>
    {gameResult()}
    </>
  );
}
