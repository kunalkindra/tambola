export const SavedTicket = {
	getTicketId(id) {
		return `ticket-${id}`;
	},
	read(id) {
		let savedNumbers = JSON.parse(localStorage.getItem(this.getTicketId(id)));
		return savedNumbers || [];
	},
	update(id, checkedNumbers) {
		localStorage.setItem(this.getTicketId(id), JSON.stringify(checkedNumbers));
	}
};
