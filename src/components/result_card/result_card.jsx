import React from 'react'

export default function ResultCard(props) {

  const {playerChoice, computerChoice, choices} = props;
  const pSelection = choices.find((choice) => playerChoice === choice.name);

   const playerWins = (computerChoice) => {
     console.log("ps", pSelection.beats === computerChoice.name);
     console.log("pchoice", playerChoice, "cchoice", computerChoice.name);

     if (pSelection.beats === computerChoice.name) {
       setWinner("Won");
       setScore(score++);
     } else if (playerChoice === computerChoice.name) {
       setWinner("Draw");
     } else if (cChoice.beats === playerChoice) {
       setWinner("Lost");
     }
   };
    const handleClick = () => {
      props.setSwitchCard("main")
    }

    const winOrLose = (winner) => {
      console.log("winner", winner);
      return (
        <div>
          <div>
            <h4>You Picked</h4>
            <span>{`${playerChoice}`}</span>
          </div>
          <div>
            <h1>{`You ${winner}`}</h1>
            <button>Play Again</button>
          </div>
          <div>
            <h4>The House Picked</h4>
            <span>{`${computerChoice.name}`}</span>
          </div>
        </div>
      );
    };

  return (
    <div>
      result_card
    </div>
  )
}
