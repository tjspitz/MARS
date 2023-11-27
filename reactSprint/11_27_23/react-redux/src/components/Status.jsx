import { useSelector } from 'react-redux';

export default function Status() {
  const stateValues = useSelector((state) => state);

  return (
    <p className="account">
      Your account status is currently:
      <p>Balance: ${stateValues.balance}</p>
      <p>Loan amount: ${stateValues.loan}</p>
      {stateValues.purpose.length ? (
        <p>Loan memo: {stateValues.purpose}</p>
      ) : null}
    </p>
  );
}
