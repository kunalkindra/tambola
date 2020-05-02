/* eslint-disable import/prefer-default-export */
import round from 'lodash/round';

function getTicketFileName(ticketId) {
  let firstNumber;
  if (ticketId < 1000) {
    firstNumber = 1;
  } else {
    const rounded = round(ticketId, -3) || 1;
    firstNumber = rounded >= ticketId ? rounded - 999 : rounded + 1;
  }
  const lastNumber = firstNumber + 999;
  return `${firstNumber}-${lastNumber}.json`;
}

export const getTicket = async (id) => {
  id = +id;
  if (id < 1 || id > 99999) {
    return Promise.reject(new Error('Invalid ticket number!'));
  }
  const ticketFileName = getTicketFileName(id);
  const tickets = await fetch(
    `assets/tickets/${ticketFileName}`,
  ).then((response) => response.json());
  const ticket = tickets.find((t) => t.id === id);
  if (!ticket) {
    return Promise.reject(new Error('Ticket not found in file'));
  }
  return ticket;
};
