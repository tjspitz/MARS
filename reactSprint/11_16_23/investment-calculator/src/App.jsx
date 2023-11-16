import { useState } from 'react';
import Header from './components/Header';
import Form from './components/Form';
import Records from './components/Records';
import './styles/App.css';

const initialFormState = {
  curSavings: '',
  yrSavings: '',
  rate: '',
  duration: '',
};

const App = () => {
  const [form, setForm] = useState({ ...initialFormState });
  const [records, setRecords] = useState([]);

  return (
    <main className="app">
      <div className="app-container">
        <Header />
        <Form
          form={form}
          setForm={setForm}
          initialFormState={initialFormState}
          setRecords={setRecords}
        />
        <Records records={records} />
      </div>
    </main>
  );
};

export default App;
