import React, { useState, useEffect } from "react";
import "./App.css";
import ScoreCard from "./components/score_card/score_card";
import Selection from "./components/selection/selection";
import Modal from "./components/modal/modal";
import Triangle from "./images/bg-triangle.svg";

function App() {
  const [userChoice, setUserChoice] = useState("");
  const [computerChoice, setComputerChoice] = useState("");
  const [userPoints, setUserPoints] = useState(0);
  // const [computerPoints, setComputerPoints] = useState(0);
  const [endPlayerTurn, setEndPlayerTurn] = useState(false);
  const [endComputerTurn, setEndComputerTurn] = useState(false);
  const [turnResults, setTurnResults] = useState("");
  const [openModal, setOpenModal] = useState(false);
  const [gameOver, setGameOver] = useState(false);
  const [roundOver, setRoundOver] = useState(false);

  const choices = [
    {
      name: "paper",
      beats: "rock",
    },
    {
      name: "scissors",
      beats: "paper",
    },
    {
      name: "rock",
      beats: "scissors",
    },
  ];

  const handleClick = (choice) => {
    setUserChoice(choice);
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
    console.log("1st useeffect", userChoice);
    if (userChoice) {
      setTimeout(() => {
       
        generateComputerChoice();
        setEndComputerTurn(true);
      }, 2000);
    }
  }, [endPlayerTurn]);

  const gameResult = (userChoice, computerChoice) => {
    
    const pSelection = choices.find((choice) => userChoice === choice.name);
    const cSelection = choices.find((choice) => computerChoice === choice.name);
    const updateUserPoints = userPoints + 1;
    setRoundOver(true);
    
    if (pSelection.beats === computerChoice) {
      setUserPoints(updateUserPoints);
      setTurnResults("You Win!");
    } else if (cSelection.beats === userChoice) {
      setTurnResults("You Lose!");
    } else {
      setTurnResults("It's a tie!");
    }
  };

  useEffect(() => {
   
    if (userChoice && computerChoice)
      setTimeout(() => {
        gameResult(userChoice, computerChoice);
      }, 1500);
  }, [userChoice, computerChoice]);

  return (
    <div className="App">
      <div className="header">
        <ScoreCard
          userPoints={userPoints}
        ></ScoreCard>
      </div>
      <div className="choices">
        {!userChoice && !computerChoice ? (
          <div className="choices-container">
            <img src={Triangle} className="triangle" alt="triangle" />
            <div className="choices-btn-container">
              <div className="paper-container">
                <button
                  className="btn paper-btn"
                  onClick={() => handleClick("paper")}
                >
                </button>
              </div>
              <div className="scissors-container">
                <button
                  className="btn scissors-btn"
                  onClick={() => handleClick("scissors")}
                >
                </button>
              </div>
              <div className="rocks-container">
                <button
                  className="btn rock-btn"
                  onClick={() => handleClick("rock")}
                >
                  {/* <ReactSVG src={Rock} className="choice-icon" alt="rock" /> */}
                </button>
              </div>
            </div>
          </div>
        ) : (
          <Selection
            userChoice={userChoice}
            computerChoice={computerChoice}
            endPlayerTurn={endPlayerTurn}
            endComputerTurn={endComputerTurn}
            roundOver={roundOver}
            turnResults={turnResults}
            setUserChoice={setUserChoice}
            setComputerChoice={setComputerChoice}
            setTurnResults={setTurnResults}
            setEndPlayerTurn={setEndPlayerTurn}
            setRoundOver={setRoundOver}
          />
        )}
      </div>

     
      <div className="btn-container">
        {gameOver && (
          <button className="button" onClick={() => reset()}>
            Restart Game
          </button>
        )}
      
      <button className="modal-button" onClick={() => setOpenModal(true)}>
        Rules
      </button>
      <Modal
        setOpenModal={setOpenModal}
        openModal={openModal}
        onClose={() => setOpenModal(false)}
      />

      </div>
    </div>
  );
}

export default App;
