import { useSelector, useDispatch } from 'react-redux';
import { payLoan } from '../store/actions';
import { initialState } from '../App';
import '../styles/components.css';

export default function PayLoan({ ops, setOps }) {
  const loanStateValue = useSelector((state) => state.loan);
  const dispatch = useDispatch();
  const handleClick = (e) => {
    e.preventDefault();
    setOps({ ...initialState });
    dispatch(payLoan())
  };

  return (
    <div className="operation" data-testid="payLoan">
      Repay loan (${loanStateValue})
      <button
        className="btn"
        onClick={handleClick}
      >
        PAY LOAN
      </button>
    </div>
  );
}
