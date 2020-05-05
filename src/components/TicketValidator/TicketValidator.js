import React from 'preact/compat';
import { Component } from 'preact';

import validators from './validators';
import DisplayTicket, { withTicketData } from '../DisplayTicket/DisplayTicket';

const Prizes = [
  {
    name: 'Saare corners',
    validator: validators.corners,
  },
  {
    name: 'Quick 5',
    validator: validators.quickFive,
  },
  {
    name: 'Upar aali line',
    validator: validators.topLine,
  },
  {
    name: 'Beech aali line',
    validator: validators.middleLine,
  },
  {
    name: 'Nichli line',
    validator: validators.bottomLine,
  },
  {
    name: 'Full house',
    validator: validators.fullHouse,
  },
];

class TicketValidator extends Component {
  state = { validNumbers: [], missingNumbers: [], valid: false };

  render() {
    const { ticket, allCheckedNumbers } = this.props;
    const { missingNumbers, validNumbers, valid } = this.state;
    return (
      <div>
        <h3>Kya jeete h ji?</h3>
        <div className="mt-4" />
        <div className="row">
          {Prizes.map(({ name, validator }) => (
            <div className="col col-sm-4 text-center">
              <button
                type="button"
                className="btn btn-outline-primary w-100 mb-2"
                onClick={() => {
                  this.setState(validator(ticket.ticket, allCheckedNumbers));
                }}
              >
                {name}
              </button>
            </div>
          ))}
        </div>
        <div className="mt-3" />
        <DisplayTicket
          ticket={ticket}
          fixedSize
          validNumbers={validNumbers}
          missingNumbers={missingNumbers}
        />
        <div className="mt-4" />
        {valid && <h3>Arre waah! Taaaliyaaan! &#128079;</h3>}
      </div>
    );
  }
}

export default withTicketData(TicketValidator);
