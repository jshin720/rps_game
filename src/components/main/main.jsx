import React, { useState } from "react";

function main() {
  const [playerChoices, setPlayerChoice] = useState([
    "Rock",
    "Paper",
    "Scissor",
  ]);
  const [computerChoice, setComputerChoice] = useState([
    "Rock",
    "Paper",
    "Scissor",
  ]);
  const [selected, setSelected] = useState(false);
  const [playerSelection, setPlayerSelection] = useState("");

  return <div>main</div>;
}

export default main;
