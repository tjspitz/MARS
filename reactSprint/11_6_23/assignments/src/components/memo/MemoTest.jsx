import { useMemo, useState } from 'react';

const MemoTest = (props) => {
  const [number, setNumber] = useState(0);
  const [counter, setCounter] = useState(0);
  const squaredNum = useMemo(() => numSquared(number), [number]);

  const numSquared = (num) => Math.pow(num, 2);

  const handleOnChange = (e) => {
    e.preventDefault();
    setNumber(e.target.value);
  };

  const handleCounter = () => {
    setCounter(counter + 1);
  };


};

export default MemoTest;
