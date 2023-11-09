// TEMPORARY CHILD COMPONENT FOR 11/8/23 ASSIGNMENT
import { Component } from 'react';

class BudgetCC extends Component {
  constructor(props) {
    super(props);
    this.handleBudgetChange = props.handleBudgetChange.bind(this);
  }

  render() {
    return (
      <label className="input-container">
        Enter your budget:
        <input
          type="text"
          onChange={this.handleBudgetChange}
        />
      </label>
    );
  }
}

export default BudgetCC;
