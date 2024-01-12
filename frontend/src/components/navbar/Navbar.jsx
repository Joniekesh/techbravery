import "./navbar.scss";
import { links } from "../../utils/links";
import { useState } from "react";
import { Link } from "react-router-dom";
import NavLink from "../navLink/NavLink";
import { FaArrowRight } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import Menu from "../menu/Menu";

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <div className="navbar">
      <Link to="/" className="logo">
        <h2>TechBravery</h2>
      </Link>
      <div className="links">
        {links.map((link) => (
          <NavLink link={link} key={link.id} />
        ))}
      </div>
      <Link to="/quote" className="rightContainer">
        <button className="quoteBtn">
          <div className="text">Get a Quote</div>
          <div className="arrow">
            <FaArrowRight />
          </div>
        </button>
      </Link>
      {openMenu ? (
        <span
          className="hamburger"
          style={{ zIndex: 1100, fontSize: "24px", cursor: "pointer" }}
          onClick={() => setOpenMenu((prev) => !prev)}
        >
          X
        </span>
      ) : (
        <span
          className="hamburger"
          style={{ zIndex: 1100, fontSize: "24px", cursor: "pointer" }}
          onClick={() => setOpenMenu((prev) => !prev)}
        >
          <GiHamburgerMenu />
        </span>
      )}
      {openMenu && <Menu setOpenMenu={setOpenMenu} />}
    </div>
  );
};

export default Navbar;
