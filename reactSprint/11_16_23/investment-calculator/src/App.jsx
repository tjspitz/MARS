import { useState } from 'react';
import Header from './components/Header';
import Form from './components/Form';
import Records from './components/Records';
import './styles/App.css';

const App = () => {
  const [records, setRecords] = useState([]);

  return (
    <main className="app">
      <div className="app-container">
        <Header />
        <Form
          setRecords={setRecords}
        />
        <Records records={records} />
      </div>
    </main>
  );
};

export default App;
