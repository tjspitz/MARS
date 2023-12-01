import { useSelector } from 'react-redux';
import '../styles/components.css';

export default function Status() {
  const stateValues = useSelector((state) => state.bankReducer);

  return (
    <div className="account" data-testid="status">
      Your account status is currently:
      <p>Balance: ${stateValues.balance}</p>
      <p>Loan amount: ${stateValues.loan}</p>
      {stateValues.purpose.length ? (
        <p>Loan memo: {stateValues.purpose}</p>
      ) : null}
    </div>
  );
}
