const initialBankState = {
  balance: 0,
  loan: 0,
  purpose: '',
};

export default function bankReducer(state = initialBankState, action) {
  switch (action.type) {
    case 'DEPOSIT':
      return { ...state, balance: state.balance + action.payload };

    case 'WITHDRAW':
      return { ...state, balance: state.balance - action.payload };

    case 'REQUEST_LOAN':
      if (state.loan > 0) {
        return state;
      } else {
        return {
          ...state,
          loan: action.payload.amount,
          purpose: action.payload.purpose,
          balance: state.balance + action.payload.amount,
        };
      }

    case 'PAY_LOAN':
      return {
        ...state,
        loan: 0,
        purpose: '',
        balance: state.balance - state.loan,
      };

    default:
      return state;
  }
}
