import withResolved from '../hoc/WithResolved/WithResolved';
import { getTicket } from '../../api';

export default function DisplayTicket({
  ticket: { numbers },
  checkedNumbers = [],
  validNumbers = [],
  missingNumbers = [],
  onNumberCheck = () => {},
  fixedSize,
}) {
  const ticketClasses = ['ticket', 'table', 'table-bordered', 'text-center'];
  if (fixedSize) ticketClasses.push('ticket__fixed-size');
  return (
    <table className={ticketClasses.join(' ')}>
      {numbers.map((line) => (
        <tr>
          {line.map((number) => {
            const classes = ['ticket__number', 'px-0'];
            const checked = checkedNumbers.includes(number);
            const valid = validNumbers.includes(number);
            const missing = missingNumbers.includes(number);
            if (checked) classes.push('ticket__number--checked');
            if (valid) classes.push('ticket__number--valid');
            if (missing) classes.push('ticket__number--missing');
            return (
              <td
                onClick={onNumberCheck}
                data-number={number}
                className={classes.join(' ')}
              >
                {number}
              </td>
            );
          })}
        </tr>
      ))}
    </table>
  );
}

export const withTicketData = withResolved({
  query: getTicket,
  queryArgs: (props) => props.ticketId,
  as: 'ticket',
  loadingProps: {
    message: 'Just a moment - loading the ticket!',
  },
});

export const ResolvedDisplayTicket = withTicketData(DisplayTicket);
