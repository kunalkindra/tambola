import PrizeTable from '../components/PrizeTable/PrizeTable';
import IntroModal from '../components/IntroModal/IntroModal';
import { Link } from 'preact-router/match';
import NewTicketLink from '../components/NewTicketLink/NewTicketLink';

export default function Intro({ prizes }) {
	return (
		<>
			<div className="row d-md-none">
				<IntroModal title="Welcome!">
					<div className="text-center">
						<p className="h5">To start playing Tambola, please click on the button below to get your ticket.</p>
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
								href="/game"
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
