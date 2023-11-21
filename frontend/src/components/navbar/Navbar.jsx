import "./navbar.scss";
import { links } from "../../utils/links";
import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [active, setActive] = useState("Home");

  return (
    <div className="navbar">
      <Link to="/" className="logo">
        <h2>TechBravery</h2>
      </Link>
      <div className="links">
        {links.map((link) => (
          <Link
            to={link.url}
            key={link.id}
            onClick={() => setActive(link.name)}
            className={link.name === active ? "link active" : "link"}
          >
            {link.name}
          </Link>
        ))}
        <button>Get a Quote</button>
      </div>
    </div>
  );
};

export default Navbar;
