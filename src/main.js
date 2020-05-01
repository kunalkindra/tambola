import { Component } from 'preact';

import Ticket from './pages/Ticket';
import Intro from './pages/Intro';
import Game from './pages/Game';
import Router from 'preact-router';
import { createHashHistory } from 'history';

export default class Main extends Component {
	state = {
		prizes: [{
			id: 1,
			name: 'Saare corners',
			amount: 30,
			winner: ''
		}, {
			id: 2,
			name: 'Quick 5',
			amount: 20,
			winner: ''
		}, {
			id: 3,
			name: 'Upar alli line',
			amount: 30,
			winner: ''
		}, {
			id: 4,
			name: 'Beech aali line',
			amount: 30,
			winner: ''
		}, {
			id: 5,
			name: 'Nichli line',
			amount: 30,
			winner: ''
		}, {
			id: 6,
			name: 'Full house',
			amount: 70,
			winner: ''
		}, {
			id: 7,
			name: 'Fir se full house',
			amount: 50,
			winner: ''
		}, {
			id: 8,
			name: 'Ek aur full house',
			amount: 30,
			winner: ''
		}, {
			id: 9,
			name: 'Muflis',
			amount: 50,
			winner: ''
		}]
	};

	onWinnerChange = (id, name) => {
		let updatedPrizes = this.state.prizes.map((p) => {
			if (p.id === id) {
				return { ...p, winner: name };
			}
			return p;
		});
		
		this.setState({ prizes: updatedPrizes });
	};
	
	render() {
		return (
			<div id="app">
				<div id="app" className="container-fluid p-4">
					<Router history={createHashHistory()}>
						<Intro path="/" prizes={this.state.prizes} />
						<Game path="/game" prizes={this.state.prizes} onWinnerChange={this.onWinnerChange} />
						<Ticket path="/ticket" />
					</Router>
				</div>
			</div>
		);
	}
}
