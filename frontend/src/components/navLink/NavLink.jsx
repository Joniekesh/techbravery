import "./navLink.scss";
import { Link, useLocation } from "react-router-dom";

const NavLink = ({ link }) => {
  const location = useLocation();

  const active = location.pathname;

  return (
    <Link
      to={link.url}
      className={link.url === active ? "link active" : "link"}
    >
      {link.name}
    </Link>
  );
};

export default NavLink;
