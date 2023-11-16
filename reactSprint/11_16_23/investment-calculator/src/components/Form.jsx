const buildRecords = (prevRecord, records) => {
  const { duration, yrSavings, yrInterest, totalInterest, rate, total } =
    prevRecord;

  if (!duration) {
    return records;
  }

  const thisYearInterest = (total + yrSavings) * (rate / 100);
  const thisYearTotalInterest = totalInterest + thisYearInterest;
  const thisYearTotal = (total + yrSavings) * (1 + rate / 100);

  const thisYear = {
    duration: duration - 1,
    curSavings: total, // 'total savings TD
    yrSavings,
    yrInterest: thisYearInterest, // ''annual interest' TD
    totalInterest: thisYearTotalInterest, // 'total interest' TD
    rate,
    total: thisYearTotal, // 'invested capital' TD
  };

  return buildRecords(thisYear, [...records, prevRecord]);
};

const Form = ({ form, setForm, setRecords }) => {
  const { curSavings, yrSavings, rate, duration } = form;

  // MULTIPLE HANDLER VERSION
  // could also do each setForm() inline for each input
  const handleCurSavingsChange = (e) => {
    setForm((s) => ({ ...s, curSavings: Number(e.target.value) }));
  };
  const handleYrSavingsChange = (e) => {
    setForm((s) => ({ ...s, yrSavings: Number(e.target.value) }));
  };
  const handleRateChange = (e) => {
    setForm((s) => ({ ...s, rate: Number(e.target.value) }));
  };
  const handleDurationChange = (e) => {
    setForm((s) => ({ ...s, duration: Number(e.target.value) }));
  };

  // SINGLE HANDLER VERSION
  // like a miniature useReducer()
  // const handleInputChange = (id, val) => {
  //   if (id === 'current-savings') {
  //     setForm((s) => ({ ...s, curSavings: val }));
  //   } else if (id === 'yearly-savings') {
  //     setForm((s) => ({ ...s, yrSavings: val }));
  //   } else if (id === 'interest-rate') {
  //     setForm((s) => ({ ...s, rate: val }));
  //   } else if (id === 'investment-duration') {
  //     setForm((s) => ({ ...s, duration: val }));
  //   } else {
  //     console.error('inaccessible input');
  //   }
  // };

  const handleSubmit = (e) => {
    e.preventDefault();
    const yrInterest = (curSavings + yrSavings) * (rate / 100);
    const totalInterest = yrInterest;
    const total = (curSavings + yrSavings) * (1 + rate / 100);
    const thisYear = {
      duration,
      curSavings,
      yrSavings,
      yrInterest,
      totalInterest,
      rate,
      total,
    };
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
