import { Component } from 'preact';
import { shuffle } from '../utils/shuffle';
import { last } from '../utils/last';
import NumbersTable from './NumbersTable/NumbersTable';
import { NumberBanner } from './NumberBanner/NumberBanner';
import IntroModal from './IntroModal/IntroModal';

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
		started: false
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
		const { usedNumbers, started } = this.state;
		const currentNumber = last(usedNumbers);
		return (
			<div id="app" className="container-fluid p-4">
				{!started ? (
					<IntroModal onStart={this.start} />
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
