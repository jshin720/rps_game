import React from "react";


function ScoreCard(props) {
  console.log("scorecard", props);
  let { score } = props;
  let currentScore = score.current;
  return (
    <div>
      <span>
        <ul>
          <li>Rock</li>
          <li>Paper</li>
          <li>Scissor</li>
        </ul>
      </span>
      <span className="score-holder">
        <h4>score {`${currentScore}`}</h4>
      </span>
    </div>
  );
}

export default ScoreCard;
