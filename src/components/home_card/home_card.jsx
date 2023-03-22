import React, { useState } from "react";
import ScoreCard from "../score_card/score_card";
import MainCard from "../main_card/main_card";
import ResultCard from "../result_card/result_card";
import Selection from "../selection/selection";

function Home_card() {
  const [ended, setEnded] = useState(false); // boolean to see if the game ended
  const [score, setScore] = useState(0);
  const [playerChoice, setPlayerChoice] = useState("");
  const [computerChoice, setComputerChoice] = useState("");
  const [selected, setSelected] = useState(false);

  const selectionSwitch = () => {
    return 
      <>
        {selected ? (
          <MainCard setPlayerChoice={setPlayerChoice}
            selected={setSelected}
          />
        ) : (
          <Selection
            setComputerChoice={setComputerChoice}
            setEnded={setEnded}
            computerChoice={computerChoice}
            playerChoice={playerChoice}
          />
        )}
      </>;
  };

  return (
    <div>
      <ScoreCard score={score} />
      {ended ? (
        selectionSwitch
      ) : (
        <ResultCard
          playerChoice={playerChoice}
          computerChoice={computerChoice}
          setEnded={setEnded}
        />
      )}
    </div>
  );
}

export default Home_card;
