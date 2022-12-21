import logo from './logo.svg';
import './App.css';
// import Clock from './componentes/classComponent';
import { Clock } from './componentes/functionalComponent';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1> Realizando tarea número 2 con OB</h1>
        <p>conviertiendo un componente tipo objeto a componente funcional</p>
        <Clock></Clock>
      </header>
    </div>
  );
}

export default App;
