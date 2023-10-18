const measureMessage = () => {
  const msg = document.querySelector('#msg').value;
  const ans = document.querySelector('.ans');
  const charCount = {};
  let charCountHTML = "<ul>";

  for (let i = 0; i < msg.length; i ++) {
    let currentChar = msg[i];

    if (currentChar === ' ') {
      continue;
    }

    if (charCount[currentChar]) {
      charCount[currentChar] ++;
    } else {
      charCount[currentChar] = 1;
    }
  }

  for (const char in charCount) {
    let currHTML = `<li>${char}: ${charCount[char]}</li>`;
    charCountHTML += currHTML;
  }

  charCountHTML += "</ul>"
  ans.innerHTML += charCountHTML;
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
    let newText = `${day}, ${month} ${date}, ${year} by Stringypants Steve`

    footer.innerText = copyright + newText;
  };

  makeFooter();
});