import React from 'preact/compat';
import Card from '@material-ui/core/Card';

export default function Winners({ prizes, onChange }) {
  return (
    <div className="winners">
      {prizes.map(({ name, amount, winner, id }) => (
        <div className="" key={id}>
          <Card
            elevation={3}
            className={`winners__item text-left text-light d-flex justify-content-between align-items-bottom p-3 bg-${
              winner ? 'primary' : 'secondary'
            }`}
          >
            <div className="small mr-3">
              <span className="text-nowrap">{name}</span>
              <br />
              <span className="h5 mb-0">₹ {amount}</span>
            </div>
            <input
              type="text"
              value={winner}
              onChange={(e) => onChange(id, 'winner', e.target.value)}
              className="winners__name bg-transparent text-white"
            />
          </Card>
        </div>
      ))}
    </div>
  );
}
