import React, {useState} from 'react';
import MainCard from '../main_card/main_card';

function ScoreCard() {
    const [score, setScore] = useState(0)

  return (
    <div>
      <header className="App-header">
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
      </header>
      <MainCard
       setScore={setScore}
       score={score}
      />
    </div>
  );
}

export default ScoreCard;
