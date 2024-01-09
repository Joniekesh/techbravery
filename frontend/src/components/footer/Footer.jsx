import "./footer.scss";
import { FaFacebook, FaYoutube } from "react-icons/fa";
import { FaSquareXTwitter, FaLinkedin } from "react-icons/fa6";
import { GrInstagram } from "react-icons/gr";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer">
      <div className="usefullinks">Footer</div>
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
