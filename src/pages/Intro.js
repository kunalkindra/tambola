import { Component } from 'preact';
import PrizeTable from '../components/PrizeTable/PrizeTable';
import IntroModal from '../components/IntroModal/IntroModal';
import { Link } from 'preact-router/match';
import NewTicketLink from '../components/NewTicketLink/NewTicketLink';
import { CurrentTicket } from '../utils/CurrentTicket';
import { route } from 'preact-router';
import { ROUTES } from '../constants/routes';

export default class Intro extends Component {
	componentDidMount() {
		if (CurrentTicket.isValid()) {
			route(ROUTES.TICKET(CurrentTicket.getId()));
		}
	}
	
	render() {
		let { prizes } = this.props;
		return (
			<>
				<div className="row d-md-none">
					<IntroModal title="Welcome!">
						<div className="text-center">
							<p>To start playing Tambola, please click on the button below to get your ticket.</p>
							<div className="mt-4" />
							<br />
							<NewTicketLink />
						</div>
					</IntroModal>
				</div>
				<div className="d-none d-sm-none d-md-block">
					<IntroModal title="Tambola">
						<div className="row">
							<div className="col-6">
								<PrizeTable prizes={prizes} />
							</div>
							<div className="col-6">
								<div className="mb-5" />
								<p className="h2">
									Kre shuru?
								</p>
								<div className="mb-5" />
								<br />
								<Link
									type="button"
									href={ROUTES.GAME()}
									className="btn btn-primary btn-lg mx-auto w-50"
								>
									Start
								</Link>
							</div>
						</div>
					</IntroModal>
				</div>
			</>
		);
	}
}
