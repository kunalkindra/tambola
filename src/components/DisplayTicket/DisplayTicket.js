export function DisplayTicket({ numbers, checkedNumbers, onNumberCheck, fixedSize }) {
	let ticketClasses = ['ticket', 'table', 'table-bordered', 'text-center'];
	if (fixedSize) ticketClasses.push('ticket__fixed-size');
	return (
		<table className={ticketClasses.join(' ')}>
			{numbers.map(line => (
				<tr>
					{line.map(number => {
						const classes = ['ticket__number', 'px-0'];
						const checked = checkedNumbers.includes(number);
						if (checked)
							classes.push('ticket__number--checked');
						return (
							<td onClick={onNumberCheck} data-number={number} className={classes.join(' ')}>
								{number}
							</td>
						);
					})}
				</tr>
			))}
		</table>
	);
}
