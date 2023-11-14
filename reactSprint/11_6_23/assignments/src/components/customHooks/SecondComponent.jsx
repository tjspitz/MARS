import useCounterHook from './useCounterHook';

const SecondComponent = () => {
  const clickBtnCounter = useCounterHook(0, 'SecondComponent');

  return (
    <div>
      <h1>This is Second Component</h1>
      <button onClick={clickBtnCounter}>Click Me!</button>
    </div>
  );
};

export default SecondComponent;
