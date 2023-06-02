import React, { useState, useEffect } from "react";
import {
  BrowserRouter,
  BrowserRouter as Router,
  Route,
  Routes,
  generatePath,
} from "react-router-dom";

import "./App.css";
import ScoreCard from "./components/score_card/score_card";
import MainCard from "./components/main_card/main_card";
import Selection from "./components/selection/selection";
import ResultsCard from "./components/result_card/result_card";
import HomeCard from "./components/home_card/home_card";

function App() {
  const [userChoice, setUserChoice] = useState(null);
  const [computerChoice, setComputerChoice] = useState(null);
  const [userPoints, setUserPoints] = useState(0);
  const [computerPoints, setComputerPoints] = useState(0);
  const [endPlayerTurn, setEndPlayerTurn] = useState(false);
  const [turnResults, setTurnResults] = useState("");
  const [result, setResult] = useState("");
  const [gameOver, setGameOver] = useState(false);

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

  const handleClick = (choice) => {
    setUserChoice(choice.name);
    setEndPlayerTurn(true);
    // generateComputerChoice();
  };

  const generateComputerChoice = () => {
    const randomIdx = Math.floor(Math.random() * choices.length);
    setComputerChoice(choices[randomIdx].name);
  };

  const reset = () => {
    window.location.reload(); /// reloads the page when set to true
  };

  useEffect(() => {
    console.log('1st useeffect', userChoice)
    if (userChoice) {
      setTimeout(() => {
        // console.log('timeout')
        generateComputerChoice();
      }, 2000);
    }
  }, [endPlayerTurn]);

  
  const gameResult = (userChoice, computerChoice) => {
    // console.log('gr', userChoice, computerChoice)
    const pSelection = choices.find((choice) => userChoice === choice.name);
    const cSelection = choices.find((choice) => computerChoice === choice.name);
    const updateUserPoints = userPoints + 1;

    // console.log('selection', pSelection, cSelection)
    if (pSelection.beats === computerChoice) {
      setUserPoints(updateUserPoints);
      setTurnResults("You Win!");
      if (updateUserPoints === 5) {
        setGameOver(true);
        setResult("You Win!");
      }
    } else if (cSelection.beats === userChoice) {
        setTurnResults("You Lose");
      } else {
        setTurnResults("It's a tie!");
    }
  };

  useEffect(() => {
    // console.log('2nd useeffect', computerChoice);
    if (userChoice && computerChoice) 
      setTimeout(() => {
        gameResult(userChoice, computerChoice);
      }, 1500)
  }, [userChoice, computerChoice]);

  return (
    <div className="App">
      <ScoreCard
        userPoints={userPoints}
        computerPoints={computerPoints}
      ></ScoreCard>
      <div className="choices">
        <div className="choice-user">
          {/* <img className="user-hand" src={`../images/${userChoice.name}.svg`}>
          </img> */}
          {userChoice ? <h1>{`${userChoice}`}</h1> : null}
        </div>
        <div className="computer-user">
          {/* <img className="computer-hand" src={`../images/${computerChoice.name}`}>
            {" "}
          </img> */}
          {computerChoice ? <h1>{`${computerChoice}`}</h1> : null}
        </div>
      </div>

      <div children="button-container">
        {choices.map((choice, idx) => (
          <button className="" key={idx} onClick={() => handleClick(choice)}>
            {choice.name}
          </button>
        ))}
      </div>

      <div className="result">
        <h1>Turn Result: {turnResults}</h1>
        <h1>Final Result: {result}</h1>
      </div>

      <div className="button-div">
        {gameOver && (
          <button className="button" onClick={() => reset()}>
            Restart Game
          </button>
        )}
      </div>

      {/*       
      <Routes>
        <Route path="/" element={<HomeCard/>}/>
        <Route path="/mainCard" element={<MainCard/>} />
        <Route path="/selection" element={<Selection/>} />
        <Route path="/results" element={<ResultsCard/>} />
      </Routes> */}
    </div>
  );
}

export default App;
