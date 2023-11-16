import { useState } from 'react';
import Header from './components/Header';
import Form from './components/Form';
import Records from './components/Records';

const initialState = {
  curSavings: '',
  yrSavings: '',
  rate: '',
  duration: '',
};

const App = () => {
  const [form, setForm] = useState({ ...initialState });
  const [records, setRecords] = useState([]);

  return (
    <main className="app">
      <div className="app-container">
        <Header />
        <Form
          form={form}
          setForm={setForm}
          setRecords={setRecords}
        />
        <Records records={records} />
      </div>
    </main>
  );
};

export default App;
