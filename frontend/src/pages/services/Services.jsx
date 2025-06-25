import { services } from "../../mockData";
import "./services.scss";
import { Link } from "react-router-dom";

const Services = () => {
  return (
    <div className="services-page">
      <div className="container">
        <h1>Our Services</h1>
        <p>
          <span>Techbravery</span> offers a comprehensive range of software
          development services designed to address your specific needs and
          requirements. Our services are tailored to help businesses of all
          sizes, from startups to large enterprises, leverage the power of
          technology to achieve their goals.Our core services include custom
          software development, web and mobile app development, UI/UX design,
          quality assurance, and ongoing maintenance and support. Whether you
          need a fully customized software solution built from scratch or
          assistance in enhancing your existing applications, our team of
          experts is here to help. <br />
          <br /> We employ the latest technologies, tools, and frameworks to
          deliver robust, scalable, and secure software solutions that drive
          business growth. Our development process is characterized by a
          meticulous approach where we prioritize understanding your business,
          defining clear objectives, and delivering a solution that aligns
          perfectly with your vision. We believe in building long-term
          relationships with our clients, and our services are designed to
          provide ongoing support and maintenance to ensure your software
          operates smoothly and efficiently. Explore our{" "}
          <Link className="visit" to="/project">
            Works{" "}
          </Link>
          page to check out our project catalogues and choose a product that
          suits your needs. From there we can get in touch and discuss about how
          we can help you unlock your business's true potential through
          innovative software solutions.
        </p>
        <div className="services-items">
          {services.map((item) => (
            <div key={item.id} className="services-item">
              <img src={item.img} alt="" />
              <span className="item-name">{item.name}</span>
              <p className="item-desc">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
