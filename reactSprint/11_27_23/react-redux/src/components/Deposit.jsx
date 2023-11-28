import { useDispatch } from 'react-redux';
import { deposit } from '../store/actions';
import '../styles/components.css';

export default function Deposit({ ops, setOps }) {
  const dispatch = useDispatch();

  return (
    <div className="operation">
      <label>
        Deposit{' '}
        <input
          className="input-num"
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
