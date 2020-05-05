import { Component } from 'preact';
import TextField from '@material-ui/core/TextField/TextField';
import FormControl from '@material-ui/core/FormControl';
import React from 'preact/compat';
import Drawer from '../Drawer/Drawer';
import TicketValidator from '../TicketValidator/TicketValidator';

export default class TicketDrawer extends Component {
  state = {
    open: false,
    ticketNumber: '',
    showTicket: false,
  };

  handleOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false, ticketNumber: '', showTicket: false });
  };

  handleInputChange = (e) => {
    this.setState({ [e.target.name]: e.target.value, showTicket: false });
  };

  showTicket = async (e) => {
    e.preventDefault();
    this.setState({ showTicket: true });
  };

  render() {
    const { open, ticketNumber, showTicket } = this.state;
    const { allCheckedNumbers } = this.props;
    return (
      <span>
        <button
          type="button"
          className="btn btn-secondary rounded px-3"
          onClick={this.handleOpen}
        >
          !!
        </button>
        <Drawer open={open} onClose={this.handleClose}>
          <h3>Ticket number daalo zara?</h3>
          <div className="mt-4" />
          <form onSubmit={this.showTicket}>
            <div className="d-flex align-items-end">
              <FormControl>
                <TextField
                  id="ticketNumber"
                  name="ticketNumber"
                  label="Ticket Number"
                  onChange={this.handleInputChange}
                  value={this.state.ticketNumber}
                />
              </FormControl>
            </div>
          </form>
          <div className="mt-5" />
          {showTicket && (
            <TicketValidator
              ticketId={ticketNumber}
              allCheckedNumbers={allCheckedNumbers}
            />
          )}
        </Drawer>
      </span>
    );
  }
}
