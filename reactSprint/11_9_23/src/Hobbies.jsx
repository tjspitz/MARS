// TEMPORARY PARENT COMPONENT FOR 11/9/23 ASSIGNMENT
import { useState, createContext } from 'react';
import HobbyChoices from './components/HobbyChoices';
import HobbyCard from './components/HobbyCard';

export const ThemeContext = createContext('');

const Hobbies = () => {
  const [hobbies, setHobbies] = useState({});
  const [theme, setTheme] = useState('');
  const hobbyNames = Object.keys(hobbies);
  const noHobbies = <h3>I have no hobbies yet...</h3>;
  const hasHobbies = <h3>My hobbies are:</h3>;

  const handleThemeToggle = () => (
    theme.length ? setTheme('') : setTheme('-light'));

  return (
    <main className="app">
      <ThemeContext.Provider value={theme}>
        <div className={`app-container${theme}`}>
          <button
            className={`btn btn${theme}`}
            onClick={handleThemeToggle}
          >
            Switch to {theme.length ? 'dark' : 'light'} mode
          </button>
          <div className={`content${theme}`}>
            {hobbyNames.length ? hasHobbies : noHobbies}
            <div className={`card-container`}>
              {hobbyNames.length ? (
                hobbyNames.map((hobby, i) => {
                  return (
                    <HobbyCard
                      key={`hobby-${i}`}
                      hobby={hobby}
                    />
                  );
                })
              ) : (
                <p>Click a hobby to add it...</p>
              )}
            </div>
            <HobbyChoices
              hobbies={hobbies}
              setHobbies={setHobbies}
            />
          </div>
        </div>
      </ThemeContext.Provider>
    </main>
  );
};

export default Hobbies;
