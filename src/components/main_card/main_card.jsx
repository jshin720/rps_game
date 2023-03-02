import React, { useState } from "react";
import Selection from "../selection/selection";

function MainCard(props) {
  const [playerChoice, setPlayerChoice] = useState("");
  const [selected, setSelected] = useState(false);

  let {score, setScore} = props

  const choices = [
    {
      name: "paper",
      beats: "rock"
    },
    {
      name: "scissor",
      beats: "paper"
    },
    {
      name: "rock",
      beats: "paper"
    }
  ];
  


  const handleClick = (e) => {
    setPlayerChoice(e.target.value);
      
    console.log("e", e.target)
    console.log(playerChoice)
    
  };

  c
  

  return <div>
    <div className="paper-tile">
      <button id="paper-button" type="button" name="paper" value="paper" onClick={handleClick}>Paper</button>
    </div>

    <div className="scissor-tile">
      <button id="scissor-button" type="button"  name="scissor" value="scissor" onClick={handleClick}>Scissor</button>
    </div>

    <div className="rock-tile">
      <button id="rock-button" type="button" name="rock" value="rock" onClick={handleClick}>Rock</button>
    </div>

  </div>;
}

export default MainCard;
