import "./quoteBtn.scss";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";

const QuoteBtn = () => {
  return (
    <Link to="/quote" className="quote-wrapper">
      <button className="quoteBtn">
        <div className="text">Get a Quote</div>
        <div className="arrow">
          <FaArrowRight />
        </div>
      </button>
    </Link>
  );
};

export default QuoteBtn;
