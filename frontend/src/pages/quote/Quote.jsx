import "./quote.scss";
import { useState } from "react";
import { industries } from "../../utils/menuData";
import { FaArrowDown } from "react-icons/fa";
import { FaArrowUp } from "react-icons/fa";

const frontend = ["React", "NextJS", "Angular", "Vue", "Vanilla"];
const backend = [
  "NodeJS",
  "NextJS",
  "NestJS",
  ".NET",
  "PHP",
  "Django",
  "Python",
  "Java/SpringBoot",
];
const database = ["MongoDB", "MYSQL", "Postgre", "Firebase"];

const cloudplatforms = [
  "Amazon Web Services (AWS)",
  "Google Cloud Platform (GCP)",
  "Microsoft Azure",
  "Digital Ocean",
];

const designfiles = ["Yes", "No"];

const Quote = () => {
  const [open, setOpen] = useState(false);
  const [selectedFrontend, setSelectedFrontend] = useState("");
  const [selectedDatabase, setSelectedDatabase] = useState("");
  const [selectedCloud, setSelectedCloud] = useState("");
  const [selectedDesign, setSelectedDesign] = useState("");

  const [backendStacks, setBackendStacks] = useState([]);

  const frontendFramework = "favoriteFramework";
  const databaseFramework = "favoriteDatabase";
  const cloudFramework = "favoriteCloud";
  const designFile = "favoriteDesign";

  const handleFrontendChange = (e) => {
    setSelectedFrontend(e.target.value);
  };

  const handleDatabaseChange = (e) => {
    setSelectedDatabase(e.target.value);
  };

  const handleCloudChange = (e) => {
    setSelectedCloud(e.target.value);
  };
  const handleDesignChange = (e) => {
    setSelectedDesign(e.target.value);
  };

  const handleBackendChange = (e) => {
    const { value, checked } = e.target;
    if (checked) {
      setBackendStacks([...backendStacks, value]);
    } else {
      setBackendStacks(backendStacks.filter((item) => item !== value));
    }
  };

  // console.log(selectedDatabase);
  // console.log(selectedFrontend);
  console.log(selectedDesign);

  return (
    <div className="quote">
      <div className="container">
        <div className="top">
          <h1>Get a Quote</h1>
          <p>
            You are one step closer to build your perfect product and enhance
            your online presence
          </p>
        </div>
        <div className="bottom">
          <div className="left">
            <h2>What will be the next step?</h2>
            <ul>
              <li>
                <div>
                  <p>1. We will prepare a proposal</p>
                  <span>
                    Required scope, timeline and aproximate price will be
                    included if you provide detailed information about the
                    project.
                  </span>
                </div>
              </li>
              <li>
                <div>
                  <p>2. Together we discuss it</p>
                  <span>
                    Let's get acquainted and discuss all the possible variants
                    and options. Google Hangout or Skype usually works great.{" "}
                  </span>
                </div>
              </li>
              <li>
                <div>
                  <p>Let's start building</p>
                  <span>
                    When the contract is signed and all goals are set, we can
                    start the first sprint.
                  </span>
                </div>
              </li>
            </ul>
          </div>
          <div className="right">
            <p>
              Write us a few words about your project and we will prepare a
              proposal for you within{" "}
              <span style={{ fontWeight: "bold" }}>24</span> hours
            </p>
            <form>
              <input type="text" placeholder="Your name" />
              <input type="email" placeholder="Your email" />
              <input type="text" placeholder="Your phone" />
              <input type="text" placeholder="Your company" />
              <select>
                <option value="">--SELECT INDUSTRY--</option>
                {industries.map((industry) => (
                  <option key={industry.id}>{industry.name}</option>
                ))}
              </select>
              <input type="text" placeholder="Approx. budget" />
              <div className="techs">
                <div
                  className="techs-title"
                  onClick={() => setOpen((prev) => !prev)}
                >
                  <span>Choose prefered technologies and stacks</span>
                  {open ? <FaArrowUp /> : <FaArrowDown />}
                </div>
                {open && (
                  <div className="techs-container">
                    <div className="item">
                      <span className="tech-name">Frontend Framework</span>
                      <div className="check-boxes">
                        {frontend.map((f) => (
                          <div className="check-box" key={f}>
                            <span className="stack-name">{f}</span>
                            <input
                              onChange={handleFrontendChange}
                              type="radio"
                              name={frontendFramework}
                              value={f}
                              checked={selectedFrontend === f}
                              className="check-box"
                            />
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="item">
                      <span className="tech-name">Backend Tech Stacks</span>
                      <div className="check-boxes">
                        {backend.map((b) => (
                          <div className="check-box" key={b}>
                            <span className="stack-name">{b}</span>
                            <input
                              type="checkbox"
                              onChange={handleBackendChange}
                              name="backend"
                              value={b}
                              checked={backendStacks.includes(b)}
                              className="check-box"
                            />
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="item">
                      <span className="tech-name">Database Tech Stacks</span>
                      <div className="check-boxes">
                        {database.map((d) => (
                          <div className="check-box" key={d}>
                            <span className="stack-name">{d}</span>
                            <input
                              onChange={handleDatabaseChange}
                              type="radio"
                              name={databaseFramework}
                              value={d}
                              checked={selectedDatabase === d}
                              className="check-box"
                            />
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="item">
                      <span className="tech-name">Cloud Platforms</span>
                      <div className="check-boxes">
                        {cloudplatforms.map((c) => (
                          <div className="check-box" key={c}>
                            <span className="stack-name">{c}</span>
                            <input
                              onChange={handleCloudChange}
                              type="radio"
                              name={cloudFramework}
                              value={c}
                              checked={selectedCloud === c}
                              className="check-box"
                            />
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="item">
                      <span className="tech-name">
                        Already have design file?
                      </span>
                      <div className="check-boxes">
                        {designfiles.map((d) => (
                          <div className="check-box" key={d}>
                            <span className="stack-name">{d}</span>
                            <input
                              onChange={handleDesignChange}
                              type="radio"
                              name={designFile}
                              value={d}
                              checked={selectedDesign === d}
                              className="check-box"
                            />
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>
              <div className="optional">
                <span>Optional</span>
                <textarea
                  cols="30"
                  rows="8"
                  placeholder="Project details"
                ></textarea>
              </div>
              <label htmlFor="fileUpload">
                <img src="/uploadicon.jpg" alt="" />
                <span>Upload</span>
              </label>
              <input type="file" id="fileUpload" style={{ display: "none" }} />
              <button>Send</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Quote;
