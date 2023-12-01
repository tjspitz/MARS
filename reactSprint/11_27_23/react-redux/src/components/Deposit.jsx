import { useDispatch } from 'react-redux';
import { deposit } from '../store/actions';
import { initialState } from '../App';
import '../styles/components.css';

export default function Deposit({ ops, setOps }) {
  const dispatch = useDispatch();
  const handleClick = (e) => {
    e.preventDefault();
    dispatch(deposit(ops.deposit));
    setOps({ ...initialState });
  };

  return (
    <div className="operation" data-testid="deposit">
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
        onClick={handleClick}
      >
        DEPOSIT
      </button>
    </div>
  );
}
