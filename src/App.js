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
  const [userChoice, setUserChoice] = useState("");
  const [computerChoice, setComputerChoice] = useState("");
  const [userPoints, setUserPoints] = useState(0);
  const [computerPoints, setComputerPoints] = useState(0);
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
    setUserChoice(choice);
    generateComputerChoice();
  }

  const generateComputerChoice = () => {
    const randomChoice = Math.floor(Math.random() * choices.length);
    setComputerChoice(choices[randomIdx]);
  }

  const reset = () => {
    window.location.reload() /// refreshes the page when set to true
  }

  useEffect(() => {
    const comboMoves= userChoice + computerChoice;
    if (userPoints <= 4 && computerPoints <=4) {
      if (comboMoves === 'rockscissors' || comboMoves === "paperrock" || comboMoves == "scissorspaper"){
      const updateUserPoints= userPoints + 1;
      setUserPoints(updateUserPoints)
      setTurnResults("You Win!")
        if (updateUserPoints === 5) {
          setGameOver(true)
          setResult('You Win!')
        }
      }
      if (comboMoves === 'paperscissors' || comboMoves === "scissorsrock" || comboMoves == "rockpaper") {
        const updateComputerPoints = computerPoints + 1
        setComputerPoints(updateComputerPoints)
        setTurnResults("Computer got the points")
        if (updateComputerPoints === 5) {
          setGameOver(true)
          setResult('Computer Wins!')
        }
      }
      if (comboMoves === 'rockrock' || comboMoves === "scissorsscissors" || comboMoves == "paperpaper") {
        setTurnResults("It's a tie!")
      }
    }
  },[userChoice, computerChoice])

  return (
    <div className="App">
      <ScoreCard
        userPoints={userPoints}
        computerPoints={computerPoints}
      ></ScoreCard>
      <div className="choices">
        <div className="choice-user">
          <img className="user-hand" src={`../images/${userChoice.name}`}>
            {" "}
          </img>
        </div>
        <div className="computer-user">
          <img className="computer-hand" src={`../images/${computerChoice.name}`}>
            {" "}
          </img>
        </div>
      </div>

      <div>
        {choices.map((choice, idx) => 
          <button className="" key={idx} onClick={() => handleClick(choice)}> 
           {choice.name}
          </button>
        )}
      </div>
      
      <div className="result">
          <h1>Turn Result: {turnResults}</h1>
          <h1>Final Result: {result}</h1>
      </div>

      <div className="button-div">
          {gameOver && 
           <button className="button"  onClick={() => reset()} >Restart Game</button>
          }

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
