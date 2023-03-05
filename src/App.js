import logo from './logo.svg';
import styles from "./App.module.css";
import Button from 'react-bootstrap/Button';
import NavBar from "./components/NavBar";

function App() {
  return (
    
    <div className={styles.App}>
      <NavBar />
      <header className="App-header">
        <h1>
        
        <Button variant="primary">Primary</Button>
        </h1>
      </header>
    </div>
  );
}

export default App;