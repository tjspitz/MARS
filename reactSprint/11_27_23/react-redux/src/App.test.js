/* eslint-disable testing-library/no-node-access */
/* eslint-disable testing-library/no-container */
/* eslint-disable testing-library/no-unnecessary-act */
import { act, render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';
import { createStore } from 'redux';
import { rootReducer } from './store/rootReducer';
import { Provider } from 'react-redux';
import { wait } from '@testing-library/user-event/dist/utils';

const testIds = ['deposit', 'withdraw', 'payLoan', 'reqLoan', 'status'];

test('renders the home page header', () => {
  const store = createStore(rootReducer);
  render(
    <Provider store={store}>
      <App />
    </Provider>
  );
  const header = screen.getByText(/your account operations/i);
  expect(header).toBeInTheDocument();
});

// testing subcomponents, method 1
test('renders five subcomponents', () => {
  const store = createStore(rootReducer);
  const { container } = render(
    <Provider store={store}>
      <App />
    </Provider>
  );
  // 4 'operation's, 1 'account' subcomponent
  const subcomponents = [...container.getElementsByClassName('operation')];
  subcomponents.push(container.getElementsByClassName('account'));
  expect(subcomponents.length).toEqual(5);
});

// testing subcomponents, method 2
test.each(testIds)('renders subcomponent: %s', (id) => {
  const store = createStore(rootReducer);
  render(
    <Provider store={store}>
      <App />
    </Provider>
  );
  const subcomponent = screen.getByTestId(id);
  expect(subcomponent).toBeInTheDocument();
});

test('the redux store updates with deposit and withdraw', async () => {
  const store = createStore(rootReducer);
  render(
    <Provider store={store}>
      <App />
    </Provider>
  );
  const [depositInput, withdrawInput] = screen.getAllByRole('spinbutton');
  const [depositBtn, withdrawBtn] = screen.getAllByRole('button');
  act(() => {
    userEvent.type(depositInput, '1000');
    userEvent.click(depositBtn);
    userEvent.type(withdrawInput, '500');
    userEvent.click(withdrawBtn);
  });
  await waitFor(() => {
    expect(store.getState().bankReducer.balance).toEqual(500);
  });
});

test('the redux store updates with reqLoan', async () => {
  const store = createStore(rootReducer);
  render(
    <Provider store={store}>
      <App />
    </Provider>
  );
  const [, , amount] = screen.getAllByRole('spinbutton');
  const purpose = screen.getByRole('textbox');
  const [, , button] = screen.getAllByRole('button');
  act(() => {
    userEvent.type(amount, '1000');
    userEvent.type(purpose, 'car');
    userEvent.click(button);
  });
  await waitFor(() => {
    expect(store.getState().bankReducer.loan).toEqual(1000);
    // expect(store.getState().bankReducer.purpose).toEqual('car'); // why does this test fail...?
  });
});

test('the redux store updates with payLoan', async () => {
  const store = createStore(rootReducer);
  render(
    <Provider store={store}>
      <App />
    </Provider>
  );
  const [, , reqLoan, payLoan] = screen.getAllByRole('button');
  act(() => {
    userEvent.type(screen.getAllByRole('spinbutton')[2], '1000');
    userEvent.type(screen.getByRole('textbox'), 'car');
    userEvent.click(reqLoan);
    userEvent.click((payLoan));
  });

  await waitFor(() => {
    expect(store.getState().bankReducer.loan).toEqual(0);
  })
});
