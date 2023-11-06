const CAMELIZE_KEY = (kebabKey) => {
  let regex = /-(.)/g;
  return kebabKey.replaceAll(regex, (match) => match[1].toUpperCase());
};

const MAKE_RECORD = () => {
  const NEW_RECORD = {};
  let inputs = [...document.querySelectorAll('input')];
  let selects = [...document.querySelectorAll('select')];
  let allEntries = [...inputs, ...selects];

  allEntries = allEntries.map((nodeLike) => {
    return {
      key: CAMELIZE_KEY(nodeLike.id),
      value: nodeLike.value,
    };
  });

  allEntries.forEach((entry) => {
    NEW_RECORD[entry.key] = entry.value;
  });

  console.log('new record is complete: ', NEW_RECORD);
};

const MAKE_STATE_OPTIONS = () => {
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

  return OPTION_TAGS.join('');
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

  return copyright + newText;
};

document.addEventListener('DOMContentLoaded', () => {
  const STATE_SELECT_TAG = document.querySelector('#state');
  const FOOTER = document.querySelector('footer');

  STATE_SELECT_TAG.innerHTML = MAKE_STATE_OPTIONS();
  FOOTER.innerHTML = MAKE_FOOTER();
});
