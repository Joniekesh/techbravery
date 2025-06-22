import "./summary.scss";

const Summary = ({ setOpenSummary, inputs }) => {
  console.log(inputs);
  return (
    <div className="summary">
      <div className="summary-wrapper">
        <h2>Proposal Summary</h2>
        <span onClick={() => setOpenSummary(false)}>close</span>
      </div>
    </div>
  );
};

export default Summary;
