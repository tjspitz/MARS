import { useState } from 'react';

const initialState = {
  sports: false,
  travel: false,
  music: false,
  reading: false,
};
const HobbyChoices = ({ hobbies, setHobbies }) => {
  const [checkboxes, setCheckboxes] = useState({ ...initialState });
  const choices = Object.keys(checkboxes);

  const handleToggleChoice = (e) => {
    const {
      target: { name },
    } = e;
    setCheckboxes((s) => {
      const newChecks = { ...s };
      newChecks[name] = !newChecks[name];
      return newChecks;
    });
    setHobbies((s) => {
      const newHobbies = { ...s };
      if (newHobbies[name]) {
        delete newHobbies[name];
      } else {
        newHobbies[name] = true;
      }
      return newHobbies;
    });
  };

  return (
    <div className="list">
      {choices.map((choice, i) => {
        return (
          <label
            className="capitalize input-container"
            key={`choice-${i}`}
          >
            {choice}:
            <input
              type="checkbox"
              name={choice}
              checked={checkboxes[choice]}
              onChange={handleToggleChoice}
            />
          </label>
        );
      })}
    </div>
  );
};

// const HobbyChoices = ({ hobbies, setHobbies }) => {
//   const [sports, setSports] = useState(false);
// const [travel, setTravel] = useState(false);
// const [music, setMusic] = useState(false);
// const [reading, setReading] = useState(false);

// const prevSports = useRef();
// const prevTravel = useRef();
// const prevMusic = useRef();
// const prevReading = useRef();

// useEffect(() => {
// prevSports.current = !sports;
// prevTravel.current = travel;
// prevMusic.current = music;
// prevReading.current = reading;
// }, [sports])

// const handleToggleSports = () => {
// e.preventDefault();
// setSports(!sports);
//   }

//   return (
//     <div className='list'>
//       <label className='capitalize input-container'>
//         Sports
//         <input type='checkbox' checked={sports} onChange={handleToggleSports} />
//       </label>
//     </div>
//   );
// };

export default HobbyChoices;
