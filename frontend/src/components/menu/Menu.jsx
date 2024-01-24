import "./menu.scss";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
import { FaArrowRight } from "react-icons/fa";
import { IoHome } from "react-icons/io5";
import {
  industries,
  services,
  teams,
  technologies,
  works,
} from "../../utils/menuData";
import { RxCaretDown } from "react-icons/rx";
import { useState } from "react";
import { Link } from "react-router-dom";

const Menu = ({ setOpenMenu, width }) => {
  const [serviceToggle, setServiceToggle] = useState(false);
  const [worksToggle, setWorksToggle] = useState(false);
  const [teamToggle, setTeamToggle] = useState(false);
  const [technologyToggle, setTechnologyToggle] = useState(false);
  const [industryToggle, setIndustryToggle] = useState(false);

  return (
    <div className="menu" style={{ display: width > 900 && "none" }}>
      <div className="container" data-aos="fade-left">
        <Link
          to="/"
          className="top"
          onClick={() => setOpenMenu((prev) => !prev)}
        >
          <span className="homeIcon">
            <IoHome />
          </span>
          <span>TechBravery</span>
        </Link>
        <div className="menuItems">
          <div className="item">
            <div className="itemTitle">
              <span>WHO WE ARE</span>
              <span
                className="icon"
                // onClick={() => setServiceToggle((prev) => !prev)}
              >
                <RxCaretDown />
              </span>
            </div>
            {/* {serviceToggle && (
              <>
                {services.map((service) => (
                  <Link
                    key={service.id}
                    to={service.url}
                    className="title"
                    onClick={() => setOpenMenu((prev) => !prev)}
                  >
                    {service.name}
                  </Link>
                ))}
              </>
            )} */}
          </div>
          <div className="item">
            <div className="itemTitle">
              <span>OUR SERVICES</span>
              <span
                className="icon"
                onClick={() => {
                  setServiceToggle((prev) => !prev);
                  setWorksToggle(false);
                  setTeamToggle(false);
                  setTechnologyToggle(false);
                  setIndustryToggle(false);
                }}
              >
                <RxCaretDown />
              </span>
            </div>
            {serviceToggle && (
              <>
                {services.map((service) => (
                  <Link
                    key={service.id}
                    to={service.url}
                    className="title"
                    onClick={() => setOpenMenu((prev) => !prev)}
                  >
                    {service.name}
                  </Link>
                ))}
              </>
            )}
          </div>
          <div className="item">
            <div className="itemTitle">
              <span>INDUSTRIES</span>
              <span
                className="icon"
                onClick={() => {
                  setIndustryToggle((prev) => !prev);
                  setTeamToggle(false);
                  setWorksToggle(false);
                  setServiceToggle(false);
                  setTechnologyToggle(false);
                }}
              >
                <RxCaretDown />
              </span>
            </div>
            {industryToggle && (
              <>
                {industries.map((industry) => (
                  <Link
                    key={industry.id}
                    to={industry.url}
                    className="title"
                    onClick={() => setOpenMenu((prev) => !prev)}
                  >
                    {industry.name}
                  </Link>
                ))}
              </>
            )}
          </div>
          <div className="item">
            <div className="itemTitle">
              <span>TECHNOLOGIES</span>
              <span
                className="icon"
                onClick={() => {
                  setTechnologyToggle((prev) => !prev);
                  setTeamToggle(false);
                  setWorksToggle(false);
                  setServiceToggle(false);
                  setIndustryToggle(false);
                }}
              >
                <RxCaretDown />
              </span>
            </div>
            {technologyToggle && (
              <>
                {technologies.map((technology) => (
                  <>
                    <Link
                      key={technology.id}
                      to={technology.url}
                      className="name"
                      onClick={() => setOpenMenu((prev) => !prev)}
                    >
                      {technology.name}
                    </Link>
                    <>
                      {technology.data.map((item) => (
                        <span
                          className="title"
                          key={item.id}
                          onClick={() => setOpenMenu((prev) => !prev)}
                        >
                          <Link to={item.url}>{item.name}</Link>
                        </span>
                      ))}
                    </>
                  </>
                ))}
              </>
            )}
          </div>
          <div className="item">
            <div className="itemTitle">
              <span>OUR WORKS</span>
              <span
                className="icon"
                onClick={() => {
                  setWorksToggle((prev) => !prev);
                  setServiceToggle(false);
                  setTeamToggle(false);
                  setTechnologyToggle(false);
                  setIndustryToggle(false);
                }}
              >
                <RxCaretDown />
              </span>
            </div>
            {worksToggle && (
              <>
                {works.map((work) => (
                  <Link
                    key={work.id}
                    className="title"
                    onClick={() => setOpenMenu((prev) => !prev)}
                  >
                    {work.name}
                  </Link>
                ))}
              </>
            )}
          </div>
          <div className="item">
            <div className="itemTitle">
              <span>TEAM MEMBERS</span>
              <span
                className="icon"
                onClick={() => {
                  setTeamToggle((prev) => !prev);
                  setWorksToggle(false);
                  setServiceToggle(false);
                  setTechnologyToggle(false);
                  setIndustryToggle(false);
                }}
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
        <button
          className="quoteBtn"
          onClick={() => setOpenMenu((prev) => !prev)}
        >
          <Link to="/quote" className="text">
            Get a Quote
          </Link>
          <div className="arrow">
            <FaArrowRight />
          </div>
        </button>
      </div>
    </div>
  );
};

export default Menu;
