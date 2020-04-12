export default function PrizeTable({ showWinners = false, prizes }) {
	let totalWinnings = prizes.reduce((acc, cur) => cur.amount + acc, 0);
	return (
		<>
			<table className="table text-left">
				<thead className="thead-light">
					<tr>
						<th>Inaam</th>
						<th className="text-right">Inaam rashi</th>
						{showWinners && <th>Vijeta</th>}
					</tr>
				</thead>
				<tbody>
					{prizes.map(({ name, amount, winner }) => (<tr>
						<td>{name}</td>
						<td className="text-right">{amount}</td>
						{showWinners && <td>{winner}</td>}
					</tr>))}
					<tr>
						<td>Total</td>
						<td className="text-right">{totalWinnings}</td>
						{showWinners && <td />}
					</tr>
				</tbody>
			</table>
		</>
	);
}
