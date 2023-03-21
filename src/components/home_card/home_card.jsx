import React, { useState } from "react";
import ScoreCard from "../score_card/score_card";
import MainCard from "../main_card/main_card";
import ResultCard from "../result_card/result_card";

function Home_card() {
  const [ended, setEnded] = useState(false); // boolean to see if the game ended
  const [score, setScore] = useState(0);
  const [playerChoice, setPlayerChoice] = useState("");
  const [computerChoice, setComputerChoice] = useState("");
  
  return (
    <div>
      <ScoreCard score={score} />
      {ended ? (
        <MainCard
          setScore={setScore}
          score={score}
          setPlayerChoice={setPlayerChoice}
          setComputerChoice={setComputerChoice}
        />
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
