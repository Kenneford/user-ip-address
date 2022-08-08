import logo from './logo.svg';
import './App.css';
import { Container } from '@mui/system';
import { Link } from 'react-router-dom';
import ShowIP from './ShowIP';

function App() {
  console.log(process.env.REACT_APP_API_KEY)
  return (
        <Container sx={{
            // marginY: 5,
            textAlign: 'center',
            background: "cornflowerblue",
            height: "100vh",
            }}>
            <header className="App-header">
                <h1 className>IP Address Tutorial</h1>
                <div className="ip">
                    <p>Welcome to Find My IP Address</p>
                    <p>Kindly click here to find your IP Address</p>
                    <Link to="/user-ip"><button className="click">Find My IP</button></Link>
                </div>
            </header>
        </Container>
  );
}

export default App;
