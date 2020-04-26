/* eslint-disable react/jsx-no-bind */
import { route } from 'preact-router';

export default function NewTicketLink() {
	const ticketId = Math.floor(Math.random() * 99999);
	const href = `/ticket?id=${ticketId}`;
	return (
		<button
			type="button"
			onClick={() => { console.log('clicked'); route(href); }}
			className="btn btn-primary btn-lg mx-auto"
		>
            Get a ticket
		</button>
	);
}
