import { Component } from 'preact';
import { shuffle } from '../utils/shuffle';
import { last } from '../utils/last';
import NumbersTable from './NumbersTable/NumbersTable';
import { NumberBanner } from './NumberBanner/NumberBanner';
import IntroModal from './IntroModal/IntroModal';
import PrizeTable from './PrizeTable/PrizeTable';
import WinnersTable from './WinnersTable/WinnersTable';
import bingoNumberWords from '../constants/phrases';

function getRandomizedNumbers() {
	let numArray = [];
	for (let i = 1; i <= 90; i++) { numArray.push(i); }
	return shuffle(numArray);
}

function getInitialState() {
	let randomizedNumbers = getRandomizedNumbers();
	return {
		numbers: randomizedNumbers,
		usedNumbers: [],
		started: false,
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
}


export default class App extends Component {
	state = getInitialState();
	
	generateNumber = () => {
		let { numbers, usedNumbers } = this.state;
		this.setState({
			numbers: numbers.slice(0, numbers.length - 1),
			usedNumbers: usedNumbers.concat(last(numbers))
		});
	};
	
	start = () => {
		window.onbeforeunload = function(e) {
			e = e || window.event;
			let returnString = 'Are you sure?';
			if (e) {
				e.returnValue = returnString;
			}
			return returnString;
		};
		this.setState({ started: true });
		this.generateNumber();
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
	
	renderContent() {
		const { numbers, usedNumbers, started, prizes } = this.state;
		const currentNumber = last(usedNumbers);
		
		if (!started) {
			return (<>
				{<IntroModal title="Tambola">
					<div className="row">
						<div className="col-12 col-sm-12 col-md-6">
							<PrizeTable prizes={prizes} />
						</div>
						<div className="col-12 col-sm-12 col-md-6 d-none d-sm-none d-md-block">
							<div className="mb-5" />
							<p className="h2">
								Kre shuru?
							</p>
							<div className="mb-5" />
							<br />
							<button type="button" onClick={this.start}
								className="btn btn-primary btn-lg mx-auto w-50"
							>Start
							</button>
						</div>
					</div>
				</IntroModal>}
			</>);
		}
		
		if (!numbers.length) {
			return (<IntroModal title={<span>Katha samaapt! <br /><br /> Aaj k vijeta</span>}>
				<WinnersTable prizes={prizes} onChange={this.onWinnerChange} />
			</IntroModal>);
		}
		
		return (<div className="row">
			<div className="col col-sm-6 border-right">
				<NumbersTable numbers={usedNumbers} />
			</div>
			<div className="col col-sm-6 d-flex align-items-center flex-column">
				<p className="w-100 h2 text-center text-primary mb-2">'{bingoNumberWords[currentNumber - 1]}'</p>
				<NumberBanner number={currentNumber} />
				<div className="mb-4" />
				<button className="btn btn-lg btn-primary" onClick={this.generateNumber}>
					Tambola bhyi Tambola
				</button>
				<hr className="w-100" />
				<div className="w-100">
					<WinnersTable prizes={prizes} onChange={this.onWinnerChange} />
				</div>
			</div>
		</div>);
	}
	
	render() {
		return (
			<div id="app" className="container-fluid p-4">
				{this.renderContent()}
			</div>
		);
	}
}
