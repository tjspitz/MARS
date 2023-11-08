// TEMPORARY CHILD COMPONENT FOR 11/8/23 ASSIGNMENT
const Budget = ({ budget, setBudget }) => {
  const handleBudgetChange = (e) => {
    e.preventDefault();
    setBudget(e.target.value);
  };

  return (
    <label className="input-container">
      Enter your budget:
      <input
        type="text"
        onChange={handleBudgetChange}
      />
    </label>
  );
};

export default Budget;
