import { useDispatch } from 'react-redux';
import { reqLoan } from '../store/actions';
import '../styles/components.css';

export default function ReqLoan({ ops, setOps }) {
  const dispatch = useDispatch();

  return (
    <div className="operation">
      <label>
        Request loan{' '}
        <input
          className="input-num"
          type="number"
          value={ops.amount}
          onChange={(e) =>
            setOps((s) => ({ ...s, amount: Number(e.target.value) }))
          }
        />
        <input
          className="input-text"
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
