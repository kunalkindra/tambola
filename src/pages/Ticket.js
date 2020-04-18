import { Component } from 'preact';
import { tickets } from '../constants/tickets';
import { zeroPad } from '../utils/zeroPad';
import { SavedTicket } from '../utils/SavedTicket';


export default class Ticket extends Component {
	state = { checkedNumbers: SavedTicket.read(this.props.id) };
	toggleCheck = (e) => {
		const number = +e.target.dataset.number;
		if (!number)  return;
		const checkedNumbers = this.state.checkedNumbers;
		const checked = checkedNumbers.includes(number);
		const newCheckedNumbers = checked ? checkedNumbers.filter(num => num !== number) : checkedNumbers.concat(number);
		this.setState({ checkedNumbers: newCheckedNumbers });
	};
	
	componentDidUpdate() {
		SavedTicket.update(this.props.id, this.state.checkedNumbers);
	}
	
	render() {
		const id = this.props.id;
		const { numbers, lastName, salutation } = tickets[id];
		const checkedNumbers = this.state.checkedNumbers;
		let remainingNumbers = 15 - checkedNumbers.length;
		return (
			<div>
				<div className="d-flex justify-content-between align-items-baseline">
					<h4 className="mb-0">Hello {salutation} {lastName}!</h4>
					<div>Remaining - <span className="bg-info text-white p-1 rounded h6">{zeroPad(remainingNumbers)}</span></div>
				</div>
				<hr />
				<table className="ticket table table-bordered text-center">
					{numbers.map(line => (
						<tr>
							{line.map(number => {
								const classes = ['ticket__number', 'px-0'];
								let checked = checkedNumbers.includes(number);
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
			</div>
		);
	}
}
