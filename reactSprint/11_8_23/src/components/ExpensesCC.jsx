// TEMPORARY CHILD COMPONENT FOR 11/8/23 ASSIGNMENT
import { Component } from 'react';

class ExpensesCC extends Component {
  constructor(props) {
    super(props);
    this.handleExpensesChange = props.handleExpensesChange.bind(this);
  }

  render() {
    return (
      <label className="input-container">
        Enter your expenses:
        <input
          type="text"
          onChange={this.handleExpensesChange}
        />
      </label>
    );
  }
}

export default ExpensesCC;
