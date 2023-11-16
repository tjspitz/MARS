import '../styles/OneRecord.css';

const OneRecord = ({ record, year }) => {
  const { curSavings, yrInterest, totalInterest, total } = record;

  return (
    <tr className="one-record">
      <td>{year}</td>
      <td>{Number(curSavings.toFixed(2))}</td>
      <td>{Number(yrInterest.toFixed(2))}</td>
      <td>{Number(totalInterest.toFixed(2))}</td>
      <td>{Number(total.toFixed(2))}</td>
    </tr>
  );
};

export default OneRecord;
