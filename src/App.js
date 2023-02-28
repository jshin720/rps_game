import logo from './logo.svg';
import './App.css';
import MainCard from './components/main_card/main_card';
import Selection from './components/selection/selection';

function App() {
  return (
    <div className="App">
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
