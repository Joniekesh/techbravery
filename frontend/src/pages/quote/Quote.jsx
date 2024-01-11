import "./quote.scss";

const Quote = () => {
  return (
    <div className="quote">
      <div className="container">
        <div className="left">
          <h2>What will be the next step?</h2>
          <p>
            You are one step closer to build your perfect product and enhance
            your online presence
          </p>
          <ul>
            <li>
              <div>
                <p>Monday</p>
                <time>12:00 pm</time>
              </div>
            </li>
            <li>
              <div>
                <p>Tuesday</p>
                <time>1:00 pm</time>
              </div>
            </li>
            <li>
              <div>
                <p>Wednesday</p>
                <time>12:00 pm</time>
              </div>
            </li>
          </ul>
        </div>
        <div className="right">right</div>
      </div>
    </div>
  );
};

export default Quote;
