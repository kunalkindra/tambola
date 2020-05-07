export default function PrizeTable({ prizes, onPrizeChange }) {
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
          {prizes.map(({ name, amount, id }) => (
            <tr key={id}>
              <td>{name}</td>
              <td className="text-right">
                <input
                  type="text"
                  className="text-right border-0 focus-0"
                  onChange={(e) => {
                    onPrizeChange(id, 'amount', +e.target.value || 0);
                  }}
                  value={amount}
                />
              </td>
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
