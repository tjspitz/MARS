import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deposit, withdraw, reqLoan, payLoan } from './redux/actions';
// import './styles/App.css';

/*
 * stateValues init:
 *   {
 *      balance: 0,
 *      loan: 0,
 *      purpose: '',
 *   }
 */

const initialState = {
  deposit: 0,
  withdraw: 0,
  amount: 0,
  purpose: '',
};

function App() {
  const stateValues = useSelector((state) => state);
  const dispatch = useDispatch();

  const [ops, setOps] = useState({ ...initialState });

  return (
    <main className="app-container">
      <h2>Your account operations</h2>
      <div className="operations">
        <div className="operation">
          <label>
            Deposit{' '}
            <input
              id="deposit-amt"
              type="number"
              value={ops.deposit}
              onChange={(e) =>
                setOps((s) => ({ ...s, deposit: Number(e.target.value) }))
              }
            />
          </label>
          <button
            className="btn"
            onClick={() => dispatch(deposit(ops.deposit))}
          >
            DEPOSIT
          </button>
        </div>
        <div className="operation">
          <label>
            Withdraw{' '}
            <input
              id="withdraw-amt"
              type="number"
              value={ops.withdraw}
              onChange={(e) =>
                setOps((s) => ({ ...s, withdraw: Number(e.target.value) }))
              }
            />
          </label>
          <button
            className="btn"
            onClick={() => dispatch(withdraw(ops.withdraw))}
          >
            WITHDRAW
          </button>
        </div>
        <div className="operation">
          <label>
            Request loan{' '}
            <input
              id="loan-amt"
              type="number"
              value={ops.amount}
              onChange={(e) =>
                setOps((s) => ({ ...s, amount: Number(e.target.value) }))
              }
            />
            <input
              id="loan-purpose"
              type="text"
              placeholder='e.g. "mortgage payment"'
              value={ops.purpose}
              onChange={(e) =>
                setOps((s) => ({ ...s, purpose: e.target.value }))
              }
            />
          </label>
          <button
            className="btn"
            onClick={() => dispatch(reqLoan(ops.amount, ops.purpose))}
          >
            REQUEST LOAN
          </button>
        </div>
        <div className="operation">
          Repay loan (${ops.loan})
          <button
            className="btn"
            onClick={() => dispatch(payLoan())}
          >
            PAY LOAN
          </button>
        </div>
      </div>
      <p className="account">
        Your account status is currently:
        <p>Balance: ${stateValues.balance}</p>
        <p>Loan amount: ${stateValues.loan}</p>
        {stateValues.purpose.length ? (
          <p>Loan memo: {stateValues.purpose}</p>
        ) : null}
      </p>
    </main>
  );
}

export default App;
