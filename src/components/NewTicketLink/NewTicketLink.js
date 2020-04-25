import { Link } from 'preact-router/match';

export default function NewTicketLink() {
	const ticketId = Math.floor(Math.random() * 99999);
	return (
		<Link
			type="button"
			href={`/ticket?id=${ticketId}`}
			className="btn btn-primary btn-lg"
		>
            Get a ticket
		</Link>
	);
}
