const btnYes = '#37bc37';
const btnNo = '#efefef';
let countSpaces = false;
let countNums = false;
let countSymbols = false;
let countCases = false;

const setSpaces = () => {
  let thisOption = document.querySelector('#count-spaces');
  countSpaces = !countSpaces;

  if (countSpaces) {
    thisOption.style = `background-color: ${btnYes};`;
  } else {
    thisOption.style = `background-color: ${btnNo};`;
  }
};

const setNums = () => {
  let thisOption = document.querySelector('#count-nums');
  countNums = !countNums;

  if (countNums) {
    thisOption.style = `background-color: ${btnYes};`;
  } else {
    thisOption.style = `background-color: ${btnNo};`;
  }
};

const setSymbols = () => {
  let thisOption = document.querySelector('#count-symbols');
  countSymbols = !countSymbols;

  if (countSymbols) {
    thisOption.style = `background-color: ${btnYes};`;
  } else {
    thisOption.style = `background-color: ${btnNo};`;
  }
};

const setCases = () => {
  let thisOption = document.querySelector('#count-cases');
  countCases = !countCases;

  if (countCases) {
    thisOption.style = `background-color: ${btnYes};`;
  } else {
    thisOption.style = `background-color: ${btnNo};`;
  }
};

const resetOptions = () => {
  if (countSpaces) {
    setSpaces();
  }
  if (countNums) {
    setNums();
  }
  if (countSymbols) {
    setSymbols();
  }
  if (countCases) {
    setCases();
  }
};

const getCharType = (charCode) => {
  if (charCode === 32) {
    return 'space';
  } else if (charCode > 47 && charCode < 58) {
    return 'num';
  } else if (
    charCode > 64 && charCode < 91 ||
    charCode > 96 && charCode < 123
    ) {
      return 'char';
  } else {
    return 'symbol';
  }
};

const formatChar = (type) => {
  if (countSpaces && type === 'space') {
    return 'SPACE';
  } else if (countNums && type === 'num') {
    return 'NUM_';
  } else if (countSymbols && type === 'symbol') {
    return 'SYMBOL_';
  } else {
    return undefined;
  }
};

const measureMessage = (message) => {
  const charCount = {};

  if (countCases) {
    message = message.toLowerCase();
  }

  for (let i = 0; i < message.length; i ++) {
    let currentChar = message[i];
    let curCharCode = currentChar.charCodeAt(0);
    let curCharType = getCharType(curCharCode);

    if (curCharType !== 'char') {
      currentChar = formatChar(curCharType) + currentChar;
    }

    if (!currentChar) {
      continue;
    }

    if (charCount[currentChar]) {
      charCount[currentChar] ++;
    } else {
      charCount[currentChar] = 1;
    }
  }
  return charCount;
};

const renderMessage = () => {
  const msg = document.querySelector('#msg').value;
  const ans = document.querySelector('.ans');
  const chars = measureMessage(msg);
  let charCountHTML = "<ul>";

  for (const char in chars) {
    let currHTML = `<li>${char}: ${chars[char]}</li>`;
    charCountHTML += currHTML;
  }

  charCountHTML += "</ul>"
  ans.innerHTML = "Your message contains the following characters:"
  ans.innerHTML += charCountHTML;
  resetOptions();
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