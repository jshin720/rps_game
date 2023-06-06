import React, { useState, useEffect } from "react";
import { ReactSVG } from "react-svg";
import "./App.css";
import ScoreCard from "./components/score_card/score_card";
import Selection from "./components/selection/selection";
import Modal from "./components/modal/modal";
import Rock from "./images/rock.svg";
import Paper from "./images/paper.svg";
import Scissors from "./images/scissors.svg";
import Triangle from "./images/bg-triangle.svg"
import logo from "./images/logo.svg"

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
        // console.log('timeout')
        generateComputerChoice();
        setEndComputerTurn(true);
      }, 2000);
    }
  }, [endPlayerTurn]);

  const gameResult = (userChoice, computerChoice) => {
    // console.log('gr', userChoice, computerChoice)
    const pSelection = choices.find((choice) => userChoice === choice.name);
    const cSelection = choices.find((choice) => computerChoice === choice.name);
    const updateUserPoints = userPoints + 1;
    setRoundOver(true);
    // console.log('selection', pSelection, cSelection)
    if (pSelection.beats === computerChoice) {
      setUserPoints(updateUserPoints);
      setTurnResults("You Win!");
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
      }, 1500);
  }, [userChoice, computerChoice]);

  return (
    <div className="App">
      <ScoreCard
        userPoints={userPoints}
        // computerPoints={computerPoints}
      ></ScoreCard>
      <div className="choices">
        {!userChoice && !computerChoice ? (
          <div className="btn-container">
            <ReactSVG src={Triangle} />
            <div className="rocks-container">
              <button className="rock-btn" onClick={() => handleClick("rock")}>
                <ReactSVG src={Rock} />
              </button>
            </div>
            <div className="paper-container">
              <button className="paper-btn" onClick={() => handleClick("paper")}>
                <ReactSVG src={Paper} />
              </button>
            </div>
            <div className="Scissors-container">
              <button className="scissors-btn" onClick={() => handleClick("scissors")}>
                <ReactSVG src={Scissors} />
              </button>
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
          />
        )}
      </div>

      <div className="result">
        <h1>Turn Result: {turnResults}</h1>
        {/* <h1>Final Result: {result}</h1> */}
      </div>

      <div className="button-div">
        {gameOver && (
          <button className="button" onClick={() => reset()}>
            Restart Game
          </button>
        )}
      </div>

      <button className="modal-button" onClick={() => setOpenModal(true)}>
        Rules
      </button>
      <Modal
        setOpenModal={setOpenModal}
        openModal={openModal}
        onClose={() => setOpenModal(false)}
      />
    </div>
  );
}

export default App;
