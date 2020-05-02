import { Component } from 'preact';
import shuffle from '../utils/shuffle';
import last from '../utils/last';
import NumbersTable from '../components/NumbersTable/NumbersTable';
import NumberBanner from '../components/NumberBanner/NumberBanner';
import IntroModal from '../components/IntroModal/IntroModal';
import WinnersTable from '../components/WinnersTable/WinnersTable';
import bingoNumberWords from '../constants/phrases';
import TicketLoader from '../components/TicketLoader/TicketLoader';

function getRandomizedNumbers() {
  const numArray = [];
  for (let i = 1; i <= 90; i++) {
    numArray.push(i);
  }
  return shuffle(numArray);
}

function getInitialState() {
  const randomizedNumbers = getRandomizedNumbers();
  return {
    numbers: randomizedNumbers.slice(0, randomizedNumbers.length - 1),
    usedNumbers: [last(randomizedNumbers)],
  };
}

export default class Game extends Component {
  state = getInitialState();

  componentDidMount() {
    window.onbeforeunload = function (e) {
      e = e || window.event;
      const returnString = 'Are you sure?';
      if (e) {
        e.returnValue = returnString;
      }
      return returnString;
    };
  }

  generateNumber = () => {
    const { numbers, usedNumbers } = this.state;
    this.setState({
      numbers: numbers.slice(0, numbers.length - 1),
      usedNumbers: usedNumbers.concat(last(numbers)),
    });
  };

  render() {
    const { numbers, usedNumbers } = this.state;
    const { onWinnerChange, prizes } = this.props;
    const currentNumber = last(usedNumbers);

    if (!numbers.length) {
      return (
        <IntroModal
          title={
            <span>
              Katha samaapt! <br />
              <br /> Aaj k vijeta
            </span>
          }
        >
          <WinnersTable prizes={prizes} onChange={this.onWinnerChange} />
        </IntroModal>
      );
    }

    return (
      <div className="row">
        <div className="col col-sm-6 border-right">
          <NumbersTable numbers={usedNumbers} />
        </div>
        <div className="col col-sm-6 d-flex align-items-center flex-column">
          <div className="ticketLoader__cont">
            <TicketLoader />
          </div>
          <p className="w-100 h2 text-center text-primary mb-2">
            &apos;{bingoNumberWords[currentNumber - 1]}&apos;
          </p>
          <NumberBanner number={currentNumber} />
          <div className="mb-4" />
          <button
            type="button"
            className="btn btn-lg btn-primary"
            onClick={this.generateNumber}
          >
            Tambola bhyi Tambola
          </button>
          <hr className="w-100" />
          <div className="w-100">
            <WinnersTable prizes={prizes} onChange={onWinnerChange} />
          </div>
        </div>
      </div>
    );
  }
}
