import logo from '../logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="/api/greetings"
          target="_blank"
          rel="noopener noreferrer"
        >
          React from Home Folder
        </a>
      </header>
    </div>
  );
}

export default App;
