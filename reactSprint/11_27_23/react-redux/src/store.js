// store => application data
// reducer => update the store
// action => dispatched to reducer along w/ state
// action creators => create the action(s)

/*
import { createStore } from 'redux';

const initialState = {
  balance: 0,
  loan: 0,
  purpose: '',
};

function bankReducer(state = initialState, action) {
  // convention = writing w/ switch-case (?)
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

// dispatch examples
const store = createStore(bankReducer);

// direct dispatch
// store.dispatch({
//   type: 'DEPOSIT',
//   payload: 500,
// });

// deposit creator
function deposit(amount) {
  return {
    type: 'DEPOSIT',
    payload: amount,
  };
}
store.dispatch(deposit(800));
console.log('state after deposit: ', store.getState());

// direct dispatch
// store.dispatch({
  //   type: 'WITHDRAW',
  //   payload: 200,
  // });

  // withdrawl creator
function withdraw(amount) {
  return {
    type: 'WITHDRAW',
    payload: amount,
  };
}
store.dispatch(withdraw(200));
console.log('state after withdrawl: ', store.getState());

// direct dispatch
// store.dispatch({
//   type: 'REQUEST_LOAN',
//   payload: { amount: 1000, purpose: 'buy car' },
// });

// loan request creator
function reqLoan(amount, purpose = '') {
  return {
    type: 'REQUEST_LOAN',
    payload: { amount, purpose },
  };
}
store.dispatch(reqLoan(1000, 'buy a car'));
console.log('state after loan request: ', store.getState());


// direct dispatch
// store.dispatch({
//   type: 'PAY_LOAN',
// });

// loan payment creator
function payLoan() {
  return {
    type: 'PAY_LOAN',
  };
}
store.dispatch(payLoan());
console.log('state after loan payment: ', store.getState());
*/
