import React, { useState, useEffect } from "react";
import ResultCard from "../result_card/result_card";

function Selection(props) {
  const {
    userChoice,
    computerChoice,
    endPlayerTurn,
    endComputerTurn
  } = props;
  console.log('selection', props)

  const choiceSwitch = () => {
    console.log('choiceSwitch')
    if (endPlayerTurn && !endComputerTurn) {
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
    } else if (endPlayerTurn && endComputerTurn) {
      return (
        <div>
          <div>
            <h4>You Picked</h4>
            <span>{`${userChoice}`}</span>
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
    {choiceSwitch()}
  </>;
}

export default Selection;
