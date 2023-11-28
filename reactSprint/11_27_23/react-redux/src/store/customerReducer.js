const initialCustomerState = {
  fullName: '',
  id: '',
  createdAt: '',
};

export default function customerReducer(state = initialCustomerState, action) {
  switch (action.type) {
    case 'CREATE_CUSTOMER':
      return {
        ...state,
        fullName: action.payload.fullName,
        id: action.payload.id,
        createdAt: new Date(),
      };

      case 'UPDATE_NAME':
        return {
          ...state,
          fullName: action.payload,
        };

    default:
      return state;
  }
}
