/* eslint-disable import/prefer-default-export */
import { get, patch, post } from './request';

const API_URL = 'http://localhost:3000/api';

export const getTicket = async ({ gameId, userId }) => {
  return get(`${API_URL}/ticket?gameId=${gameId}&userId=${userId}`);
};

export const updateTicket = async (ticketId, data) => {
  return patch(`${API_URL}/ticket/${ticketId}`, data);
};

export function signUp(name) {
  return post(`${API_URL}/user`, { name });
}

export function getGame(id) {
  return get(`${API_URL}/game/${id}`);
}

export function generateNextNumber(gameId) {
  return get(`${API_URL}/game/${gameId}/next`);
}

export function createGame() {
  return post(`${API_URL}/game`);
}

export function joinGame(id) {
  return post(`${API_URL}/game/${id}/join`);
}
