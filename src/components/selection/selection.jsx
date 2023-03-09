import React, { useState, useEffect } from "react";

function Selection(props) {
  let {pChoice, choices, score, setScore, setEnded} = props;

  console.log(score++)

  
  const winOrLose = (winner) => {
    console.log("winner", winner);
      return (
        <div>
          <div>
            <h4>You Picked</h4>
            <span>{`${pChoice}`}</span>
          </div>
          <div>
            <h1>{`You ${winner}`}</h1>
            <button>Play Again</button>
          </div>
          <div>
            <h4>The House Picked</h4>
            <span>{`${cChoice.name}`}</span>
          </div>
        </div>
      );
  };

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
