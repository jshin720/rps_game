import React from "react";
import Rock from "../../images/rock.svg";
import Paper from "../../images/paper.svg";
import Scissors from "../../images/scissors.svg";
import { ReactSVG } from "react-svg";
import "./selection.css";

function Selection(props) {
  const {
    userChoice,
    computerChoice,
    endPlayerTurn,
    endComputerTurn,
    roundOver,
    turnResults,
    setComputerChoice,
    setUserChoice,
    setTurnResults,
    setEndPlayerTurn,
    setRoundOver
  } = props;
  console.log("selection", props);

  const handleClick = () => {
    setUserChoice("");
    setComputerChoice("");
    setTurnResults("");
    setEndPlayerTurn(false);
    setRoundOver(false)
  };

  const svgSwitcher = (choice) => {
    if (choice === "rock")
      if (turnResults === "You Win!") {
        return (
        <span className="winner-rock">
          <img src={Rock} alt={choice} className="rock-icon" />
        </span>
        )
      } else {
        return (
          <span className="choice-icons-rock">
            <img src={Rock} alt={choice} className="rock-icon" />
          </span>
        );
    } else if (choice === "paper") {
        if (turnResults === "You Win!") {
          return (
            <span className="winner-paper">
              <img src={Paper} alt={choice} className="paper-icon" />
            </span>
          )
        } else {
          return (
            <span className="choice-icons-paper">
              <img src={Paper} alt={choice} className="paper-icon" />;
            </span>
          )
        }  
    } else if (choice === "scissors") {
      if (turnResults === "You Win!") {
        return (
          <span className="winner-scissors">
            <img src={Scissors} alt={choice} className="scissors-icon" />
          </span>
        )
      } else {
        return (
          <span className="choice-icons-scissor">
            <img src={Scissors} alt={choice} className="scissors-icon" />;
          </span>
        )
      };
    }
  }

  const choiceSwitch = () => {
    // take out a layer of divs below later
    if (endPlayerTurn && !endComputerTurn) {
      return (
        <div className="selection-container">
          <div className="player-choice-container">
            <h4 className="players-selection">You Picked</h4>

            {svgSwitcher(userChoice)}
          </div>
          <div className="computer-choice-container">
            <h4 className="players-selection">The House Picked</h4>
            <span className="placeHolder"></span>
          </div>
        </div>
      );
    } else if (endPlayerTurn && endComputerTurn) {
      return (
        <div className="selection-container">
          <div className="player-choice-container">
            <h4 className="players-selection">You Picked</h4>
            {svgSwitcher(userChoice)}
          </div>
          <div>
            {roundOver ? (
              <div className="results-container">
                <h1>{`${turnResults}`}</h1>
                <button className="pa-button" onClick={() => handleClick()}>
                  Play Again
                </button>
              </div>
            ) : null}
          </div>
          <div className="computer-choice-container">
            <h4 className="players-selection">The House Picked</h4>
            {svgSwitcher(computerChoice)}
          </div>
        </div>
      );
    }
  };

  return <>{choiceSwitch()}</>;
}

export default Selection;
