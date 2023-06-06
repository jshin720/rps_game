import React from "react";
import Rock from "../../images/rock.svg";
import Paper from "../../images/paper.svg";
import Scissors from "../../images/scissors.svg";
import { ReactSVG } from "react-svg";

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
  } = props;
  console.log("selection", props);

  const handleClick = () => {
    setUserChoice("");
    setComputerChoice("");
    setTurnResults("");
    setEndPlayerTurn(false);
  };

  const svgSwitcher = (choice) => {
    if (choice === "rock") return <ReactSVG src={Rock} alt={choice}/>;
    if (choice === "paper") return <ReactSVG src={Paper} alt={choice} />;
    if (choice === "scissors") return <ReactSVG src={Scissors} alt={choice} />;
  } 

  const choiceSwitch = () => {
    
    // take out a layer of divs below later
    if (endPlayerTurn && !endComputerTurn) {
      return (
        <div>
          <div>
            <h4>You Picked</h4>
            <span>
              {/* {`${userChoice}`} */}
              {svgSwitcher(userChoice)}
              </span>
          </div>
          <div>
            <h4>The House Picked</h4>
            <span className="placeHolder"></span>
          </div>
        </div>
      );
    } else if (endPlayerTurn && endComputerTurn) {
      return (
        <div>
          <div>
            <h4>You Picked</h4>
            <span>{svgSwitcher(userChoice)}</span>
          </div>
          <div>
            {roundOver ? (
              <>
                <h1>{`${turnResults}`}</h1>
                <button className="pa-button" onClick={() => handleClick()}>
                  Play Again
                </button>
              </>
            ) : null}
          </div>
          <div>
            <h4>The House Picked</h4>
            <span>{svgSwitcher(computerChoice)}</span>
          </div>
        </div>
      );
    }
  };

  return <>{choiceSwitch()}</>;
}

export default Selection;
