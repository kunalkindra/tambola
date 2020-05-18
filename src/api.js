/* eslint-disable import/prefer-default-export */
import round from 'lodash/round';
import { get, post } from './request';

const API_URL = 'http://localhost:3000/api';

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
  const tickets = await get(`assets/tickets/${ticketFileName}`);
  const ticket = tickets.find((t) => t.id === id);
  if (!ticket) {
    return Promise.reject(new Error('Ticket not found in file'));
  }
  return ticket;
};

export function signUp() {
  return post(`${API_URL}/user`);
}

export function getGame(id) {
  return get(`${API_URL}/game/${id}`);
}

export function generateNextNumber(id) {
  return get(`${API_URL}/game/${id}/next`);
}

export function createGame() {
  return post(`${API_URL}/game`);
}
