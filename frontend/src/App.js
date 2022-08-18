import logo from './logo.svg';
import './App.css';
import Navbar from "react-bootstrap/Navbar";
import Container from 'react-bootstrap/Container';
import Routes from "./Routes";

function App() {
  return (
    <div className="App">
      <Navbar>
        <div className="navbar-header">
          <Navbar.Brand href="#home" className="text-white">🐈 Which cat is that?</Navbar.Brand>
          <hr className="hr" />
        </div>
      </Navbar>
      <Routes />
    </div>
  );
}

export default App;
