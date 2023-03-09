import React, { useState } from "react";
import Selection from "../selection/selection";

function MainCard(props) {
  const [playerChoice, setPlayerChoice] = useState("");
  const [selected, setSelected] = useState(false);
  const [winner, setWinner] = useState("");
  const [cChoice, setCChoice] = useState("");

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
      }, 2000);
    });

    const playerWins = (cChoice) => {
      console.log("ps", pSelection.beats === cChoice.name);
      console.log("pchoice", pChoice, "cchoice", cChoice.name);

      if (pSelection.beats === cChoice.name) {
        setWinner("Won");
        setScore(score++);
      } else if (pChoice === cChoice.name) {
        setWinner("Draw");
      } else if (cChoice.beats === pChoice) {
        setWinner("Lost");
      }
    };

  const handleClick = (e) => {
    setPlayerChoice(e.target.value);
    setSelected(true);
  };

  return (
    <>
      {!selected ? (
        <div>
          <span className="paper-tile">
            <button
              id="paper-button"
              type="button"
              name="paper"
              value="paper"
              onClick={handleClick}
            >
              Paper
            </button>
          </span>

          <span className="scissor-tile">
            <button
              id="scissor-button"
              type="button"
              name="scissor"
              value="scissor"
              onClick={handleClick}
            >
              Scissor
            </button>
          </span>

          <span className="rock-tile">
            <button
              id="rock-button"
              type="button"
              name="rock"
              value="rock"
              onClick={handleClick}
            >
              Rock
            </button>
          </span>
        </div>
      ) : (
        <Selection
          pChoice={playerChoice}
          choices={choices}
          setScore={props.setScore}
          setEnded={props.setEnded}
          score={props.score}
        />
      )}
    </>
  );
}

export default MainCard;
