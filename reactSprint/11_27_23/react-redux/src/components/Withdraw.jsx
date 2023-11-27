import { useDispatch } from 'react-redux';
import { withdraw } from '../store/actions';

export default function Withdraw({ ops, setOps }) {
  const dispatch = useDispatch();

  return (
    <div className="operation">
      <label>
        Withdraw{' '}
        <input
          id="withdraw-amt"
          type="number"
          value={ops.withdraw}
          onChange={(e) =>
            setOps((s) => ({ ...s, withdraw: Number(e.target.value) }))
          }
        />
      </label>
      <button
        className="btn"
        onClick={() => dispatch(withdraw(ops.withdraw))}
      >
        WITHDRAW
      </button>
    </div>
  );
}
