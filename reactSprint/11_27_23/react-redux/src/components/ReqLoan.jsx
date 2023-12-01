import { useDispatch } from 'react-redux';
import { reqLoan } from '../store/actions';
import { initialState } from '../App';
import '../styles/components.css';

export default function ReqLoan({ ops, setOps }) {
  const dispatch = useDispatch();
  const handleClick = (e) => {
    e.preventDefault();
    setOps({ ...initialState });
    dispatch(reqLoan(ops.amount, ops.purpose))
  };

  return (
    <div className="operation" data-testid="reqLoan">
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
          className="input-text-reqLoan"
          type="text"
          placeholder='e.g. "mortgage payment"'
          value={ops.purpose}
          onChange={(e) => setOps((s) => ({ ...s, purpose: e.target.value }))}
        />
      </label>
      <button
        className="btn"
        onClick={handleClick}
      >
        REQUEST LOAN
      </button>
    </div>
  );
}
