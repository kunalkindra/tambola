export default function IntroModal({ children, title }) {
  return (
    <div
      className="modal fade show intro-modal"
      tabIndex="-1"
      role="dialog"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div
        className="modal-dialog modal-dialog-centered modal-lg px-3"
        role="document"
      >
        <div className="modal-content">
          <div className="modal-body text-center py-4">
            <h1 className="mb-4">{title}</h1>
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}
