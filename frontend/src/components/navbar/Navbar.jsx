import "./navbar.scss";
import { links } from "../../utils/links";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import NavLink from "../navLink/NavLink";
import { FaArrowRight } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import Menu from "../menu/Menu";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../redux/actions/AuthAction";

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const { currentUser } = useSelector((state) => state.auth);

  const dispatch = useDispatch();

  const [width, setWidth] = useState(window.innerWidth);
  const [height, setHeight] = useState(window.innerHeight);

  const updateDimensions = () => {
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
  };
  useEffect(() => {
    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  }, []);

  const handleLogout = () => {
    dispatch(logout());
  };

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
      <div className="right">
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
            onClick={() => setOpenMenu((prev) => !prev)}
          >
            X
          </span>
        ) : (
          <span className="cancel" onClick={() => setOpenMenu((prev) => !prev)}>
            <GiHamburgerMenu />
          </span>
        )}
        {currentUser && (
          <button className="logoutBtn" onClick={handleLogout}>
            Logout{" "}
          </button>
        )}
      </div>
      {openMenu && <Menu setOpenMenu={setOpenMenu} width={width} />}
    </div>
  );
};

export default Navbar;
