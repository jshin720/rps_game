import React, { useState } from "react";
import Selection from "../selection/selection";

function MainCard(props) {
  const [playerChoice, setPlayerChoice] = useState("");
  const [selected, setSelected] = useState(false);

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
    setSelected(true);
  };

  c
  

  return (
    <>
      { selected ? 
       ( <div>
       <span className="paper-tile">
           <button id="paper-button" type="button" name="paper" value="paper" onClick={handleClick}>Paper</button>
         </span>
     
         <span className="scissor-tile">
           <button id="scissor-button" type="button"  name="scissor" value="scissor" onClick={handleClick}>Scissor</button>
         </span>
     
         <span className="rock-tile">
           <button id="rock-button" type="button" name="rock" value="rock" onClick={handleClick}>Rock</button>
         </span>
       </div> )
       : 
       <Selection
        pChoice={playerChoice}
        choices={choices}
       />

      }
    </>
  )
}

export default MainCard;
