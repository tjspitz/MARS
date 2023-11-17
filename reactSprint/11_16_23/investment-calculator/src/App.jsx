import { useState } from 'react';
import Header from './components/Header';
import Form from './components/Form';
import Records from './components/Records';
import './styles/App.css';

const App = () => {
  const [records, setRecords] = useState([]);

  const calculate = (firstRecord) => {
    setRecords(buildRecords(firstRecord, []));
  };

  return (
    <main className="app">
      <div className="app-container">
        <Header />
        <Form calculate={calculate} />
        <Records records={records} />
      </div>
    </main>
  );
};

export default App;

function buildRecords(prevRecord, records) {
  const { duration, yrSavings, totalInterest, rate, total } = prevRecord;

  if (!duration) {
    return records;
  }

  const thisYearInterest = (total + yrSavings) * (rate / 100);
  const thisYearTotalInterest = totalInterest + thisYearInterest;
  const thisYearTotal = (total + yrSavings) * (1 + rate / 100);

  const thisYear = {
    duration: duration - 1,
    curSavings: total, // 'total savings' TD
    yrSavings,
    yrInterest: thisYearInterest, // ''annual interest' TD
    totalInterest: thisYearTotalInterest, // 'total interest' TD
    rate,
    total: thisYearTotal, // 'invested capital' TD
  };

  return buildRecords(thisYear, [...records, prevRecord]);
}
