import "./summary.scss";

const Summary = ({ setOpenSummary, inputs }) => {
  console.log(inputs);
  return (
    <div className="quote-summary">
      <div className="summary-wrapper">
        <h2>Your Proposal Summary</h2>
        <span className="cancel-btn" onClick={() => setOpenSummary(false)}>
          x
        </span>
        <div className="summary-items">
          <div className="summary-item">
            <span className="si-key">Full Name:</span>
            <span className="si-value">{inputs?.fullName}</span>
          </div>
          <div className="summary-item">
            <span className="si-key">Company Name:</span>
            <span className="si-value">{inputs?.company}</span>
          </div>
          <div className="summary-item">
            <span className="si-key">Email:</span>
            <span className="si-value">{inputs?.email}</span>
          </div>
          <div className="summary-item">
            <span className="si-key">Phone Number:</span>
            <span className="si-value">{inputs?.phone}</span>
          </div>
          <div className="summary-item">
            <span className="si-key">App Category:</span>
            <span className="si-value">{inputs?.industry}</span>
          </div>

          <div className="summary-item">
            <span className="si-key">Frontend Framework:</span>
            <span className="si-value">{inputs?.selectedFrontend}</span>
          </div>
          <div className="summary-item">
            <span className="si-key">Database:</span>
            <span className="si-value">{inputs?.selectedDatabase}</span>
          </div>
          <div className="summary-item">
            <span className="si-key">Cloud Platform:</span>
            <span className="si-value">{inputs?.selectedCloud}</span>
          </div>
          <div className="summary-item">
            <span className="si-key">Backend Stacks:</span>
            {inputs?.backendStacks.map((b) => (
              <span key={b} className="si-value">
                {b}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Summary;
