import React, {useState, useEffect} from 'react'

export default function ResultCard(props) {
  const [winner, setWinner] = useState("");
  const { playerChoice, computerChoice, choices, score } = props;
  
  console.log("choices", choices)
  const pSelection = choices.find((choice) => playerChoice === choice.name);
   console.log("ps", pSelection.beats === computerChoice.name);
   console.log("result props", props)
   

  useEffect(() => {
    // if (!winner) {
    //   playerWins();
    // }
    playerWins()
    console.log(
      "pchoice",
      playerChoice,
      "cchoice",
      computerChoice.name,
      "pSelction",
      pSelection
    );
  },[])


   const playerWins = (pSelection, playerChoice, computerChoice) => {
     
    if (pSelection.beats === computerChoice.name) {
      setWinner("Won");
      setScore(props.score.current + 1);
    } else if (playerChoice === computerChoice.name) {
      setWinner("Draw");
    } else if (computerChoice.beats === playerChoice) {
      setWinner("Lost");
    }
  };
  const handleClick = () => {
   
    props.setSwitchCard("main");
  };

  // const winOrLose = (winner) => {
  //   console.log("winner", winner);
  //   return (
      
  //   );
  // };

  return <div>
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
      </div>;
}
