import { Component } from 'preact';
import { shuffle } from '../utils/shuffle';
import { last } from '../utils/last';
import NumbersTable from './NumbersTable/NumbersTable';
import { NumberBanner } from './NumberBanner/NumberBanner';
import IntroModal from './IntroModal/IntroModal';
import PrizeTable from './PrizeTable/PrizeTable';

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
			name: 'Saare corners',
			amount: 50,
			winner: ''
		}, {
			name: 'Quick 5',
			amount: 50,
			winner: ''
		}, {
			name: 'Upar alli line',
			amount: 50,
			winner: ''
		}, {
			name: 'Beech aali line',
			amount: 50,
			winner: ''
		}, {
			name: 'Nichli line',
			amount: 50,
			winner: ''
		}, {
			name: 'Full house',
			amount: 100,
			winner: ''
		}, {
			name: 'Fir se full house',
			amount: 80,
			winner: ''
		}, {
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
		this.setState({ started: true });
		this.generateNumber();
	};
	
	render() {
		const { usedNumbers, started, prizes } = this.state;
		const currentNumber = last(usedNumbers);
		return (
			<div id="app" className="container-fluid p-4">
				{!started ? (
					<IntroModal onStart={this.start}>
						<div className="row">
							<div className="col">
								<PrizeTable prizes={prizes} />
							</div>
							<div className="col d-flex flex-column justify-content-center">
								<p className="h2">
							Kre shuru?
								</p>
								<div className="mb-5" />
								<br />
								<button type="button" onClick={this.start} className="btn btn-primary btn-lg mx-auto w-50">Start</button>
							</div>
						</div>
					</IntroModal>
				) : (
					<div className="row">
						<div className="col col-sm-7 border-right">
							<NumbersTable numbers={usedNumbers} />
						</div>
						<div className="col col-sm-5 d-flex align-items-center flex-column">
							<NumberBanner number={currentNumber} />
							<div className="mb-4" />
							<button className="btn btn-lg btn-primary" onClick={this.generateNumber}>
								Tambola bhyi Tambola
							</button>
							<div className="mb-4" />
							<hr className="w-100" />
						</div>
					</div>
				)}
			
			</div>
		);
	}
}
