import "./features.scss";
import { features } from "../../utils/features";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
import { Link, useNavigate } from "react-router-dom";
import { products } from "../../mockData";

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
        {products.slice(0, 6).map((product, i) => (
          <Link
            to={`/product/${product.id}`}
            state={product}
            className="item"
            key={product.id}
            data-aos={i % 2 === 0 ? "zoom-in" : "fade-right"}
          >
            <div className="itemTop">
              <img src={product.img} alt="" />
            </div>
            <div className="itemBottom">
              <span>Category: {product?.platforms}</span>
              <h2>{product.name}</h2>
              <p>
                {product.overview.length > 100
                  ? product.overview.slice(0, 100) + "..."
                  : product.overview}
              </p>
              <button>View Details</button>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Features;
