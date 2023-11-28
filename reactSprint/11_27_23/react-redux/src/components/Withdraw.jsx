import { useDispatch } from 'react-redux';
import { withdraw } from '../store/actions';
import '../styles/components.css';

export default function Withdraw({ ops, setOps }) {
  const dispatch = useDispatch();

  return (
    <div className="operation">
      <label>
        Withdraw{' '}
        <input
          className="input-num"
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
