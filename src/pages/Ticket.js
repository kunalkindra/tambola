import round from 'lodash/round';
import { Component } from 'preact';
import { zeroPad } from '../utils/zeroPad';
import { SavedTicket } from '../utils/SavedTicket';
import Loader from '../components/Loader/Loader';
import NewTicketLink from '../components/NewTicketLink/NewTicketLink';
import { Link } from 'preact-router';


function getTicketFileName(ticketId) {
	const rounded = round(ticketId, -3) || 1;
	const firstNumber = rounded >= ticketId ? rounded - 999 : rounded + 1;
	const lastNumber = firstNumber + 999;
	return `${firstNumber}-${lastNumber}.json`;
}

export default class Ticket extends Component {
	state = { checkedNumbers: SavedTicket.read(this.props.id), loading: true, numbers: null, alertVisible: true };

	toggleCheck = (e) => {
		const number = +e.target.dataset.number;
		if (!number)  return;
		const checkedNumbers = this.state.checkedNumbers;
		const checked = checkedNumbers.includes(number);
		const newCheckedNumbers = checked ? checkedNumbers.filter(num => num !== number) : checkedNumbers.concat(number);
		this.setState({ checkedNumbers: newCheckedNumbers });
	};
	
	setTicketError = () => {
		this.setState({ loading: false, error: true });
	};
	
	hideAlert = () => {
		this.setState({ alertVisible: false });
	};
	
	componentDidMount() {
		const ticketId = +this.props.id;
		const ticketFileName = getTicketFileName(ticketId);
		if (!ticketFileName) {
			this.setTicketError();
		}
		fetch(`assets/tickets/${(ticketFileName)}`)
			.then(response => response.json())
			.then(tickets => {
				const ticket = tickets.find(ticket => ticket.id === ticketId);
				if (!ticket) {
					this.setTicketError();
					return;
				}
				const numbers = ticket.ticket;
				this.setState({ numbers, loading: false });
			}).catch(this.setTicketError);
	}
	
	componentDidUpdate() {
		SavedTicket.update(this.props.id, this.state.checkedNumbers);
	}
	
	render() {
		const { numbers, checkedNumbers, loading, error, alertVisible } = this.state;
		const { id } = this.props;
		if (loading) {
			return (
				<div className="text-center py-5">
					Just a moment - getting your ticket ready!
					<div className="mt-5" />
					<Loader />
				</div>
			);
		}
		if (error) {
			return (
				<div className="vh-100 m-n4 text-center p-5">
					Oops, something went wrong. Please get a new ticket.
					<br />
					<div className="mt-4" />
					<NewTicketLink />
				</div>);
		}
		const remainingNumbers = 15 - checkedNumbers.length;
		return (
			<div>
				{alertVisible && (
					<p className="small alert alert-warning alert-dismissible d-sm-none">
					Please use your device in landscape mode for a better experience
						<button type="button" className="close" onClick={this.hideAlert}>
							<span aria-hidden="true">&times;</span>
						</button>
					</p>
				)}
				<div className="d-flex justify-content-between align-items-baseline">
					<div className="h6 text-muted m-0"># {id}</div><div>Remaining - <span className="bg-info text-white p-1 rounded h6">{zeroPad(remainingNumbers)}</span></div>
				</div>
				<hr />
				<table className="ticket table table-bordered text-center">
					{numbers.map(line => (
						<tr>
							{line.map(number => {
								const classes = ['ticket__number', 'px-0'];
								const checked = checkedNumbers.includes(number);
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
				{
					!remainingNumbers &&
					(
						<p>
							<Link href="/">Return to home screen</Link> to play again.
						</p>
					)
				}
			</div>
		);
	}
}
