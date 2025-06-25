import "./menu.scss";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
import { FaArrowRight } from "react-icons/fa";
import { IoHome } from "react-icons/io5";
import {
  aboutus,
  digitalProducts,
  industries,
  services,
  technologies,
  works,
  contacts,
} from "../../utils/menuData";
import { RxCaretDown } from "react-icons/rx";
import { useState } from "react";
import { Link } from "react-router-dom";
import ThemeSwitcher from "../themeSwitcher/ThemeSwitcher";
import QuoteBtn from "../quoteBtn/QuoteBtn";

const Menu = ({ setOpenMenu, width }) => {
  const [aboutUsToggle, setAboutUsToggle] = useState(false);
  const [serviceToggle, setServiceToggle] = useState(false);
  const [worksToggle, setWorksToggle] = useState(false);
  const [teamToggle, setTeamToggle] = useState(false);
  const [technologyToggle, setTechnologyToggle] = useState(false);
  const [industryToggle, setIndustryToggle] = useState(false);
  const [digitalStoreToggle, setDigitalStoreToggle] = useState(false);
  const [contactsToggle, setContactsToggle] = useState(false);

  return (
    <div className="menu" style={{ display: width > 1100 && "none" }}>
      <div className="container" data-aos="fade-left">
        <div className="switcher">
          <ThemeSwitcher />
        </div>

        <div className="menuItems">
          <div className="item">
            <div
              className="itemTitle"
              onClick={() => {
                setAboutUsToggle((prev) => !prev);
                setServiceToggle(false);
                setWorksToggle(false);
                setTeamToggle(false);
                setTechnologyToggle(false);
                setIndustryToggle(false);
                setDigitalStoreToggle(false);
                setContactsToggle(false);
              }}
            >
              <span>WHO WE ARE</span>
              <span className="icon">
                <RxCaretDown />
              </span>
            </div>
            {aboutUsToggle && (
              <>
                {aboutus.map((about) => (
                  <Link
                    key={about.id}
                    to="/aboutus"
                    className="title"
                    onClick={() => setOpenMenu((prev) => !prev)}
                  >
                    {about.name}
                  </Link>
                ))}
              </>
            )}
          </div>
          <div className="item">
            <div
              className="itemTitle"
              onClick={() => {
                setServiceToggle((prev) => !prev);
                setWorksToggle(false);
                setTeamToggle(false);
                setTechnologyToggle(false);
                setIndustryToggle(false);
                setAboutUsToggle(false);
                setDigitalStoreToggle(false);
                setContactsToggle(false);
              }}
            >
              <span>OUR SERVICES</span>
              <span className="icon">
                <RxCaretDown />
              </span>
            </div>
            {serviceToggle && (
              <>
                {services.map((service) => (
                  <Link
                    key={service.id}
                    to="/services"
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
            <div
              className="itemTitle"
              onClick={() => {
                setWorksToggle((prev) => !prev);
                setServiceToggle(false);
                setTeamToggle(false);
                setTechnologyToggle(false);
                setIndustryToggle(false);
                setAboutUsToggle(false);
                setDigitalStoreToggle(false);
                setContactsToggle(false);
              }}
            >
              <span>OUR WORKS</span>
              <span className="icon">
                <RxCaretDown />
              </span>
            </div>
            {worksToggle && (
              <>
                {works.map((work) => (
                  <Link
                    to="/project"
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
            <div
              className="itemTitle"
              onClick={() => {
                setContactsToggle((prev) => !prev);
                setServiceToggle(false);
                setTeamToggle(false);
                setTechnologyToggle(false);
                setIndustryToggle(false);
                setAboutUsToggle(false);
                setDigitalStoreToggle(false);
              }}
            >
              <span>CONTACTS</span>
              <span className="icon">
                <RxCaretDown />
              </span>
            </div>
            {contactsToggle && (
              <>
                {contacts.map((contact) => (
                  <Link
                    to={contact.url}
                    key={contact.id}
                    className="title"
                    onClick={() => setOpenMenu((prev) => !prev)}
                  >
                    {contact.name}
                  </Link>
                ))}
              </>
            )}
          </div>
          {/* <div className="item">
            <div
              className="itemTitle"
              onClick={() => {
                setDigitalStoreToggle((prev) => !prev);
                setWorksToggle(false);
                setTeamToggle(false);
                setTechnologyToggle(false);
                setIndustryToggle(false);
                setAboutUsToggle(false);
                setServiceToggle(false);
                setContactsToggle(false)

              }}
            >
              <span>DIGITAL STORE</span>
              <span className="icon">
                <RxCaretDown />
              </span>
            </div>
            {digitalStoreToggle && (
              <>
                {digitalProducts.map((product) => (
                  <Link
                    key={product.id}
                    to={product.url}
                    className="title"
                    onClick={() => setOpenMenu((prev) => !prev)}
                  >
                    {product.name}
                  </Link>
                ))}
              </>
            )}
          </div> */}
          <div className="item">
            <div
              className="itemTitle"
              onClick={() => {
                setIndustryToggle((prev) => !prev);
                setTeamToggle(false);
                setWorksToggle(false);
                setServiceToggle(false);
                setTechnologyToggle(false);
                setAboutUsToggle(false);
                setDigitalStoreToggle(false);
                setContactsToggle(false);
              }}
            >
              <span>INDUSTRIES</span>
              <span className="icon">
                <RxCaretDown />
              </span>
            </div>
            {industryToggle && (
              <>
                {industries.map((industry) => (
                  <Link
                    key={industry.id}
                    to="/project"
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
            <div
              className="itemTitle"
              onClick={() => {
                setTechnologyToggle((prev) => !prev);
                setTeamToggle(false);
                setWorksToggle(false);
                setServiceToggle(false);
                setIndustryToggle(false);
                setAboutUsToggle(false);
                setDigitalStoreToggle(false);
                setContactsToggle(false);
              }}
            >
              <span>TECHNOLOGIES</span>
              <span className="icon">
                <RxCaretDown />
              </span>
            </div>
            {technologyToggle && (
              <>
                {technologies.map((technology) => (
                  <>
                    <Link
                      key={technology.id}
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
        </div>
        <div onClick={() => setOpenMenu((prev) => !prev)}>
          <QuoteBtn />
        </div>
      </div>
    </div>
  );
};

export default Menu;
