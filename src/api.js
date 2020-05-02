/* eslint-disable import/prefer-default-export */
import round from 'lodash/round';

function getTicketFileName(ticketId) {
  const rounded = round(ticketId, -3) || 1;
  const firstNumber = rounded >= ticketId ? rounded - 999 : rounded + 1;
  const lastNumber = firstNumber + 999;
  return `${firstNumber}-${lastNumber}.json`;
}

export const getTicket = async (id) => {
  id = +id;
  const ticketFileName = getTicketFileName(id);
  if (!ticketFileName) {
    return Promise.reject(new Error('Ticket file not found'));
  }
  const tickets = await fetch(
    `assets/tickets/${ticketFileName}`,
  ).then((response) => response.json());
  const ticket = tickets.find((t) => t.id === id);
  if (!ticket) {
    return Promise.reject(new Error('Ticket not found in file'));
  }
  return ticket;
};