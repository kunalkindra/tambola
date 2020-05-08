import { Component } from 'preact';
import { Link, route } from 'preact-router';
import PrizeTable from '../components/PrizeTable/PrizeTable';
import IntroModal from '../components/IntroModal/IntroModal';
import NewTicketLink from '../components/NewTicketLink/NewTicketLink';
import CurrentTicket from '../utils/CurrentTicket';
import { ROUTES } from '../constants/routes';
import CurrentGame from '../utils/CurrentGame';

export default class Intro extends Component {
  componentDidMount() {
    if (CurrentTicket.isValid()) {
      route(ROUTES.TICKET(CurrentTicket.getId()));
    }
  }

  resetAndStartNewGame = () => {
    if (CurrentGame.hasSavedGame()) {
      const result = window.confirm(
        'This will clear the saved game. Are you sure?',
      );
      if (!result) return;
    }
    this.props.resetWinners();
    CurrentGame.reset();
    route(ROUTES.GAME());
  };

  render() {
    const { prizes, onPrizeChange } = this.props;
    return (
      <>
        <div className="row d-lg-none">
          <IntroModal title="Welcome!">
            <div className="text-center">
              <p>
                To start playing Tambola, please click on the button below to
                get your ticket.
              </p>
              <div className="mt-4" />
              <br />
              <NewTicketLink />
            </div>
          </IntroModal>
        </div>
        <div className="d-none d-sm-none d-md-none d-lg-block">
          <IntroModal title="Tambola">
            <div className="row">
              <div className="col-6">
                <PrizeTable prizes={prizes} onPrizeChange={onPrizeChange} />
              </div>
              <div className="col-6">
                <div className="mb-5" />
                <p className="h2">Kre shuru?</p>
                <div className="mb-5" />
                <br />
                <button
                  type="button"
                  onClick={this.resetAndStartNewGame}
                  className="btn btn-primary btn-lg mx-auto w-50"
                >
                  New game
                </button>
                {CurrentGame.hasSavedGame() && (
                  <>
                    <div className="mt-5" />
                    or
                    <div className="mt-5" />
                    <Link
                      href={ROUTES.GAME()}
                      type="button"
                      className="btn btn-secondary btn-lg"
                    >
                      Continue saved game
                    </Link>
                  </>
                )}
              </div>
            </div>
          </IntroModal>
        </div>
      </>
    );
  }
}
