import PrizeTable from '../components/PrizeTable/PrizeTable';
import IntroModal from '../components/IntroModal/IntroModal';
import { Link } from 'preact-router/match';

export default function Intro({ prizes }) {
	return (
		<IntroModal title="Tambola">
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
					<Link type="button" href="/game"
						className="btn btn-primary btn-lg mx-auto w-50"
					>Start
					</Link>
				</div>
			</div>
		</IntroModal>
	);
}
