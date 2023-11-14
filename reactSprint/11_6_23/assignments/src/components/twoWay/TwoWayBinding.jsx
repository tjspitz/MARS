import { useState } from 'react';

const TwoWayBinding = () => {
  const [name, setName] = useState('');

  const handleInputChange = (e) => {
    e.preventDefault();
    setName(e.target.value);
  };

  return (
    <main className="app app-container">
      <div className="content">
        <input
          type="text"
          placeholder="enter name..."
          onChange={handleInputChange}
          value={name}
          className='input'
        />
        <h2>Name is currently: {name}</h2>
      </div>
    </main>
  );
};

export default TwoWayBinding;
