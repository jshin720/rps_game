import React, { useState, useRef } from "react";
import ScoreCard from "../score_card/score_card";
import MainCard from "../main_card/main_card";
import ResultCard from "../result_card/result_card";
import Selection from "../selection/selection";

function Home_card() {
  const [ended, setEnded] = useState(false); // boolean to see if the game ended
  const [playerChoice, setPlayerChoice] = useState("");
  const [computerChoice, setComputerChoice] = useState("");
  const [selected, setSelected] = useState(false);
  const [switchCard, setSwitchCard] = useState("");
  const [score, setScore] = useState(0);

  

  const choices = [
    {
      name: "paper",
      beats: "rock",
    },
    {
      name: "scissor",
      beats: "paper",
    },
    {
      name: "rock",
      beats: "scissor",
    },
  ];

  let component;
  console.log("test")
  switch (switchCard) {
    case "selected":
      component = (
        <Selection
          setComputerChoice={setComputerChoice}
          setEnded={setEnded}
          computerChoice={computerChoice}
          playerChoice={playerChoice}
          choices={choices}
          setSwitchCard={setSwitchCard}
        />
      );
      break;
    case "result":
      component = (
        <ResultCard
          playerChoice={playerChoice}
          computerChoice={computerChoice}
          setPlayerChoice={setPlayerChoice}
          setComputerChoice={setComputerChoice}
          setScore={setScore}
          choices={choices}
          setSwitchCard={setSwitchCard}
          score={score}
        />
      );
      break;
    default:
      component = (
        <MainCard
          setPlayerChoice={setPlayerChoice}
          selected={setSelected}
          setSwitchCard={setSwitchCard}
        />
      );
  }

  return (
    <div>
      <ScoreCard score={score} />
      {component}
    </div>
  );
}

export default Home_card;
