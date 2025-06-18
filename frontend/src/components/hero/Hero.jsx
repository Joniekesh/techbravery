import { useNavigate } from "react-router-dom";
import "./hero.scss";

const Hero = () => {
  const navigate = useNavigate();

  return (
    <div className="hero">
      <div className="hero-container">
        <div className="texts">
          <span className="big-text">TechBravery:</span>
          <span className="small-text">
            Delivering Next-Level <br /> Software Solutions!
          </span>
        </div>
        <button onClick={() => navigate("/quote")} className="get-quote">
          Get a Quote
        </button>
      </div>
    </div>
  );
};

export default Hero;
