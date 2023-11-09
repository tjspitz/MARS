import { useEffect, useRef, useState } from 'react';
import '../../index.css';
import '../../styles/App.css';

const RefPrevCurrent = () => {
  const [val, setVal] = useState('');
  const prevRefVal = useRef('');

  useEffect(() => {
    prevRefVal.current = val;
  });

  return (
    <div className="app app-container">
      <input
        type="text"
        value={val}
        onChange={(e) => setVal(e.target.value)}
      />
      <p>Current value: {val}</p>
      <p>Previous value: {prevRefVal.current}</p>
    </div>
  );
};

export default RefPrevCurrent;
