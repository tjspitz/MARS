import logo from './logo.svg';
import './styles/App.css';
import { useSelector, useDispatch } from 'react-redux';


function App() {
  const stateValues = useSelector((state) => state);
  const dispatch = useDispatch();

  // onClick={() => dispatch(deposit(<amount>))}

  return (
    <div className="App">
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
