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
        <div className="linksContainer">
          <div className="items">
            <p>Technologies</p>
            {technologies.map((technology) => (
              <div key={technology.id}>
                <div className="techList">
                  {technology.data.map((item) => (
                    <Link to="/technology" className="item-name" key={item.id}>
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <div className="items">
            <p>Industries</p>
            {industries.map((industry) => (
              <span className="item-name" key={industry.id}>
                {industry.name}
              </span>
            ))}
          </div>
          <div className="items">
            <p>Services</p>
            {services.map((service) => (
              <Link className="item-name" to="/services" key={service.id}>
                {service.name}
              </Link>
            ))}
          </div>
          <div className="items">
            <p>Our Works</p>
            {works.map((work) => (
              <Link to="/project" className="item-name" key={work.id}>
                {work.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
      <div className="socials">
        <div className="sociallinks">
          <a href="http://facebook.com" target="_blank">
            <FaFacebook />
          </a>
          <a href="http://twitter.com" target="_blank">
            <FaSquareXTwitter />
          </a>
          <a href="http://instagram.com" target="_blank">
            <GrInstagram />
          </a>
          <a href="http://linkedin.com" target="_blank">
            <FaLinkedin />
          </a>
          <a href="http://youtube.com" target="_blank">
            <FaYoutube />
          </a>
        </div>
        <span className="privacy">Privacy Policy 2024 All Rights Reserved</span>
      </div>
    </div>
  );
};

export default Footer;
