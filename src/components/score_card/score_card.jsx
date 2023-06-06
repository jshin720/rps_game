import React from "react";
import "./score_card.css"


function ScoreCard(props) {
  console.log("scorecard", props);
  let { userPoints, computerPoints } = props;
  
  return (
    <div className="scorecard-container">
      <span className="choices-list">
          <p>Rock</p>
          <p>Paper</p>
          <p>Scissor</p>
      </span>
      <span className="score-holder">
        <h4 className="score-header">score {`${userPoints}`}</h4>
      </span>
    </div>
  );
}

export default ScoreCard;
