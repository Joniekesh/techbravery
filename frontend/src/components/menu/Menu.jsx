import "./menu.scss";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
import { FaArrowRight } from "react-icons/fa";
import { IoHome } from "react-icons/io5";
import { services, teams, works } from "../../utils/menuData";
import { RxCaretDown } from "react-icons/rx";
import { useState } from "react";
import { Link } from "react-router-dom";

const Menu = ({ setOpenMenu }) => {
  const [serviceToggle, setServiceToggle] = useState(false);
  const [worksToggle, setWorksToggle] = useState(false);
  const [teamToggle, setTeamToggle] = useState(false);

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
          <div className="item">
            <div className="itemTitle">
              <h2>Our Services</h2>
              <span
                className="icon"
                onClick={() => setServiceToggle((prev) => !prev)}
              >
                <RxCaretDown />
              </span>
            </div>
            {serviceToggle && (
              <>
                {services.map((service) => (
                  <Link key={service.id} to={service.url} className="title">
                    {service.name}
                  </Link>
                ))}
              </>
            )}
          </div>
          <div className="item">
            <div className="itemTitle">
              <h2>Our Works</h2>
              <span
                className="icon"
                onClick={() => setWorksToggle((prev) => !prev)}
              >
                <RxCaretDown />
              </span>
            </div>
            {worksToggle && (
              <>
                {works.map((work) => (
                  <Link key={work.id} className="title">
                    {work.name}
                  </Link>
                ))}
              </>
            )}
          </div>
          <div className="item">
            <div className="itemTitle">
              <h2>Team Members</h2>
              <span
                className="icon"
                onClick={() => setTeamToggle((prev) => !prev)}
              >
                <RxCaretDown />
              </span>
            </div>
            <div className="team">
              {teamToggle && (
                <>
                  {teams.map((team) => (
                    <div className="teamItem" key={team.id}>
                      <img src={team.pic} alt="" />
                      <div className="teamContainer">
                        <span className="name">{team.name}</span>
                        <span className="position">{team.position}</span>
                      </div>
                    </div>
                  ))}
                </>
              )}
            </div>
          </div>
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
