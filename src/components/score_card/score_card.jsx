import React, {useState} from 'react';
import MainCard from '../main_card/main_card';

function ScoreCard(props) {
  console.log(props)
    let {score} = props;

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
          <h4>score {`${score}`}</h4>
        </span>
    </div>
  );
}

export default ScoreCard;
