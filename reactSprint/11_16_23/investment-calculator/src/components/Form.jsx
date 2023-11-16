const buildRecords = (prevRecord, records) => {
  const { yrSavings, rate, duration, total } = prevRecord;

  if (!duration) {
    return records;
  }

  const thisYear = {
    curSavings: total,
    yrSavings,
    rate,
    duration: duration - 1,
    total: total + yrSavings * (1 + rate / 100),
  };

  return buildRecords(thisYear, [...records, prevRecord]);
};

const Form = ({ form, setForm, setRecords }) => {
  const { curSavings, yrSavings, rate, duration } = form;

  // MULTIPLE HANDLER VERSION
  // could also do each setForm() inline for each input
  const handleCurSavingsChange = () => {
    setForm((s) => ({ ...s, curSavings: curSavings }));
  };
  const handleYrSavingsChange = () => {
    setForm((s) => ({ ...s, yrSavings: yrSavings }));
  };
  const handleRateChange = () => {
    setForm((s) => ({ ...s, rate: rate }));
  };
  const handleDurationChange = () => {
    setForm((s) => ({ ...s, duration: duration }));
  };

  // SINGLE HANDLER VERSION
  // const handleInputChange = (id, val) => {
  //   if (id === 'current-savings') {
  //     setForm((s) => ({ ...s, curSavings: curSavings }));
  //   } else if (id === 'yearly-savings') {
  //     setForm((s) => ({ ...s, yrSavings: yrSavings }));
  //   } else if (id === 'interest-rate') {
  //     setForm((s) => ({ ...s, rate: rate }));
  //   } else if (id === 'investment-duration') {
  //     setForm((s) => ({ ...s, duration: duration }));
  //   } else {
  //     console.error('inaccessible input');
  //   }
  // };

  const handleSubmit = (e) => {
    e.preventDefault();
    // calculate each value year by year
    // each value is one obj in the records array
    /*
      I have c$ upfront
      I will add y$ each year
      My total t$ each year will be c$ + (y$ * 1.r)
        I will add all these values to a single obj in records
      I will do the previous calculation 'duration' times, for 'duration' objects in my records array
    */

    const total = curSavings + yrSavings * (1 + rate / 100);
    const thisYear = { curSavings, yrSavings, rate, duration, total };
    const allRecords = buildRecords(thisYear, []);
    setRecords(allRecords);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <div>
          <p>
            <label htmlFor="current-savings">
              Current Savings
              <input
                id="current-savings"
                type="number"
                value={curSavings}
                onChange={handleCurSavingsChange}
                // onChange={(e) => handleInputChange('current-savings', e.target.value)}
              />{' '}
              USD
            </label>
          </p>
        </div>
        <div>
          <p>
            <label htmlFor="yearly-savings">
              Yearly Savings
              <input
                id="yearly-savings"
                type="number"
                value={yrSavings}
                onChange={handleYrSavingsChange}
              />{' '}
              USD
            </label>
          </p>
        </div>
        <div>
          <p>
            <label htmlFor="interest-rate">
              Interest Rate
              <input
                id="interest-rate"
                type="number"
                value={rate}
                onChange={handleRateChange}
              />{' '}
              annual %
            </label>
          </p>
        </div>
        <div>
          <p>
            <label htmlFor="investment-duration">
              Investment Duration
              <input
                id="investment-duration"
                type="number"
                value={duration}
                onChange={handleDurationChange}
              />{' '}
              years
            </label>
          </p>
        </div>
      </div>
      <div>
        <button type="reset">Reset</button>
        <button type="submit">Calculate</button>
      </div>
    </form>
  );
};

export default Form;
