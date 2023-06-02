import React, { useState, useEffect } from "react";
import ResultCard from "../result_card/result_card";

function Selection(props) {
  const {
    setComputerChoice,
    choices,
    playerChoice,
    computerChoice,
    setSwitchCard,
  } = props;

  const choiceSwitch = () => {
    if (endPlayerChoice && !endComputerChoice) {
      return (
        <div>
          <div>
            <h4>You Picked</h4>
            <span>{`${userChoice}`}</span>
          </div>
          <div>
            <h4>The House Picked</h4>
            <span>Empty</span>
          </div>
        </div>
      );
    } else if (endPlayerChoice && endComputerChoice) {
      return (
        <div>
          <div>
            <h4>You Picked</h4>
            <span>{`${playerChoice}`}</span>
          </div>
          <div>
            <h4>The House Picked</h4>
            <span>{`${computerChoice}`}</span>
          </div>
        </div>
      );
    }
  };

  return <>
    {choiceSwitch}
  </>;
}

export default Selection;
