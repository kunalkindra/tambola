import { Component } from 'preact';
import React from 'preact/compat';
import Router from 'preact-router';
import { createHashHistory } from 'history';

import Ticket from './pages/Ticket';
import Intro from './pages/Intro';
import Game from './pages/Game';
import Session from './session';
import { signUp } from './api';
import Loader from './components/Loader/Loader';

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
    user: null,
  };

  componentDidMount = async () => {
    const user = Session.get();
    if (!user) {
      const newUser = await signUp();
      this.setState({ user: newUser });
      Session.set(user);
      return;
    }
    this.setState({ user });
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
    const { prizes, user } = this.state;
    return (
      <div id="app">
        <div id="app" className="container-fluid p-4">
          {!user ? (
            <Loader />
          ) : (
            <Router history={createHashHistory()}>
              <Intro
                path="/"
                prizes={prizes}
                onPrizeChange={this.onPrizeChange}
                resetWinners={this.resetWinners}
              />
              <Game
                path="/game"
                prizes={prizes}
                onPrizeChange={this.onPrizeChange}
              />
              <Ticket path="/ticket" />
            </Router>
          )}
        </div>
      </div>
    );
  }
}
