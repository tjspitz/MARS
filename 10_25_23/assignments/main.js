const CAMELIZE_KEY = (kebabKey) => {
  let regex = /-(.)/g;
  return kebabKey.replaceAll(regex, (match) => match[1].toUpperCase());
};

const CALC_PAY = (employee) => {
  const { hoursWorked, role } = employee;
  if (role === 'Manager') {
    return hoursWorked * 90;
  } else if (role === 'Consultant') {
    return hoursWorked * 70;
  } else {
    return hoursWorked * 45;
  }
};

const STORE_RECORD = (record) => {
  let totalRecords = Number(window.localStorage.getItem('totalRecords')) + 1 || 1;
  let newKey = 'employee' + totalRecords;
  window.localStorage.setItem(newKey, JSON.stringify(record));
  window.localStorage.setItem('totalRecords', JSON.stringify(totalRecords));
};

const GET_RECORDS = () => {
  const ALL_RECORDS = [];
  let next = 1;
  currentRecord = JSON.parse(window.localStorage.getItem(`employee${next}`));

  while (currentRecord) {
    ALL_RECORDS.push(currentRecord);
    currentRecord = JSON.parse(window.localStorage.getItem(`employee${++next}`));
  };

  return ALL_RECORDS;
};

const RENDER_RECORDS = () => {
  const BUILD_HTML = (record) => {
    const { firstName, lastName, role } = record;
    let totalPay = CALC_PAY(record);

    return `<p class="pay-record">${firstName} ${lastName}, a ${role}, will be paid $${totalPay}.</p>`;
  };

  const STORED_RECORDS = GET_RECORDS();
  const RECORD_TAGS = STORED_RECORDS.map(BUILD_HTML);

  return RECORD_TAGS.join('');
};

const MAKE_RECORD = () => {
  const NEW_RECORD = {};
  let $inputs = [...$('input')]; // document.querySelectorAll('input');
  let $selects = [...$('select')]; // document.querySelectorAll('select');
  let allEntries = [...$inputs, ...$selects];

  allEntries.forEach((entry) => {
    let key = CAMELIZE_KEY(entry.id);
    NEW_RECORD[key] = entry.value;
  });

  STORE_RECORD(NEW_RECORD);
  console.log('new record is complete: ', NEW_RECORD);
};

const MAKE_STATE_OPTIONS = () => {
  const SELECT_TAG = $('#state'); // document.querySelector('#state');
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
  const $FOOTER = $('footer'); // document.querySelector('footer');
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
  const DAY = DAYS[NOW.getDay()];
  const MONTH = MONTHS[NOW.getMonth()]
  const DATE = NOW.getDate();
  const YEAR = NOW.getFullYear()

  let copyright = $FOOTER.html(); // FOOTER.innerHTML
  let newText = `${DAY}, ${MONTH} ${DATE}, ${YEAR} by EPP Systems, Inc.`

  return copyright + newText;
};

$(document).ready(() => { // document.addEventListener('DOMContentLoaded', () => {
  // in-class exercise
  let $hideP = $('.hide-p');
  let $hideBtn = $('.hide-btn');
  let $isPHidden = false;
  $hideBtn.on('click', () => {
    $hideP.toggle()
    $hideBtn.html().startsWith('H') ? $hideBtn.html('Show!') : $hideBtn.html('Hide!')
  });
  // =================

  const $FORM_TAG = $('form');
  const $PAY_DATA_TAG = $('#pay-data'); // document.querySelector('#pay-data');
  const $STATE_SELECT_TAG = $('#state'); // document.querySelector('#state');
  const $FOOTER = $('footer'); // document.querySelector('footer');

  if ($FORM_TAG) {
    $FORM_TAG.attr('onsubmit', 'MAKE_RECORD()')
  }
  if ($PAY_DATA_TAG) {
    $PAY_DATA_TAG.html(RENDER_RECORDS()); // PAY_DATA_TAG.innerHTML = RENDER_RECORDS();
  }
  if ($STATE_SELECT_TAG) {
    $STATE_SELECT_TAG.html(MAKE_STATE_OPTIONS()); // STATE_SELECT_TAG.innerHTML = MAKE_STATE_OPTIONS();
  }
  $FOOTER.html(MAKE_FOOTER()); // FOOTER.innerHTML = MAKE_FOOTER();
});
