import React, { useState, useEffect } from "react";

function Selection(props) {
  let {pChoice, choices, score, setScore, setEnded} = props;

  

  


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
