// TEMPORARY CHILD COMPONENT FOR 11/8/23 ASSIGNMENT
const Expenses = ({ expenses, setExpenses }) => {
  const handleExpensesChange = (e) => {
    e.preventDefault();
    setExpenses(e.target.value);
  };

  return (
    <label className="input-container">
      Enter your expenses:
      <input
        type="text"
        onChange={handleExpensesChange}
      />
    </label>
  );
};

export default Expenses;
