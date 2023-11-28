export function deposit(amount) {
  return {
    type: 'DEPOSIT',
    payload: amount,
  };
}

export function withdraw(amount) {
  return {
    type: 'WITHDRAW',
    payload: amount,
  };
}

export function reqLoan(amount, purpose = '') {
  return {
    type: 'REQUEST_LOAN',
    payload: { amount, purpose },
  };
}

export function payLoan() {
  return {
    type: 'PAY_LOAN',
  };
}

export function createCustomer(name, id) {
  return {
    type: 'CREATE_CUSTOMER',
    payload: { name, id },
  };
}

export function updateName(name) {
  return {
    type: 'UPDATE_NAME',
    payload: name,
  };
}
