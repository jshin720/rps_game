import React from "react";
import "./score_card.css"


function ScoreCard(props) {
  console.log("scorecard", props);
  let { userPoints, computerPoints } = props;
  
  return (
    <div className="scorecard-container">
      <div className="choices-list">
        <p>Rock</p>
        <p>Paper</p>
        <p>Scissor</p>
      </div>
      <div className="score-holder">
        <h4 className="score-header">Score</h4>
        <span className="score-box">{`${userPoints}`}</span>
      </div>
    </div>
  );
}

export default ScoreCard;
