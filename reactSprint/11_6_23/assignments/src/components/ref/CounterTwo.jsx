import { useState, useEffect, useRef } from 'react';

const CounterTwo = () => {
  const [val, setVal] = useState('');
  const count = useRef(0);

  useEffect(() => {
    count.current = count.current + 1;
  });

  const handleValChange = (e) => {
    e.preventDefault();
    setVal(e.target.value);
  };

  return (
    <div>
      <h3>Render Count: {count.current}</h3>
      <input
        type="text"
        value={val}
        onChange={handleValChange}
      />
    </div>
  );
};

export default CounterTwo;
