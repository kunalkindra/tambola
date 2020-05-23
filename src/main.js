import { Component } from 'preact';
import React from 'preact/compat';
import Router from 'preact-router';
import { createHashHistory } from 'history';

import Ticket from './pages/Ticket';
import Game from './pages/Game';
import Session from './session';
import Home from './pages/Home';
import Lobby from './pages/Lobby';
import Signup from './components/SignUp/Signup';
import Join from './pages/Join';

export default class Main extends Component {
  state = {
    prizes: [
      {
        id: 1,
        name: 'Saare corners',
        amount: 30,
        winner: '',
      },
      {
        id: 2,
        name: 'Quick 5',
        amount: 20,
        winner: '',
      },
      {
        id: 3,
        name: 'Upar alli line',
        amount: 30,
        winner: '',
      },
      {
        id: 4,
        name: 'Beech aali line',
        amount: 30,
        winner: '',
      },
      {
        id: 5,
        name: 'Nichli line',
        amount: 30,
        winner: '',
      },
      {
        id: 6,
        name: 'Full house',
        amount: 70,
        winner: '',
      },
      {
        id: 7,
        name: 'Fir se full house',
        amount: 50,
        winner: '',
      },
      {
        id: 8,
        name: 'Ek aur full house',
        amount: 30,
        winner: '',
      },
      {
        id: 9,
        name: 'Muflis',
        amount: 50,
        winner: '',
      },
    ],
  };

  resetWinners = () => {
    this.setState({
      prizes: this.state.prizes.map((p) => ({ ...p, winner: '' })),
    });
  };

  onPrizeChange = (id, prop, value) => {
    const updatedPrizes = this.state.prizes.map((p) => {
      if (p.id === id) {
        return { ...p, [prop]: value };
      }
      return p;
    });

    this.setState({ prizes: updatedPrizes });
  };

  render() {
    const { prizes } = this.state;
    return (
      <div id="app">
        <div id="app" className="container-fluid p-4">
          {!Session.get() ? (
            <Signup />
          ) : (
            <Router history={createHashHistory()}>
              <Home path="/" />
              <Game
                path="/game/:id"
                prizes={prizes}
                onPrizeChange={this.onPrizeChange}
              />
              <Ticket path="/ticket" />
              <Lobby path="/lobby/:gameId" />
              <Join path="/join" />
              <Join path="/join/:gameId" />
            </Router>
          )}
        </div>
      </div>
    );
  }
}
