import React, {useState, useEffect} from "react";
import {
  BrowserRouter,
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";

import "./App.css";
import ScoreCard from "./components/score_card/score_card";
import MainCard from "./components/main_card/main_card";
import Selection from "./components/selection/selection";
import ResultsCard from "./components/result_card/result_card";
import HomeCard from "./components/home_card/home_card";

function App() {
  const [userChoice, setUserChoice] = useState('');
  const [computerChoice, setComputerChoice] = useState('');  
  const [userPoints, setUserPoints] = useState(0);  
  const [computerPoints, setComputerPoints] = useState(0);  
  const [turnResults, setTurnResults] = useState("");  
  const [result, setResult] = useState('');  
  const [gameOver, setGameOver] = useState(false);  

  return (
    <div className="App">
      
      <Routes>
        <Route path="/" element={<HomeCard/>}/>
        <Route path="/mainCard" element={<MainCard/>} />
        <Route path="/selection" element={<Selection/>} />
        <Route path="/results" element={<ResultsCard/>} />
      </Routes>
    </div>
  );
}

export default App;
