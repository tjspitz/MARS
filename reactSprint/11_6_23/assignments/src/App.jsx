import logo from './logo.svg';
import './index.css';
import './styles/App.css';
import Counter from './components/Counter';
import ClassComponent from './components/ClassComponent';
import { useState } from 'react';

const App = () => {
  const [seeClassComponent, setSeeClassComponent] = useState(false);
  const [seeCounter, setSeeCounter] = useState(false);
  const [seeTodos, setSeeTodos] = useState(false);

  return (
    <div className="app">
      <main className="app-container">
        <div className="content">
          <img
            src={logo}
            className="app-logo"
            alt="logo"
          />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <p>Unless of course you know how to edit your scripts...</p>
          <div className="btn-list">
            <button
              className="btn"
              onClick={() => setSeeCounter(!seeCounter)}
            >
              Click me to see a counter!
            </button>
            <button
              className="btn"
              onClick={() => setSeeClassComponent(!seeClassComponent)}
            >
              Click me to see a class component!
            </button>
            <button
              className="btn"
              onClick={() => setSeeTodos(!seeTodos)}
            >
              Click me to see a to-do list!
            </button>
          </div>
        </div>
        {seeCounter && <Counter />}
        {seeClassComponent && <ClassComponent dummyProp="Skagway, AK" />}
        {}
      </main>
    </div>
  );
};

export default App;
