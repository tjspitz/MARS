import { useDispatch } from 'react-redux';
import { deposit } from '../store/actions';

export default function Deposit({ ops, setOps }) {
  const dispatch = useDispatch();

  return (
    <div className="operation">
      <label>
        Deposit{' '}
        <input
          id="deposit-amt"
          type="number"
          value={ops.deposit}
          onChange={(e) =>
            setOps((s) => ({ ...s, deposit: Number(e.target.value) }))
          }
        />
      </label>
      <button
        className="btn"
        onClick={() => dispatch(deposit(ops.deposit))}
      >
        DEPOSIT
      </button>
    </div>
  );
}
