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

const additionAns = () => {
  const input1 = document.querySelector('.addition.problem > input:nth-child(1)');
  const input2 = document.querySelector('.addition.problem > input:nth-child(2)');
  const ans = document.querySelector('.addition.problem .ans');

  console.log('input1: ', input1);
  console.log('input1.value: ', input1.value);

  ans.innerText = Number(input1.value) + Number(input2.value) + ' 🥪';
};

const subtractionAns = () => {
  const input1 = document.querySelector('.subtraction.problem > input:nth-child(1)');
  const input2 = document.querySelector('.subtraction.problem > input:nth-child(2)');
  const ans = document.querySelector('.subtraction.problem .ans');

  ans.innerText = Number(input1.value) - Number(input2.value)  + ' 🥪';
};

const multiplicationAns = () => {
  const input1 = document.querySelector('.multiplication.problem > input:nth-child(1)');
  const input2 = document.querySelector('.multiplication.problem > input:nth-child(2)');
  const ans = document.querySelector('.multiplication.problem .ans');

  ans.innerText = Number(input1.value) * Number(input2.value)  + ' 🥪';
};

const exponentAns = () => {
  const input1 = document.querySelector('.exponent.problem > input:nth-child(1)');
  const input2 = document.querySelector('.exponent.problem > input:nth-child(2)');
  const ans = document.querySelector('.exponent.problem .ans');

  ans.innerText = Number(input1.value) ** Number(input2.value)  + ' 🥪';
};