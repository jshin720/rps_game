import React, { useState } from "react";
import Selection from "../selection/selection";

function MainCard(props) {
  
  
 
 
    // const {selected, setPlayerChoice} = props;
    console.log("main - 2", props)

 

  
  const handleClick = (e) => {
    props.setPlayerChoice(e.target.value);
    props.setSwitchCard("selected");
  };

  return (
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
      
  );
}

export default MainCard;
