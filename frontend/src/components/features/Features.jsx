import "./features.scss";
import { features } from "../../utils/features";

const Features = () => {
  return (
    <div className="features">
      <h1>Featured Projects</h1>
      <div className="items">
        {features.map((feature) => (
          <div className="feature animate__animated animate__slideInRight">
            <h2>{feature.title}</h2>
            <p>{feature.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Features;
