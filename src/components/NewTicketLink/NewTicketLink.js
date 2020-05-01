/* eslint-disable react/jsx-no-bind */
import { route } from 'preact-router';
import { CurrentTicket } from '../../utils/CurrentTicket';

export default function NewTicketLink() {
	const href = `/ticket?id=${CurrentTicket.getId()}`;
	return (
		<button
			type="button"
			onClick={() => { route(href); }}
			className="btn btn-primary btn-lg mx-auto"
		>
            Get your ticket
		</button>
	);
}
