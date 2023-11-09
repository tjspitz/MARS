import { useState } from 'react';
import { createContext } from 'react';
import ChildOne from './ChildOne';
import '../../index.css';
import '../../styles/App.css';

export const UserContext = createContext();
const Parent = () => {
  const [user, setUser] = useState('Billy Bob Bobberson');

  return (
    <div className='app app-container'>
      <h1>Hello from Parent...</h1>
      <UserContext.Provider value={[user, setUser]}>
        <ChildOne />
      </UserContext.Provider>
    </div>
  );
};

export default Parent;
