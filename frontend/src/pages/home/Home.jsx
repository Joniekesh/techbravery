import { Link } from "react-router-dom";
import Features from "../../components/features/Features";
import Welcome from "../../components/welcome/Welcome";
import "./home.scss";

const Home = () => {
  return (
    <div className="home">
      <div className="homeContainer">
        <div className="heroText">
          <p className="title">
            <span>TechBravery:</span>
            <br />
            Delivering Next-Level Software Solutions!
          </p>
          <Link to="/quote">
            <button>Get a Quote</button>
          </Link>
        </div>
        <div className="heroImg">
          <img src="/assets/bg2.jpg" alt="" />
        </div>
      </div>
      <Welcome />
      {/* <Features /> */}
    </div>
  );
};

export default Home;
