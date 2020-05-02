import { Link } from 'preact-router';
import { Component } from 'preact';
import zeroPad from '../utils/zeroPad';
import SavedTicket from '../utils/SavedTicket';
import Loader from '../components/Loader/Loader';
import NewTicketLink from '../components/NewTicketLink/NewTicketLink';
import CurrentTicket from '../utils/CurrentTicket';
import { ROUTES } from '../constants/routes';
import DisplayTicket from '../components/DisplayTicket/DisplayTicket';
import { getTicket } from '../api';

export default class Ticket extends Component {
  state = {
    checkedNumbers: SavedTicket.read(this.props.id),
    loading: true,
    numbers: null,
    alertVisible: true,
  };

  componentDidMount() {
    const ticketId = +this.props.id;
    getTicket(ticketId)
      .then(({ ticket: numbers }) => {
        this.setState({ numbers, loading: false });
        CurrentTicket.update(ticketId);
      })
      .catch(this.setTicketError);
  }

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

  setTicketError = () => {
    this.setState({ loading: false, error: true });
  };

  render() {
    const {
      numbers,
      checkedNumbers,
      loading,
      error,
      alertVisible,
    } = this.state;
    const { id } = this.props;
    if (loading) {
      return (
        <div className="text-center py-5">
          Just a moment - getting your ticket ready!
          <div className="mt-5" />
          <Loader />
        </div>
      );
    }
    if (error) {
      return (
        <div className="vh-100 m-n4 text-center p-5">
          Oops, something went wrong. Please get a new ticket.
          <br />
          <div className="mt-4" />
          <NewTicketLink />
        </div>
      );
    }
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
          numbers={numbers}
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
