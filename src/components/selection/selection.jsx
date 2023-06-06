import React from "react";
import Rock from "../../images/rock.svg";
import Paper from "../../images/paper.svg";
import Scissors from "../../images/scissors.svg";

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

  const choiceSwitch = () => {
    console.log("choiceSwitch");
    // take out a layer of divs below later
    if (endPlayerTurn && !endComputerTurn) {
      return (
        <div>
          <div>
            <h4>You Picked</h4>
            <span>
              {`${userChoice}`}
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
            <span>{`${userChoice}`}</span>
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
            <span>{`${computerChoice}`}</span>
          </div>
        </div>
      );
    }
  };

  return <>{choiceSwitch()}</>;
}

export default Selection;
