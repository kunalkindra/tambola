const SavedTicket = {
  getTicketId(id) {
    return `ticket-${id}`;
  },
  read(id) {
    const savedNumbers = JSON.parse(localStorage.getItem(this.getTicketId(id)));
    return savedNumbers || [];
  },
  update(id, checkedNumbers) {
    localStorage.setItem(this.getTicketId(id), JSON.stringify(checkedNumbers));
  },
};

export default SavedTicket;
