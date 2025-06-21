import "./welcome.scss";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
import { items } from "../../utils/data";
import { Link } from "react-router-dom";
// ..
AOS.init({
  // throttleDelay: 300,
  duration: 2000,
});

const Welcome = () => {
  return (
    <div className="welcome">
      <h2>Why Choose Us?</h2>
      <div className="items">
        {items.map((item, i) => (
          <div
            className={i % 2 === 0 ? "item reverse" : "item"}
            data-aos={i % 2 === 0 ? "zoom-in" : "fade-right"}
            key={item.id}
          >
            <div className="right">
              <div className="img-container">
                <img src={item.img} alt="" />
              </div>
            </div>
            <div className="left">
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="summary">
        <p>
          Don't settle for a mediocre online presence. Partner with Tech Bravery
          Software Solutions and take your business to new heights. Contact us
          today for a free consultation and let us help you leave a lasting
          impression in the digital world!
        </p>
        <Link to="/quote" className="btn">
          <button>Get a Quote</button>
        </Link>
      </div>
    </div>
  );
};

export default Welcome;
