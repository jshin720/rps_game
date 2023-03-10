import React, { useState, useEffect } from "react";

function Selection(props) {
  
  const randomIdx = Math.floor(Math.random() * choices.length);

  const pSelection = choices.find((choice) => pChoice === choice.name);

  useEffect(() => {
    setTimeout(() => {
      if (!cChoice && !winner) {
        setCChoice(choices[randomIdx]); // getting what the computer chooses
        console.log("random", randomIdx);
        console.log("cchoice", cChoice.name);
      }
    }, 2000);
  });

  return (
    <>
      {!winner ? (
        <div>
          <div>
            <h4>You Picked</h4>
            <span>{`${pChoice}`}</span>
          </div>
          <div>
            <h4>The House Picked</h4>
            <span>Empty</span>
          </div>
        </div>
      ) : (
        winOrLose(winner)
      )}
    </>
  );
}

export default Selection;
