import "./navbar.scss";
import { links } from "../../utils/links";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import NavLink from "../navLink/NavLink";
import { GiHamburgerMenu } from "react-icons/gi";
import Menu from "../menu/Menu";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../redux/actions/AuthAction";
import {
  FaArrowRight,
  FaCaretDown,
  FaUserTie,
  FaShoppingCart,
} from "react-icons/fa";
import { IoNotifications } from "react-icons/io5";
import { RiLogoutCircleRLine } from "react-icons/ri";
import { technologies } from "../../utils/menuData";
import ThemeSwitcher from "../themeSwitcher/ThemeSwitcher";
import QuoteBtn from "../quoteBtn/QuoteBtn";

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const [toggle, setToggle] = useState(false);
  const { currentUser } = useSelector((state) => state.auth);

  const dispatch = useDispatch();
  const navigate = useNavigate();

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
    setToggle((prev) => !prev);
    navigate("/");
  };

  return (
    <div className="navbar">
      <Link to="/" className="logo">
        <img src="/logo8.jpg" alt="" />
      </Link>
      <div className="links">
        {links.map((link, index) => (
          <NavLink link={link} key={link.id} index={index} />
        ))}
      </div>
      <div className="right">
        <div className="quote-component111">
          <QuoteBtn />
        </div>

        {currentUser ? (
          <div className="authenticated">
            <div
              className="dropdown"
              onClick={() => setToggle((prev) => !prev)}
            >
              <img src="/myprofilepic.jpg" alt="" />
              <span className="caret">
                <FaCaretDown />
              </span>
            </div>
            <div className="notification">
              <span className="icon">
                <IoNotifications />
              </span>
              <span className="count">3</span>
            </div>
          </div>
        ) : (
          <Link to="/register">
            <button className="authBtn">Sign In</button>
          </Link>
        )}
        <div className="theme-switch">
          <ThemeSwitcher />
        </div>

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
      </div>
      {toggle && (
        <>
          <div className="dropdownMenu">
            <Link
              to="/Profile"
              className="group"
              onClick={() => setToggle((prev) => !prev)}
            >
              <span className="icon">
                <FaUserTie />
              </span>
              <span className="text">Profile</span>
            </Link>
            <Link
              to="/Orders"
              className="group"
              onClick={() => setToggle((prev) => !prev)}
            >
              <span className="icon">
                <FaShoppingCart />
              </span>
              <span className="text">Orders</span>
            </Link>
            <div className="group logoutBtn" onClick={handleLogout}>
              <span className="icon">
                <RiLogoutCircleRLine />
              </span>
              <span className="text">Logout</span>
            </div>
          </div>
        </>
      )}
      {openMenu && <Menu setOpenMenu={setOpenMenu} width={width} />}
    </div>
  );
};

export default Navbar;
