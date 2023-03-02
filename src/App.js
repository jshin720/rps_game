import React from "react";
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

function App() {
  return (
    <div className="App">
      
      <Routes>
        <Route path="/" element={<ScoreCard/>}/>
        <Route path="/mainCard" element={<MainCard/>} />
        <Route path="/selection" element={<Selection/>} />
        <Route path="/results" element={<ResultsCard/>} />
      </Routes>
    </div>
  );
}

export default App;
