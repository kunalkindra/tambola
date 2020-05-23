// eslint-disable-next-line import/prefer-default-export
export const ROUTES = {
  GAME: (id) => `/game/${id}`,
  TICKET: (gameId) => `/ticket?gameId=${gameId}`,
  HOME: () => '/',
  LOBBY: (id) => `/lobby/${id}`,
  JOIN: (id = '') => `/join/${id}`,
};
