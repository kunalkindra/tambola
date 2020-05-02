import React from 'preact/compat';

export default function Error({ error, message = '' }) {
  return <div className="alert alert-danger">{message || error.message}</div>;
}
