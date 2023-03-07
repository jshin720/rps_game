import React, { useState } from "react";
import ScoreCard from "../score_card/score_card";
import MainCard from "../main_card/main_card";
import ResultCard from "../result_card/result_card";

function Home_card() {
  const [ended, setEnded] = useState(false); // boolean to see if the game ended
  const [score, setScore] = useState(0);
  
  return (
    <div>
      <ScoreCard
        score={score}
      />
      {/* {ended ? 
        <MainCard
          setScore={setScore}
        /> 
        : 
        <ResultCard
          setEnded={setEnded}
        />
      } */}
      <MainCard
        setScore={setScore}
        setEnded={setEnded}
        score={score}
      />
    </div>
  );
}

export default Home_card;
