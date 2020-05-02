import React from 'preact/compat';

export default function Loader({ color = 'info', className = 'text-center', message = '' }) {
  return (
    <div className={className}>
      {message && <p>{message}</p>}
      <div className={`spinner-border text-${color}`} role="status">
        <span className="sr-only">Loading...</span>
      </div>
    </div>
  );
}
