export default function PrizeTable({ prizes }) {
  const totalWinnings = prizes.reduce((acc, cur) => cur.amount + acc, 0);
  return (
    <>
      <table className="table text-left">
        <thead className="thead-light">
          <tr>
            <th>Inaam</th>
            <th className="text-right">Inaam rashi</th>
          </tr>
        </thead>
        <tbody>
          {prizes.map(({ name, amount }) => (
            <tr>
              <td>{name}</td>
              <td className="text-right">{amount}</td>
            </tr>
          ))}
          <tr>
            <td>Total</td>
            <td className="text-right">{totalWinnings}</td>
          </tr>
        </tbody>
      </table>
    </>
  );
}
