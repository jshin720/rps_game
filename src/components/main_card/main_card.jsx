import React, { useState } from "react";
import Selection from "../selection/selection";

function MainCard() {
  const [playerChoice, setPlayerChoice] = useState("");
  const [selected, setSelected] = useState(false);
  const [score, setScore] = useState(0);

  

  const update = (e) => {
    setPlayerChoice(e.target.value);
    
    return (
      <div>
        <Selection
          playerChoice={playerChoice}
        />
      </div>
    )
  };

 
  

  return <div>
    <div className="paper-tile">
      <button id="paper-button" type="button" value="paper" onClick={update}>Paper</button>
    </div>

    <div className="scissor-tile">
      <button id="scissor-button" type="button" value="scissor" onClick={update}>Scissor</button>
    </div>

    <div className="rock-tile">
      <button id="rock-button" type="button" value="rock" onClick={update}>Rock</button>
    </div>

  </div>;
}

export default MainCard;
