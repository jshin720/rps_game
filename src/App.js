import {Routes, Route} from 'react-router-dom' 
import './App.css';
import MainCard from './components/main_card/main_card';
import Selection from './components/selection/selection';
import ResultsCard from './components/result_card/result_card';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path='/' component={<MainCard/>}/>
        <Route exact path='/selection' component={<Selection/>}/>
        <Route exact path='/results' component={<ResultsCard/>}/>
      </Routes>
      <header className="App-header">
        <span>
          <ul>
            <li>Rock</li>
            <li>Paper</li>
            <li>Scissor</li>
          </ul>
        </span>
        <span className='score-holder'>
          <h4>score</h4>
        </span>
      </header>
      <MainCard />
    </div>
  );
}

export default App;
