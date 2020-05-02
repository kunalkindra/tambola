import { Component } from 'preact';
import TextField from '@material-ui/core/TextField/TextField';
import FormControl from '@material-ui/core/FormControl';
import React from 'preact/compat';
import Drawer from '../Drawer/Drawer';
import { ResolvedDisplayTicket } from '../DisplayTicket/DisplayTicket';

export default class TicketLoader extends Component {
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

  showTicket = async () => {
    this.setState({ showTicket: true });
  };

  render() {
    const { open } = this.state;
    const { checkedNumbers, ticketNumber, showTicket } = this.state;
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
            <button
              type="button"
              className="ml-3 btn btn-primary"
              onClick={this.showTicket}
            >
              Load ticket
            </button>
          </div>
          <div className="mt-5" />
          {showTicket && (
            <ResolvedDisplayTicket
              checkedNumbers={checkedNumbers}
              fixedSize
              ticketId={ticketNumber}
            />
          )}
        </Drawer>
      </span>
    );
  }
}
