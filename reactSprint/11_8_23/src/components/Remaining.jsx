// TEMPORARY CHILD COMPONENT FOR 11/8/23 ASSIGNMENT
const Remaining = ({ budget, expenses, remaining, setRemaining }) => {
  if (budget.length && expenses.length) {
    const result = Number(budget) - Number(expenses);

    if (result > -1) {
      setRemaining(String(result));
    } else {
      setRemaining(`You're in the red: ${result}`);
    }
  } else {
    setRemaining('');
  }

  return (
    <label className="input-container">
      Amount Remaining:
      <input
        type="text"
        disabled={true}
        value={remaining}
      />
    </label>
  );
};

export default Remaining;
