// TEMPORARY PARENT COMPONENT FOR 11/8/23 ASSIGNMENT
import { Component } from 'react';
import './index.css';
import './styles/App.css';
import BudgetCC from './components/BudgetCC';
import ExpensesCC from './components/ExpensesCC';
import RemainingCC from './components/RemainingCC';

class AccountCC extends Component {
  constructor() {
    super();
    this.state = {
      budget: '',
      expenses: '',
      remaining: '',
    };
    this.handleBudgetChange = this.handleBudgetChange.bind(this);
    this.handleExpensesChange = this.handleExpensesChange.bind(this);
    this.setRemainingState = this.setRemainingState.bind(this);
  }

  handleBudgetChange(e) {
    e.preventDefault();
    this.setState(function (s) {
      return { ...s, budget: e.target.value };
    });
  }

  handleExpensesChange(e) {
    e.preventDefault();
    this.setState(function (s) {
      return { ...s, expenses: e.target.value };
    });
  }

  setRemainingState(result) {
    this.setState(function (s) {
      return { ...s, remaining: result };
    });
  }

  render() {
    const { budget, expenses, remaining } = this.state;
    return (
      <main className="app app-container">
        <img
          src="https://clipground.com/images/gold-dollar-sign-png-5.png"
          alt="a spinning dollar sign"
          className="app-logo"
        />
        <h2>My (fictitious) Account</h2>
        <div className="content">
          <BudgetCC
            budget={budget}
            handleBudgetChange={this.handleBudgetChange}
          />
          <ExpensesCC
            expenses={expenses}
            handleExpensesChange={this.handleExpensesChange}
          />
          <RemainingCC
            budget={budget}
            expenses={expenses}
            remaining={remaining}
            setRemainingState={this.setRemainingState}
          />
        </div>
      </main>
    );
  }
}

export default AccountCC;
