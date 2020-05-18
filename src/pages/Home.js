import { Component } from 'preact';
import { route } from 'preact-router';
import { createGame } from '../api';
import { ROUTES } from '../constants/routes';

export default class Home extends Component {
  onNewGame = async () => {
    const { _id: id } = await createGame();
    route(ROUTES.GAME(id));
  };

  render() {
    return (
      <div className="row">
        <div className="col-sm-6 bg-info text-light p-5 d-flex align-items-center">
          <h1 className="text-center w-100">Tambola!</h1>
        </div>
        <div className="col-sm-6 p-5 text-center">
          <button
            type="button"
            className="btn-primary btn-lg w-50"
            onClick={this.onNewGame}
          >
            New Game
          </button>
          <div className="mb-5" />
          <button type="button" className="btn-primary btn-lg w-50">
            Join a game
          </button>
        </div>
      </div>
    );
  }
}
