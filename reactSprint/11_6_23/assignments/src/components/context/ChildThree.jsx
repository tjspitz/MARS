// 11/9/23
import { useContext } from 'react';
import { UserContext } from './Parent';

const names = [
  'Alexander the Great',
  'Genghis Khan',
  'Napoleon Bonaparte',
  'Julius Caesar',
  'Hernán Cortés',
  'Attila the Hun',
  'William the Conqueror',
  'Pirate Blackbeard',
  'Pirate Bartholomew Roberts',
  'Pirate Anne Bonny',
  'Pirate Calico Jack',
  'Pirate Captain Kidd',
  "Pirate Grace O'Malley",
  'Pirate Henry Morgan',
  'Pirate Jean Lafitte',
];

const ChildThree = (props) => {
  const [user, setUser] = useContext(UserContext);

  const handleNameChange = (e) => {
    e.preventDefault();
    const idx = Math.floor(Math.random() * (15 - 1) + 1);
    setUser(names[idx]);
  };

  return (
    <div>
      <h4>Hello from Child Three...</h4>
      <p>And hello from {user}!</p>
      <button onClick={handleNameChange}>Change the user!</button>
    </div>
  );
};

export default ChildThree;
