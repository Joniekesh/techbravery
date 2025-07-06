import "./welcome.scss";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
import { items } from "../../utils/data";
import { Link } from "react-router-dom";
import { useEffect, useRef } from "react";
// ..
AOS.init({
  // throttleDelay: 300,
  duration: 2000,
});

const Welcome = () => {
  const boxRef = useRef(null);

  useEffect(() => {
    const boxElement = boxRef.current;

    if (!boxElement) return;

    const updateAnimation = () => {
      const currentAngle = parseFloat(
        boxElement.style.getPropertyValue("--angle") || "0"
      );

      const newAngle = (currentAngle + 0.5) % 360;

      boxElement.style.setProperty("--angle", `${newAngle}deg`);
      requestAnimationFrame(updateAnimation);
    };
    requestAnimationFrame(updateAnimation);
  }, []);

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
        <p
          style={{
            "--angle": "0deg",
            "--border-color":
              "linear-gradient(var(--angle),#4169e1,#e6a960,#5f9261,orangered,#ffe86e,#9747ff,teal,orange,#4b0082)",
          }}
          ref={boxRef}
        >
          Don't settle for a mediocre online presence. Contact us today for a
          free consultation and let us help you leave a lasting impression in
          the digital world!
        </p>
        <Link to="/quote" className="btn">
          <button>Get a Quote</button>
        </Link>
      </div>
    </div>
  );
};

export default Welcome;
