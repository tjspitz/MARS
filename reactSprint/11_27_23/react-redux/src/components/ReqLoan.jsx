import { useDispatch } from 'react-redux';
import { reqLoan } from '../store/actions';

export default function ReqLoan({ ops, setOps }) {
  const dispatch = useDispatch();

  return (
    <div className="operation">
      <label>
        Request loan{' '}
        <input
          id="loan-amt"
          type="number"
          value={ops.amount}
          onChange={(e) =>
            setOps((s) => ({ ...s, amount: Number(e.target.value) }))
          }
        />
        <input
          id="loan-purpose"
          type="text"
          placeholder='e.g. "mortgage payment"'
          value={ops.purpose}
          onChange={(e) => setOps((s) => ({ ...s, purpose: e.target.value }))}
        />
      </label>
      <button
        className="btn"
        onClick={() => dispatch(reqLoan(ops.amount, ops.purpose))}
      >
        REQUEST LOAN
      </button>
    </div>
  );
}
