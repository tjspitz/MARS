import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
// import TempMainComponent from './TempMainComponent';
// import AccountCC from './AccountCC';
// import Parent from './components/context/Parent';
// import CounterTwo from './components/ref/CounterTwo';
// import InputRef from './components/ref/InputRef';
// import RefPrevCurrent from './components/ref/RefPrevCurrent';
import Hobbies from './Hobbies';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <Context /> */}
    {/* <TempMainComponent /> */}
    {/* <AccountCC /> */}
    {/* <Parent /> */}
    {/* <CounterTwo /> */}
    {/* <InputRef /> */}
    {/* <RefPrevCurrent /> */}
    <Hobbies />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
