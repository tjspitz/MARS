// ========== Classes ==========
class Employee {
  constructor(first, last) {
    this.firstName = first;
    this.lastName = last;
  }
  saveRecord() {
    let totalRecords = Number(window.localStorage.getItem('totalRecords')) + 1 || 1;
    let newKey = 'employee' + totalRecords;
    window.localStorage.setItem(newKey, JSON.stringify(this));
    window.localStorage.setItem('totalRecords', JSON.stringify(totalRecords));
  }
}

class Manager extends Employee {
  constructor(first, last, role, hours) {
    super(first, last)
    this.role = role;
    this.hours = hours;
  }
}

class Consultant extends Employee {
  constructor(first, last, role, hours) {
    super(first, last)
    this.role = role;
    this.hours = hours;
  }
}

class Trainee extends Employee {
  constructor(first, last, role, hours) {
    super(first, last)
    this.role = role;
    this.hours = hours;
  }
}

// ========== Everything Else ==========
const CAMELIZE_KEY = (kebabKey) => {
  let regex = /-(.)/g;
  return kebabKey.replaceAll(regex, (match) => match[1].toUpperCase());
};

const CALC_PAY = (employee) => {
  const { hours, role } = employee;
  if (role === 'Manager') {
    return hours * 90;
  } else if (role === 'Consultant') {
    return hours * 70;
  } else {
    return hours * 45;
  }
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

  const RECORDS = GET_RECORDS();
  const RECORD_TAGS = RECORDS.map(BUILD_HTML);

  return RECORD_TAGS.join('');
};

const MAKE_RECORD = () => {
  const EMPLOYEE = {};
  let newRecord;
  let inputs = [...document.querySelectorAll('input')];
  let selects = [...document.querySelectorAll('select')];
  let allEntries = [...inputs, ...selects];

  allEntries.forEach((entry) => {
    let key = CAMELIZE_KEY(entry.id);
    EMPLOYEE[key] = entry.value;
  });

  const { firstName, lastName, role, hoursWorked } = EMPLOYEE;

  if (role === 'Manager') {
    newRecord = new Manager(firstName, lastName, role, hoursWorked)
  } else if (role === 'Consultant') {
    newRecord = new Consultant(firstName, lastName, role, hoursWorked)
  } else {
    newRecord = new Trainee(firstName, lastName, role, hoursWorked)
  }

  newRecord.saveRecord();
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
  let newText = `${DAY}, ${MONTH} ${DATE}, ${YEAR} by EPP Systems, Inc.`

  return copyright + newText;
};

document.addEventListener('DOMContentLoaded', () => {
  const PAY_DATA_TAG = document.querySelector('#pay-data');
  const STATE_SELECT_TAG = document.querySelector('#state');
  const FOOTER = document.querySelector('footer');

  if (PAY_DATA_TAG) {
    PAY_DATA_TAG.innerHTML = RENDER_RECORDS();
  }
  if (STATE_SELECT_TAG) {
    STATE_SELECT_TAG.innerHTML = MAKE_STATE_OPTIONS();
  }
  FOOTER.innerHTML = MAKE_FOOTER();
});
