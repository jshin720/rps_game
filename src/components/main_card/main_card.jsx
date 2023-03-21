import React, { useState } from "react";
import Selection from "../selection/selection";

function MainCard(props) {
  
  const [selected, setSelected] = useState(false);
  // const [winner, setWinner] = useState("");
 

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
          playerChoice={playerChoice}
          computerChoice={computerChoice}
          setCChoice={setComputerChoice}
          choices={choices}
        />
      )}
    </>
  );
}

export default MainCard;
