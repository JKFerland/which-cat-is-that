import logo from './logo.svg';
import './App.css';
import Navbar from "react-bootstrap/Navbar";
import Container from 'react-bootstrap/Container';
import Routes from "./Routes";

function App() {
  return (
    <div className="App py-3 container-fullwidth">
      <Navbar>
        <div className="navbar-header">
          <Navbar.Brand href="#home">🐈 Which cat is that?</Navbar.Brand>
          <hr />
        </div>
      </Navbar>
      <Routes />
    </div>
  );
}

export default App;
