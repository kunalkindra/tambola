const Session = {
  get() {
    return JSON.parse(localStorage.getItem('user'));
  },
  set(user) {
    localStorage.setItem('user', JSON.stringify(user));
  },
};

export default Session;
