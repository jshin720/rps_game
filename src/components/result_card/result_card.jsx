import React from 'react'

export default function result_card(props) {

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
    <div>
      result_card
    </div>
  )
}
