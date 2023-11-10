import { useContext } from 'react';
import { ThemeContext } from '../Hobbies';

const HobbyCard = ({ hobby }) => {
  const theme = useContext(ThemeContext);

  return (
    <div className={`capitalize card${theme}`}>{hobby}</div>
  );
};

export default HobbyCard;
