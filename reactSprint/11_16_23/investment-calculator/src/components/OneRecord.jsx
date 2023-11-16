const OneRecord = ({ record, year }) => {
  const { duration, curSavings, yrSavings, yrInterest, totalInterest, total } =
    record;

  return (
    <tr>
      <td>{year}</td>
      <td>{Number(curSavings.toFixed(2))}</td>
      <td>{Number(yrInterest.toFixed(2))}</td>
      <td>{Number(totalInterest.toFixed(2))}</td>
      <td>{Number(total.toFixed(2))}</td>
    </tr>
  );
};

export default OneRecord;
