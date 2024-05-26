import "./features.scss";
import { features } from "../../utils/features";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
import { Link, useNavigate } from "react-router-dom";

// ..
AOS.init({
  // throttleDelay: 300,
  duration: 2000,
});

const Features = () => {
  const navigate = useNavigate();

  return (
    <div className="features">
      <div className="top">
        <h1>Featured Projects</h1>
        <button onClick={() => navigate("/project")}>SEE ALL</button>
      </div>
      <div className="items">
        {features.slice(0, 6).map((feature, i) => (
          <Link
            to={`/project/${feature.id}`}
            className="item"
            key={feature.id}
            data-aos={i % 2 === 0 ? "zoom-in" : "fade-right"}
          >
            <div className="itemTop">
              <img src={feature.img} alt="" />
            </div>
            <div className="itemBottom">
              <span>Category: {feature.category}</span>
              <h2>{feature.title}</h2>
              <p>{feature.desc}</p>
              <button>View Details</button>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Features;
