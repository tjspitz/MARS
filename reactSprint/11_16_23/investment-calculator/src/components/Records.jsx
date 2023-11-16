import '../styles/Records.css';
import OneRecord from './OneRecord';

const Records = ({ records }) => {
  return records.length ? (
    <div className="table-container">
      <table>
        <thead>
          <tr>
            <th>Year</th>
            <th>Current Savings</th>
            <th>Annual Interest</th>
            <th>Total Interest</th>
            <th>Total Investment</th>
          </tr>
        </thead>
        <tbody>
          {records.map((record, i) => (
            <OneRecord
              record={record}
              year={i + 1}
              key={i + '-' + record.duration}
            />
          ))}
        </tbody>
      </table>
    </div>
  ) : (
    <div>
      <h3>Please complete the fields above</h3>
      <p>Data is shown upon clicking "calculate"</p>
    </div>
  );
};

export default Records;
