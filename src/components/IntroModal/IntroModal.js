export default function IntroModal({ onStart }) {
	return (
		<div className="modal fade show intro-modal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel"
			aria-hidden="true"
		>
			<div className="modal-dialog modal-dialog-centered" role="document">
				<div className="modal-content">
					<div className="modal-body text-center py-5">
						<p className="h1">
						Kre fir Tambola shuru?
						</p>
						<div className="mb-5" />
						<br />
						<button type="button" onClick={onStart} className="btn btn-primary btn-lg mx-auto w-50">Start</button>
					</div>
				</div>
			</div>
		</div>
	);
}
