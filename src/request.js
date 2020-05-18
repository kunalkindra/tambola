import lodashGet from 'lodash/get';
import Session from './session';

export function request(url, options) {
  return fetch(url, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      user: lodashGet(Session.get(), '_id', null),
    },
    ...options,
  });
}

export function get(url, options) {
  return request(url, options).then((response) => response.json());
}

export function post(url, data = {}, options) {
  return request(url, {
    method: 'POST',
    body: JSON.stringify(data),
    ...options,
  }).then((response) => response.json());
}
