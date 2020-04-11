import { Component } from 'preact';
import { shuffle } from '../utils/shuffle';
import { last } from '../utils/last';
import NumbersTable from './NumbersTable/NumbersTable';
import { NumberBanner } from './NumberBanner/NumberBanner';

function getRandomizedNumbers() {
	let numArray = [];
	for (let i = 1; i <= 90; i++) { numArray.push(i) }
	return shuffle(numArray);
}

function getInitialState() {
	let randomizedNumbers = getRandomizedNumbers();
	return {
		numbers: randomizedNumbers.slice(0, randomizedNumbers.length - 1),
		usedNumbers: [last(randomizedNumbers)],
	};
}


export default class App extends Component {
	state = getInitialState();
	
	generateNumber = () => {
		let { numbers, usedNumbers } = this.state;
		this.setState({
			numbers: numbers.slice(0, numbers.length - 1),
			usedNumbers: usedNumbers.concat(last(numbers)),
		})
	};
	
	render() {
		const { usedNumbers } = this.state;
		const currentNumber = last(usedNumbers);
		return (
			<div id="app" className="container-fluid p-4">
				<div className="row">
					<div className="col col-sm-7">
						<NumbersTable numbers={usedNumbers} />
					</div>
					<div className="col col-sm-5 d-flex align-items-center flex-column">
						<NumberBanner number={currentNumber} />
						<div className="mb-4" />
						<button className="btn btn-lg btn-primary" onClick={this.generateNumber}>
							Tambola bhyi Tambola
						</button>
					</div>
				</div>
			
			</div>
		);
	}
}
