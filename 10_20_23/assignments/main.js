const MAKE_STATES = () => {
  const SELECT_TAG = document.querySelector('#state');
  const STATES = [
    ['al', 'Alabama'],
    ['ak', 'Alaska'],
    ['az', 'Arizona'],
    ['ar', 'Arkansas'],
    ['ca', 'California'],
    ['co', 'Colorado'],
    ['ct', 'Connecticut'],
    ['de', 'Delaware'],
    ['fl', 'Florida'],
    ['ga', 'Georgia'],
    ['hi', 'Hawaii'],
    ['id', 'Idaho'],
    ['il', 'Illinois'],
    ['in', 'Indiana'],
    ['ia', 'Iowa'],
    ['ks', 'Kansas'],
    ['ky', 'Kentucky'],
    ['la', 'Louisiana'],
    ['me', 'Maine'],
    ['md', 'Maryland'],
    ['ma', 'Massachusetts'],
    ['mi', 'Michigan'],
    ['mn', 'Minnesota'],
    ['ms', 'Mississippi'],
    ['mo', 'Missouri'],
    ['mt', 'Montana'],
    ['ne', 'Nebraska'],
    ['nv', 'Nevada'],
    ['nh', 'New Hampshire'],
    ['nj', 'New Jersey'],
    ['nm', 'New Mexico'],
    ['ny', 'New York'],
    ['nc', 'North Carolina'],
    ['nd', 'North Dakota'],
    ['oh', 'Ohio'],
    ['ok', 'Oklahoma'],
    ['or', 'Oregon'],
    ['pa', 'Pennsylvania'],
    ['ri', 'Rhode Island'],
    ['sc', 'South Carolina'],
    ['sd', 'South Dakota'],
    ['tn', 'Tennessee'],
    ['tx', 'Texas'],
    ['ut', 'Utah'],
    ['vt', 'Vermont'],
    ['va', 'Virginia'],
    ['wa', 'Washington'],
    ['wv', 'West Virginia'],
    ['wi', 'Wisconsin'],
    ['wy', 'Wyoming'],
  ];

  const BUILD_HTML = (statePair) => {
    return `<option value=${statePair[0]}>${statePair[1]}</option>`;
  };

  const OPTION_TAGS = STATES.map(BUILD_HTML);

  SELECT_TAG.innerHTML = OPTION_TAGS.join('');
};

const MAKE_FOOTER = () => {
  const FOOTER = document.querySelector('footer');
  const MONTHS = [
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
  const DAYS = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ];
  const NOW = new Date();
  const DAY = DAYS[NOW.getDay()]; // e.g. 'Monday'
  const MONTH = MONTHS[NOW.getMonth()] // e.g. 'October'
  const DATE = NOW.getDate(); // e.g. 16
  const YEAR = NOW.getFullYear() // e.g. 2023

  let copyright = FOOTER.innerHTML;
  let newText = `${DAY}, ${MONTH} ${DATE}, ${YEAR} by EDP Systems, Inc.`

  FOOTER.innerHTML = copyright + newText;
};

document.addEventListener('DOMContentLoaded', () => {
  MAKE_STATES();
  MAKE_FOOTER();
});