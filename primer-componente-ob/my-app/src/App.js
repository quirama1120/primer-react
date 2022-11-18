import logo from './logo.svg';
import './App.css';
import Greeting from './components/pure/greeting';
import FGreeting from './components/pure/fGreeting';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          {/* Componente Greeting.jsx*/ }
          <Greeting name="Quirama"> </Greeting>
        </p>
        <p>
          <FGreeting name="Hernández"> </FGreeting>
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
