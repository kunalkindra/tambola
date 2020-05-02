import React from 'preact/compat';
import { route } from 'preact-router';
import CurrentTicket from '../../utils/CurrentTicket';
import { ROUTES } from '../../constants/routes';

export default function NewTicketLink() {
  const ticketId = CurrentTicket.getId();
  const href = ROUTES.TICKET(ticketId);
  return (
    <button
      type="button"
      onClick={() => {
        CurrentTicket.update(ticketId);
        route(href);
      }}
      className="btn btn-primary btn-lg mx-auto"
    >
      Get your ticket
    </button>
  );
}
