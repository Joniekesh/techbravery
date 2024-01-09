import "./navbar.scss";
import { links } from "../../utils/links";
import { useState } from "react";
import { Link } from "react-router-dom";
import NavLink from "../navLink/NavLink";

const Navbar = () => {
  return (
    <div className="navbar">
      <Link to="/" className="logo">
        <h2>TechBravery</h2>
      </Link>
      <div className="links">
        {links.map((link) => (
          <NavLink link={link} key={link.id} />
        ))}
        <button>Get a Quote</button>
      </div>
    </div>
  );
};

export default Navbar;
