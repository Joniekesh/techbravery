import { useNavigate } from "react-router-dom";
import "./hero.scss";

const Hero = () => {
  const navigate = useNavigate();

  return (
    <div className="hero">
      <div className="hero-container">
        <div className="texts">
          <span className="big-text">TechBravery</span>
          <div className="small-texts">
            <span className="middle">
              <span className="inner">Delivering</span> Next-Level
            </span>
            <span className="bottom">Software Solutions!</span>
          </div>
        </div>
        <button onClick={() => navigate("/quote")} className="get-quote">
          Get a Quote
        </button>
      </div>
    </div>
  );
};

export default Hero;
