import OneRecord from './OneRecord';

const Records = ({ records }) => {
  return records.length ? (
    <table className="">
      <thead>
        <tr>
          <th>Year</th>
          <th>Total Savings</th>
          <th>Annual Interest</th>
          <th>Total Interest</th>
          <th>Invested Capital</th>
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
  ) : (
    <div>
      <h3>Please complete the fields above</h3>
      <p>Data is shown upon clicking "calculate"</p>
    </div>
  );
};

export default Records;
