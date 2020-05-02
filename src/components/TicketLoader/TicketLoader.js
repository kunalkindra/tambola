/* eslint-disable */
import { Component } from 'preact';
import Drawer from '../Drawer/Drawer';
import Loader from '../Loader/Loader';
import DisplayTicket from '../DisplayTicket/DisplayTicket';
import TextField from '@material-ui/core/TextField/TextField';
import FormControl from '@material-ui/core/FormControl';
import { getTicket } from '../../api';

export default class TicketLoader extends Component {
    state = {
    	open: false,
        ticket: null,
        ticketNumber: '',
        checkedNumbers: [],
    };
    handleOpen = () => {
    	this.setState({ open: true });
    };
    handleClose = () => {
    	this.setState({ open: false, ticket: null, ticketNumber: '' });
    };
    handleInputChange = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    };

    getTicket = async () => {
        this.setState({ loadingTicket: true });
        const ticketNumber = Number(this.state.ticketNumber);
        const ticket = await getTicket(ticketNumber);
        this.setState({ ticket, loadingTicket: false })
    };

    renderTicket() {
        const { loadingTicket, ticket, checkedNumbers } = this.state;
        if(loadingTicket) {
            return <div className="text-center"><Loader /></div>
        }
        if(ticket) {
            return <DisplayTicket numbers={ticket.ticket} checkedNumbers={checkedNumbers} fixedSize />
        }
    }

    render() {
    	let open = this.state.open;
    	return (
    		<span>
    			<button className="btn btn-secondary rounded px-3" onClick={this.handleOpen}>!!</button>
    			<Drawer open={open} onClose={this.handleClose}>
                    <div className="d-flex align-items-end">
                        <FormControl>
                            <TextField
                                id="ticketNumber"
                                name="ticketNumber"
                                label="Ticket Number"
                                onChange={this.handleInputChange}
                                value={this.state.ticketNumber} />
                        </FormControl>
                        <button className="ml-3 btn btn-primary" onClick={this.getTicket}>Load ticket</button>
                    </div>
                    <div className="mt-5"/>
                    {this.renderTicket()}
    			</Drawer>
    		</span>
    	);
    }
}
