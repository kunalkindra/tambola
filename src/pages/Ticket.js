import { Link } from 'preact-router';
import { Component } from 'preact';
import zeroPad from '../utils/zeroPad';
import SavedTicket from '../utils/SavedTicket';
import CurrentTicket from '../utils/CurrentTicket';
import { ROUTES } from '../constants/routes';
import DisplayTicket from '../components/DisplayTicket/DisplayTicket';
import withResolved from '../components/hoc/WithResolved/WithResolved';
import { getTicket } from '../api';

class Ticket extends Component {
  state = {
    checkedNumbers: SavedTicket.read(this.props.id),
    alertVisible: true,
  };

  componentDidUpdate() {
    SavedTicket.update(this.props.id, this.state.checkedNumbers);
    if (!this.getRemainingNumbers()) CurrentTicket.reset();
  }

  getRemainingNumbers() {
    return 15 - this.state.checkedNumbers.length;
  }

  hideAlert = () => {
    this.setState({ alertVisible: false });
  };

  toggleCheck = (e) => {
    const number = +e.target.dataset.number;
    if (!number) return;
    const { checkedNumbers } = this.state;
    const checked = checkedNumbers.includes(number);
    const newCheckedNumbers = checked
      ? checkedNumbers.filter((num) => num !== number)
      : checkedNumbers.concat(number);
    this.setState({ checkedNumbers: newCheckedNumbers });
  };

  render() {
    const { checkedNumbers, alertVisible } = this.state;
    const { id, ticket } = this.props;
    const remainingNumbers = this.getRemainingNumbers();
    return (
      <div>
        {alertVisible && (
          <p className="small alert alert-warning alert-dismissible d-sm-none">
            Please use your device in landscape mode for a better experience
            <button type="button" className="close" onClick={this.hideAlert}>
              <span aria-hidden="true">&times;</span>
            </button>
          </p>
        )}
        <div className="d-flex justify-content-between align-items-baseline">
          <div className="h6 text-muted m-0"># {id}</div>
          <div>
            Remaining -{' '}
            <span className="bg-info text-white p-1 rounded h6">
              {zeroPad(remainingNumbers)}
            </span>
          </div>
        </div>
        <hr />
        <DisplayTicket
          ticket={ticket}
          checkedNumbers={checkedNumbers}
          onNumberCheck={this.toggleCheck}
        />
        {!remainingNumbers && (
          <p className="text-center">
            All numbers checked! Want to play again?{' '}
            <Link href={ROUTES.HOME()} className="btn btn-primary btn-lg">
              Get a new ticket
            </Link>
          </p>
        )}
      </div>
    );
  }
}

export default withResolved({
  query: getTicket,
  queryArgs: (props) => props.id,
  as: 'ticket',
  loadingProps: {
    message: 'Just a moment - getting your ticket ready!',
  },
  errorProps: {
    message: (
      <div className="text-center">
        Oops, something went wrong. Please try again.
        <div className="mt-4" />
        <Link href={ROUTES.HOME()} className="btn btn-primary btn-lg">
          Get a new ticket
        </Link>
      </div>
    ),
  },
})(Ticket);
