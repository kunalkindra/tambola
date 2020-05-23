import { Component } from 'preact';
import { route } from 'preact-router';

import { joinGame } from '../api';
import { ROUTES } from '../constants/routes';

class Join extends Component {
  static async joinGame(gameId) {
    await joinGame(gameId);
    route(ROUTES.LOBBY(gameId));
  }

  state = {
    gameId: '',
  };

  async componentDidMount() {
    if (this.props.gameId) {
      await Join.joinGame(this.props.gameId);
    }
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleJoin = async () => {
    await Join.joinGame(this.state.gameId);
  };

  render() {
    return (
      <form onSubmit={this.handleJoin} className="text-center">
        <input
          type="text"
          name="gameId"
          value={this.state.gameId}
          onChange={this.handleChange}
          placeholder="Game id"
          className="form-control form-control-lg w-50 mx-auto mb-4"
        />
        <button
          type="submit"
          className="btn btn-primary btn-lg"
          onClick={this.handleJoin}
        >
          Join game
        </button>
      </form>
    );
  }
}

export default Join;
