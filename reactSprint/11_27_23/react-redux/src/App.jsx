import { useState } from 'react';
import Deposit from './components/Deposit';
import Withdraw from './components/Withdraw';
import ReqLoan from './components/ReqLoan';
import PayLoan from './components/PayLoan';
import Status from './components/Status';
import './styles/App.css';

export const initialState = {
  deposit: 0,
  withdraw: 0,
  amount: 0,
  purpose: '',
};

export default function App() {
  const [ops, setOps] = useState({ ...initialState });

  return (
    <main className="app-container">
      <h2>Your account operations</h2>
      <div className="operations">
        <Deposit ops={ops} setOps={setOps} />
        <Withdraw ops={ops} setOps={setOps} />
        <ReqLoan ops={ops} setOps={setOps} />
        <PayLoan ops={ops} setOps={setOps} />
      </div>
      <Status />
    </main>
  );
}
