import "./menu.scss";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
import { FaArrowRight } from "react-icons/fa";

const Menu = () => {
  return (
    <div className="menu">
      <div className="container" data-aos="fade-left">
        Menu Content
        <button className="quoteBtn">
          <div className="text">Get a Quote</div>
          <div className="arrow">
            <FaArrowRight />
          </div>
        </button>
      </div>
    </div>
  );
};

export default Menu;
