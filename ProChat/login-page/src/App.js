import logo from "./logo.svg";
import "./App.css";
import "./SubRefractor.js";
import SubRefractor from "./SubRefractor.js";
import UseStateofHook from "./UseStateofHook";

function App() {
  return (
    <div className="App flex-row justify-between items-center">
      <SubRefractor className="body">
        <h1>children ABCCCCC</h1>
      </SubRefractor>
      <UseStateofHook></UseStateofHook>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
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
