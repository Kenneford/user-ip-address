import logo from './logo.svg';
import './App.css';
import ShowIP from './ShowIP';

function App() {
  console.log(process.env.REACT_APP_API_KEY)
  return (
    <div className="App">
      <header className="App-header">
      <h1>IP Address Tutorial</h1>
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
      <h1 className>IP Address Tutorial</h1>
      <div className="ip">
        <p>Welcome to Find My IP Address</p>
        <p>Kindly click here to find your IP Address</p>
        <button className="click">Find My IP's</button>

      </div>
      </header>
    </div>
  );
}

export default App;
