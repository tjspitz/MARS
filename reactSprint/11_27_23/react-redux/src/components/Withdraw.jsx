import { useDispatch } from 'react-redux';
import { withdraw } from '../store/actions';
import { initialState } from '../App';
import '../styles/components.css';

export default function Withdraw({ ops, setOps }) {
  const dispatch = useDispatch();
  const handleClick = (e) => {
    e.preventDefault();
    setOps({ ...initialState });
    dispatch(withdraw(ops.withdraw));
  };

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
        onClick={handleClick}
      >
        WITHDRAW
      </button>
    </div>
  );
}
