import { Component } from 'preact';
import { getGame } from '../../api';
import Loader from '../Loader/Loader';

export default class RecentNumbers extends Component {
  state = {
    numbers: [],
    loading: false,
  };

  async componentDidMount() {
    await this.updateElapsedNumbers();
    this.interval = setInterval(this.updateElapsedNumbers, 2 * 1000);
  }

  componentWillUnmount() {
    window.clearInterval(this.interval);
  }

  updateElapsedNumbers = async () => {
    this.setState({ loading: true });
    const game = await getGame(this.props.gameId);
    const newNumbers = game.elapsedNumbers.slice(-3).reverse();
    this.setState({ numbers: newNumbers, loading: false });
  };

  render() {
    const { numbers, loading } = this.state;
    return (
      <div className="d-inline-flex align-items-center">
        <div className="mr-2">Recent numbers -</div>
        <div
          style={{ width: 50 }}
          className="numbers-table__box numbers-table__box--active numbers-table__box--current mr-3"
        >
          <span>{numbers[0] || '-'}</span>
        </div>
        <div
          style={{ width: 50 }}
          className="numbers-table__box numbers-table__box--active numbers-table__box--last mr-3"
        >
          <span>{numbers[1] || '-'}</span>
        </div>
        <div
          style={{ width: 50 }}
          className="numbers-table__box numbers-table__box--active mr-3"
        >
          <span>{numbers[2] || '-'}</span>
        </div>
        {loading && <Loader />}
      </div>
    );
  }
}
