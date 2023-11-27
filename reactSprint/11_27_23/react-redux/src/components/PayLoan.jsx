import { useSelector, useDispatch } from 'react-redux';
import { payLoan } from '../store/actions';

export default function PayLoan({ ops, setOps }) {
  const loanStateValue = useSelector((state) => state.loan);
  const dispatch = useDispatch();

  return (
    <div className="operation">
      Repay loan (${loanStateValue})
      <button
        className="btn"
        onClick={() => dispatch(payLoan())}
      >
        PAY LOAN
      </button>
    </div>
  );
}
