import { Component } from 'preact';

import Ticket from './pages/Ticket';

export default class Main extends Component {
	state = {
		prizes: [{
			id: 1,
			name: 'Saare corners',
			amount: 50,
			winner: ''
		}, {
			id: 2,
			name: 'Quick 5',
			amount: 50,
			winner: ''
		}, {
			id: 3,
			name: 'Upar alli line',
			amount: 50,
			winner: ''
		}, {
			id: 4,
			name: 'Beech aali line',
			amount: 50,
			winner: ''
		}, {
			id: 5,
			name: 'Nichli line',
			amount: 50,
			winner: ''
		}, {
			id: 6,
			name: 'Full house',
			amount: 100,
			winner: ''
		}, {
			id: 7,
			name: 'Fir se full house',
			amount: 80,
			winner: ''
		}, {
			id: 8,
			name: 'Ek aur full house',
			amount: 70,
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
					<Ticket />
				</div>
			</div>
		);
	}
}
