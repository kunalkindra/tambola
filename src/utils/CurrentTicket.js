export const CurrentTicket = {
	update(id) {
		localStorage.setItem('currentTicket', JSON.stringify({ id, time: new Date().getTime() }));
	},
	reset() {
		localStorage.removeItem('currentTicket');
	},
	read() {
		return JSON.parse(localStorage.getItem('currentTicket'));
	},
	getId() {
		if (this.isValid())
			return this.read().id;
		let ticketId = Math.floor(Math.random() * 99999);
		return ticketId;
	},
	isValid() {
		const savedTicket = this.read();
	    if (!savedTicket || !savedTicket.time) {
	        return false;
		}
	 
		const currentTime = new Date().getTime();
		let HOUR = 60 * 60 * 1000;
		return currentTime - savedTicket.time < 2 * HOUR;
	}
};
