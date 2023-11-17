import { useState } from 'react';
import '../styles/Form.css';

const initialState = {
  curSavings: '',
  yrSavings: '',
  rate: '',
  duration: '',
};

const Form = ({ calculate }) => {
  const [form, setForm] = useState({ ...initialState });
  const { curSavings, yrSavings, rate, duration } = form;

  const handleSubmit = (e) => {
    e.preventDefault();
    const yrInterest = (curSavings + yrSavings) * (rate / 100);
    const totalInterest = yrInterest;
    const total = (curSavings + yrSavings) * (1 + rate / 100);
    const firstYear = {
      duration,
      curSavings,
      yrSavings,
      yrInterest,
      totalInterest,
      rate,
      total,
    };
    calculate(firstYear);
    handleReset();
  };

  const handleReset = () => {
    setForm({ ...initialState });
  };

  return (
    <div className="form-container">
      <form
        onSubmit={handleSubmit}
        onReset={handleReset}
      >
        <div className="inputs">
          <div className="input-container">
            <p>
              <label htmlFor="current-savings">
                Current Savings:
                <input
                  id="current-savings"
                  type="number"
                  value={curSavings}
                  onChange={(e) =>
                    setForm((s) => ({
                      ...s,
                      curSavings: Number(e.target.value),
                    }))
                  }
                />{' '}
                <span className="hint">(USD)</span>
              </label>
            </p>
          </div>
          <div className="input-container">
            <p>
              <label htmlFor="yearly-savings">
                Yearly Savings:
                <input
                  id="yearly-savings"
                  type="number"
                  value={yrSavings}
                  onChange={(e) =>
                    setForm((s) => ({
                      ...s,
                      yrSavings: Number(e.target.value),
                    }))
                  }
                />{' '}
              </label>
              <span className="hint">(USD)</span>
            </p>
          </div>
          <div className="input-container">
            <p>
              <label htmlFor="interest-rate">
                Interest Rate:
                <input
                  id="interest-rate"
                  type="number"
                  value={rate}
                  onChange={(e) =>
                    setForm((s) => ({ ...s, rate: Number(e.target.value) }))
                  }
                />{' '}
              </label>
              <span className="hint">(annual %)</span>
            </p>
          </div>
          <div className="input-container">
            <p>
              <label htmlFor="investment-duration">
                Investment Duration:
                <input
                  id="investment-duration"
                  type="number"
                  value={duration}
                  onChange={(e) =>
                    setForm((s) => ({ ...s, duration: Number(e.target.value) }))
                  }
                />{' '}
                <span className="hint">(years)</span>
              </label>
            </p>
          </div>
        </div>
        <div className="btn-list">
          <button
            className="btn"
            type="reset"
          >
            Reset
          </button>
          <button
            className="btn"
            type="submit"
          >
            Calculate
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
