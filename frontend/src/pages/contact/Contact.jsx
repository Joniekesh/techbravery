import "./contact.scss";
import { HiMiniComputerDesktop } from "react-icons/hi2";
import { FaFacebook, FaYoutube } from "react-icons/fa";
import { FaSquareXTwitter, FaLinkedin } from "react-icons/fa6";
import { GrInstagram } from "react-icons/gr";
import { useState } from "react";

const Contact = () => {
  const [inputs, setInputs] = useState({
    fullName: "",
    email: "",
    phone: "",
    company: "",
    subject: "",
    message: "",
  });

  const { fullName, email, phone, company, subject, message } = inputs;

  const handleChange = (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  console.log(inputs);

  const handleSubmit = async (e) => {
    e.preventDefault();
  };

  return (
    <div className="contact">
      <div className="contact-wrapper">
        <h1>Get in Touch with Techbravery</h1>
        <div className="contact-content">
          <div className="contact-left">
            <div className="contact-items">
              <div className="contact-item">
                <HiMiniComputerDesktop className="contact-icon" />
                <div className="details">
                  <span className="contact-title">HEAD OFFICE</span>
                  <span className="contact-name">
                    No 23 Hillview Street, Off Kansas Avenue, USA
                  </span>
                </div>
              </div>
              <div className="contact-item">
                <HiMiniComputerDesktop className="contact-icon" />
                <div className="details">
                  <span className="contact-title">EMAIL SUPPORT</span>
                  <span className="contact-name">support@techbravery.com</span>
                </div>
              </div>
              <div className="contact-item">
                <HiMiniComputerDesktop className="contact-icon" />
                <div className="details">
                  <span className="contact-title">LET'S TALK</span>
                  <span className="contact-name">Phone +1 234567890</span>
                  <span className="contact-name">Fax +1 234567890</span>
                </div>
              </div>
              <div className="contact-item">
                <HiMiniComputerDesktop className="contact-icon" />
                <div className="details">
                  <span className="contact-title">WORKING HOURS</span>
                  <span className="contact-name">Monday - Friday</span>
                  <span className="contact-name">07am - 09pm</span>
                </div>
              </div>
            </div>
            <div className="socials">
              <span>Follow our social media</span>
              <div className="sociallinks">
                <a href="http://facebook.com" target="_blank">
                  <FaFacebook />
                </a>
                <a href="http://twitter.com" target="_blank">
                  <FaSquareXTwitter />
                </a>
                <a href="http://instagram.com" target="_blank">
                  <GrInstagram />
                </a>
                <a href="http://linkedin.com" target="_blank">
                  <FaLinkedin />
                </a>
                <a href="http://youtube.com" target="_blank">
                  <FaYoutube />
                </a>
              </div>
            </div>
          </div>
          <div className="contact-right">
            <h2>Send Us a Message</h2>
            <p>
              Please feel free to send us any question, feedback or suggestion
              you might have
            </p>
            <form onSubmit={handleSubmit}>
              <div className="input-container">
                <label>Full Name</label>
                <input
                  type="text"
                  placeholder="Full name"
                  name="fullName"
                  value={fullName}
                  onChange={handleChange}
                />
              </div>
              <div className="input-container">
                <label>Email *</label>
                <input
                  type="email"
                  placeholder="Email"
                  name="email"
                  value={email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="input-container">
                <label>Phone</label>
                <input
                  type="phone"
                  placeholder="Phone"
                  name="phone"
                  value={phone}
                  onChange={handleChange}
                />
              </div>
              <div className="input-container">
                <label>Company</label>
                <input
                  type="text"
                  placeholder="Company"
                  name="company"
                  value={company}
                  onChange={handleChange}
                />
              </div>
              <div className="input-container full">
                <label>Subject *</label>
                <input
                  type="text"
                  placeholder="Subject"
                  name="subject"
                  value={subject}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="input-container full">
                <label>Message *</label>
                <textarea
                  placeholder="Message"
                  name="message"
                  value={message}
                  onChange={handleChange}
                  rows={5}
                  cols={10}
                  required
                />
              </div>
              <button className="full">SEND MESSAGE</button>
            </form>
          </div>
        </div>
        <div className="map">Map goes here</div>
      </div>
    </div>
  );
};

export default Contact;
