import { Component } from 'preact';
import { tickets } from '../constants/tickets';


export default class Ticket extends Component {
	state = { checkedNumbers: [] };
	toggleCheck = (e) => {
		const number = +e.target.dataset.number;
		if (!number)  return;
		const checkedNumbers = this.state.checkedNumbers;
		const checked = checkedNumbers.includes(number);
		const newCheckedNumbers = checked ? checkedNumbers.filter(num => num !== number) : checkedNumbers.concat(number);
		this.setState({ checkedNumbers: newCheckedNumbers });
	};
	render() {
		const id = this.props.id;
		const numbers = tickets[id];
		return (
			<table className="ticket table table-bordered text-center">
				{numbers.map(line => (
					<tr>
						{line.map(number => {
							const classes = ['ticket__number', 'px-0'];
							let checked = this.state.checkedNumbers.includes(number);
							if (checked)
								classes.push('ticket__number--checked');
							return (
								<td onClick={this.toggleCheck} data-number={number} className={classes.join(' ')}>
									{number}
								</td>
							);
						})}
					</tr>
				))}
			</table>
		);
	}
}
