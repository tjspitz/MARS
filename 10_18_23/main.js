const theSecretNumber = 2;
let attemptsMade = 0;

const checkNumber = () => {
  const guess = Number(document.querySelector('#guess').value);

  attemptsMade ++;

  if (guess === theSecretNumber) {
    makeAnswer(true, attemptsMade);
  } else {
    makeAnswer(false, attemptsMade);
  }
};

const makeAnswer = (isCorrect, attempts) => {
  let targetDiv = document.querySelector('.ans');
  let message;

  if (isCorrect && attempts > 1) {
    message = `Congratulations! You guessed correctly with ${attempts} tries.`;
    attemptsMade = 0;
  } else if (isCorrect) {
    message = `Congratulations! You guessed correctly with ${attempts} try.`;
    attemptsMade = 0;
  } else {
    message = `Good guess, but not quite. Try number ${attempts + 1} will be the lucky one!`;
  }
  targetDiv.innerHTML = message;
};

document.addEventListener('DOMContentLoaded', () => {
  const makeFooter = () => {
    const footer = document.querySelector('footer');
    const months = [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December',
    ];
    const days = [
      'Sunday',
      'Monday',
      'Tuesday',
      'Wednesday',
      'Thursday',
      'Friday',
      'Saturday',
    ];
    const now = new Date();
    const day = days[now.getDay()]; // e.g. 'Monday'
    const month = months[now.getMonth()] // e.g. 'October'
    const date = now.getDate(); // e.g. 16
    const year = now.getFullYear() // e.g. 2023

    let copyright = footer.innerText;
    let newText = `${day}, ${month} ${date}, ${year} by Sandwichpants Steve`

    footer.innerText = copyright + newText;
  };

  makeFooter();
});