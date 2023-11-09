import { useRef } from 'react';
import '../../index.css';
import '../../styles/App.css';

const InputRef = () => {
  const inputElement = useRef();
  const handleClick = (e) => {
    e.preventDefault();
    inputElement.current.focus();
  };

  return (
    <div className="app app-container">
      <input
        type="text"
        ref={inputElement}
      />
      <button onClick={handleClick}>Focus the input area!</button>
    </div>
  );
};

export default InputRef;
