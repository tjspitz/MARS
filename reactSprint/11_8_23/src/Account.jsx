// TEMPORARY PARENT COMPONENT FOR 11/8/23 ASSIGNMENT
import { useState } from 'react';
import './index.css';
import './styles/App.css';

import Budget from './components/Budget';
import Expenses from './components/Expenses';
import Remaining from './components/Remaining';

const Account = () => {
  const [budget, setBudget] = useState('');
  const [expenses, setExpenses] = useState('');
  const [remaining, setRemaining] = useState('');

  return (
    <main className="app app-container">
      <img src='https://clipground.com/images/gold-dollar-sign-png-5.png' alt='a spinning dollar sign' className='app-logo' />
      <h2>My (fictitious) Account</h2>
      <div className="content">
        <Budget
          budget={budget}
          setBudget={setBudget}
        />
        <Expenses
          expenses={expenses}
          setExpenses={setExpenses}
        />
        <Remaining
          budget={budget}
          expenses={expenses}
          remaining={remaining}
          setRemaining={setRemaining}
        />
      </div>
    </main>
  );
};

export default Account;
