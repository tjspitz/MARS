import { useState } from 'react';
import '../index.css';
import '../styles/Counter.css';

const Counter = () => {
  const [count, setCount] = useState(0);
  const handleIncrementClick = (e) => {
    e.preventDefault();
    setCount(count + 1);
  };

  return (
    <div className="counter content">
      Click the button to increment the number...
      <button
        className="btn"
        onClick={handleIncrementClick}
      >
        {count}
      </button>
      Super-magical!
      {count > 19 && (
        <p>Don't you have something better to do at this point?</p>
      )}
    </div>
  );
};

export default Counter;
