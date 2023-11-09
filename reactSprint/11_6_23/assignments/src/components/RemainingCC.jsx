// TEMPORARY CHILD COMPONENT FOR 11/8/23 ASSIGNMENT
import { Component } from 'react';

class RemainingCC extends Component {
  constructor(props) {
    super(props);
    this.state = { negative: false };
    this.setRemainingState = props.setRemainingState.bind(this);
  }

  componentDidUpdate(prevProps) {
    const { budget, expenses, setRemainingState } = this.props;
    const { budget: prevBudget, expenses: prevExpenses } = prevProps;

    if (budget !== prevBudget || expenses !== prevExpenses) {
      if (budget.length && expenses.length) {
        const result = Number(budget) - Number(expenses);
        if (result > -1) {
          setRemainingState(String(result));
          this.setState({ negative: false });
        } else if (result > -10000000) {
          setRemainingState(`You're in the red: ${result}`);
          this.setState({ negative: true });
        } else {
          setRemainingState(`Consider filing for bakruptcy...`);
          this.setState({ negative: true });
        }
      } else {
        setRemainingState('');
      }
    }
  }

  render() {
    return (
      <label className="input-container">
        Amount Remaining:
        <input
          type="text"
          disabled={true}
          value={this.props.remaining}
          className={this.state.negative ? 'negative' : null}
        />
      </label>
    );
  }
}

export default RemainingCC;
