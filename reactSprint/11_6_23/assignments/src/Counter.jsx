import { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);
  const handleIncrementClick = (e) => {
    e.preventDefault();
    setCount(count + 1);
  };

  return (
    <div className='counterContainer'>
        Click the button to increment the number...
        <button onClick={handleIncrementClick}>{count}</button>
        Super-magical!
        {count > 19 && (
          <p>
            Don't you have something better to do at this point?
          </p>
        )}
    </div>
  );
};

export default Counter;
