import "./footer.scss";
import { FaFacebook, FaYoutube } from "react-icons/fa";
import { FaSquareXTwitter, FaLinkedin } from "react-icons/fa6";
import { GrInstagram } from "react-icons/gr";
import { Link } from "react-router-dom";
import {
  industries,
  services,
  technologies,
  works,
} from "../../utils/menuData";

const Footer = () => {
  return (
    <div className="footer">
      <div className="usefullinks">
        <div className="items">
          <p>Technologies</p>
          {technologies.map((technology) => (
            <>
              {technology.data.map((item) => (
                <span key={item.id}>{item.name}</span>
              ))}
            </>
          ))}
        </div>
        <div className="items">
          <p>Industries</p>
          {industries.map((industry) => (
            <span key={industry.id}>{industry.name}</span>
          ))}
        </div>
        <div className="items">
          <p>Services</p>
          {services.map((service) => (
            <span key={service.id}>{service.name}</span>
          ))}
        </div>
        <div className="items">
          <p>Our Works</p>
          {works.map((work) => (
            <span key={work.id}>{work.name}</span>
          ))}
        </div>
      </div>
      <div className="socials">
        <Link to="/">TechBravery</Link>
        <div className="sociallinks">
          <a href="http://facebook.com" target="_blank">
            <FaFacebook />
          </a>
          <a href="http://twitter.com">
            <FaSquareXTwitter />
          </a>
          <a href="http://instagram.com">
            <GrInstagram />
          </a>
          <a href="http://linkein.com">
            <FaLinkedin />
          </a>
          <a href="http://youtube.com">
            <FaYoutube />
          </a>
        </div>
        <span className="privacy">Privacy Policy 2024 All Rights Reserved</span>
      </div>
    </div>
  );
};

export default Footer;
