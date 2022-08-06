import logo from './logo.svg';
import './App.css';

function App() {
  console.log(process.env.REACT_APP_API_KEY)
  return (
    <div className="App">
      <header className="App-header">
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
