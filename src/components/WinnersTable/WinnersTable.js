export default function WinnersTable({ prizes, onChange }) {
	const items = [prizes.slice(0, prizes.length / 2), prizes.slice(prizes.length / 2, prizes.length)];
	return (
		<div className="row small">
			{items.map(prizes => (
				<div className="col col-sm-6">
					<table className="table text-left prize-table">
						<thead className="thead-light">
							<tr>
								<th style={{ width: '50%' }}>Inaam</th>
								<th style={{ width: '20%' }} className="text-right">Inaam rashi</th>
								<th style={{ width: '30%' }} >Vijeta</th>
							</tr>
						</thead>
						<tbody>
							{prizes.map(({ name, amount, winner, id }) => {
								let completedClassName = winner ? 'bg-primary text-white' : '';
								return (<tr>
									<td className={completedClassName}>{name}</td>
									<td className={`text-right ${completedClassName}`}>₹ {amount}</td>
									<td className={completedClassName}>
										<input type="text" value={winner}
											onChange={(e) => onChange(id, e.target.value)}
										/>
									</td>
								</tr>);
							})}
						</tbody>
					</table>
				</div>
			))}
		</div>
	);
	
}
