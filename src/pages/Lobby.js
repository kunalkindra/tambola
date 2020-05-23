import React from 'preact/compat';
import { Component } from 'preact';
import { Link, route } from 'preact-router';

import withResolved from '../components/hoc/WithResolved/WithResolved';
import { generateNextNumber, getGame } from '../api';
import Session from '../session';
import { ROUTES } from '../constants/routes';

function Players({ game }) {
  if (!game.players.length) {
    return 'No players in this game yet';
  }
  return (
    <div>
      <h4 className="mb-4">Players in this game</h4>
      {game.players.map((player) => {
        return (
          <div className="rounded p-2 bg-secondary text-light d-inline-block mr-2">
            {player.name}
          </div>
        );
      })}
    </div>
  );
}

class Lobby extends Component {
  handleStartGame = async () => {
    const { game } = this.props;
    const { _id: id } = game;
    await generateNextNumber(id);
    route(ROUTES.GAME(id));
  };

  render() {
    const { game } = this.props;
    const { _id: id } = game;
    if (game.host.id === Session.get().id) {
      return (
        <div>
          <h3>
            All righty! The game is ready. Invite other people to it with this
            link.
          </h3>
          <div className="mb-4" />
          <code>http://localhost:8080/#/join/{id}</code>
          <div className="mb-4" />
          <Players game={game} />
          <div className="mb-4" />
          <button
            type="button"
            onClick={this.handleStartGame}
            className="btn btn-primary btn-lg"
          >
            Start Game
          </button>
        </div>
      );
    }
    return (
      <div>
        <h2>Welcome to {game.host.name}&apos;s tambola game!</h2>
        <div className="mb-4" />
        <Players game={game} />
        <div className="mb-4" />
        <Link href={ROUTES.TICKET(id)} className="btn btn-lg btn-primary">
          Get your ticket
        </Link>
      </div>
    );
  }
}

export default withResolved({
  query: getGame,
  queryArgs: (props) => props.gameId,
  as: 'game',
  loadingProps: {
    message: 'Just a moment - loading the game!',
  },
})(Lobby);
