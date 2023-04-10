import React, { useState, useEffect } from "react";
import ResultCard from "../result_card/result_card";

function Selection(props) {

  const { setComputerChoice, choices, playerChoice,computerChoice, setSwitchCard } = props
  const randomIdx = Math.floor(Math.random() * choices.length);

  let selectionSwitch = false;

  useEffect(() => {
    console.log("test useeffect")
    setTimeout(() => {
      if (!computerChoice) {
        setComputerChoice(choices[randomIdx]); // getting what the computer chooses
        selectionSwitch = true;
        setSwitchCard("result");
        console.log("random", randomIdx);
        console.log("cchoice", computerChoice);
      }
    }, 2000);
  },[computerChoice]);

  return (
    <>
      {!selectionSwitch ? (
        <div>
          <div>
            <h4>You Picked</h4>
            <span>{`${playerChoice}`}</span>
          </div>
          <div>
            <h4>The House Picked</h4>
            <span>Empty</span>
          </div>
        </div>
      ) : (
        <div>
          <div>
            <h4>You Picked</h4>
            <span>{`${playerChoice}`}</span>
          </div>
          <div>
            <h4>The House Picked</h4>
            <span>{`${computerChoice.name}`}</span>
          </div>
        </div>
      )}
    </>
  );
}

export default Selection;
