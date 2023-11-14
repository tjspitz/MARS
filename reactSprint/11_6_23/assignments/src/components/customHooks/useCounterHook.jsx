import { useState, useEffect } from 'react';

const useCounterHook = (initialState, component) => {
  const [counter, setCounter] = useState(initialState);

  const increment = () => {
    setCounter(counter + 1);
  };

  useEffect(() => {
    console.log(
      `The button of ${component} has been clicked ${counter} times...`
    );
  }, [counter, component]);

  return increment;
};

export default useCounterHook;
