import useCounterHook from "./useCounterHook";

const FirstComponent = () => {
  const clickBtnCounter = useCounterHook(0, 'FirstComponent');

  return (
    <div>
      <h1>This is First Component</h1>
      <button onClick={clickBtnCounter}>Click Me!</button>
    </div>
  );
};

export default FirstComponent;
