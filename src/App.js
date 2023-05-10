import logo from './logo.svg';
import './App.css';
import Contactlist from './components/Vcardlist';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <Contactlist />
    </div>
  );
}

export default App;
