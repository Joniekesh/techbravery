import "./testimonials.scss";
import Slider from "../slider/Slider";

const Testimonials = () => {
  return (
    <div className="testimonials">
      <div className="container">
        <div className="top">
          <h1>What our Clients say about us!</h1>
          <p className="t-paragraph">
            Our clients send us bunch of smiles with our services and we love
            them.
          </p>
        </div>
      </div>
      <Slider />
      <div className="slanted-line"></div>
    </div>
  );
};

export default Testimonials;
