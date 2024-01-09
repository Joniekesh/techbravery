import "./menu.scss";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
import { FaArrowRight } from "react-icons/fa";
import { IoHome } from "react-icons/io5";
import { menuData } from "../../utils/menuData";
import { RxCaretDown } from "react-icons/rx";
import { useState } from "react";
import { Link } from "react-router-dom";

const Menu = ({ setOpenMenu }) => {
  const [toggle, setToggle] = useState(false);

  return (
    <div className="menu">
      <div className="container" data-aos="fade-left">
        <div className="top">
          <span className="homeIcon">
            <IoHome />
          </span>
          <span>TechBravery</span>
        </div>
        <div className="menuItems">
          {menuData.map((item) => (
            <div className="itemsContainer" key={item.id}>
              <div className="titleContainer">
                <h2 className="title">{item.name}</h2>
                <span className="icon" onClick={() => setToggle(!toggle)}>
                  <RxCaretDown />
                </span>
              </div>
              {!toggle && (
                <>
                  {item.data.map((inner) => (
                    <Link
                      onClick={() => setOpenMenu(false)}
                      to={inner.url}
                      className="innerTitle"
                      key={inner.id}
                    >
                      {inner.name}
                      {inner.position}
                      <img src={inner.pic} alt="" />
                    </Link>
                  ))}
                </>
              )}
            </div>
          ))}
        </div>
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
