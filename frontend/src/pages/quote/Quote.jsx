import "./quote.scss";
import { useState } from "react";
import { industries } from "../../utils/menuData";
// import { FaArrowDown, FaCaretDown, FaCaretUp, FaArrowUp } from "react-icons/fa";
import { FaCaretDown, FaCaretUp } from "react-icons/fa6";
import { FiImage } from "react-icons/fi";

import { toast, Toaster } from "sonner";
const frontend = ["React", "NextJS", "Angular", "Vue", "Vanilla"];
const backend = [
  "NodeJS",
  "NextJS",
  "NestJS",
  ".NET",
  "PHP",
  "Django",
  "Python",
  "Java",
  "Kotlin",
  "Java/SpringBoot",
];
const database = ["MongoDB", "MYSQL", "Postgre", "Firebase"];
const appplatforms = ["Web App", "Android App", "Apple App", "Desktop App"];

const cloudplatforms = [
  "Amazon Web Services (AWS)",
  "Google Cloud Platform (GCP)",
  "Microsoft Azure",
  "Digital Ocean",
];

const designfiles = ["Yes", "No"];

const Quote = () => {
  const [open, setOpen] = useState(false);
  const [files, setFiles] = useState([]);
  const [inputs, setInputs] = useState({
    fullName: "",
    email: "",
    phone: "",
    company: "",
    industry: "",
    budget: "",
  });
  const { fullName, email, phone, company, industry, budget } = inputs;
  const [selectedFrontend, setSelectedFrontend] = useState("");
  const [selectedDatabase, setSelectedDatabase] = useState("");
  const [selectedCloud, setSelectedCloud] = useState("");
  const [selectedDesign, setSelectedDesign] = useState("");
  const [backendStacks, setBackendStacks] = useState([]);
  const [selectedAppPlatforms, setSelectedAppPlatforms] = useState([]);
  const [dragActive, setDragActive] = useState(false);

  const handleChange = (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  // console.log(files[0]);

  const frontendFramework = "favoriteFramework";
  const backendFramework = "favoriteBackendFramework";
  const databaseFramework = "favoriteDatabase";
  const appPlatform = "favoriteAppPlatform";

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

  const handlePlatformChange = (e) => {
    const { value, checked } = e.target;
    if (checked) {
      setSelectedAppPlatforms([...selectedAppPlatforms, value]);
    } else {
      setSelectedAppPlatforms(
        selectedAppPlatforms.filter((item) => item !== value)
      );
    }
  };

  const handleFiles = (e) => {
    e.preventDefault();

    const files = Array.from(e.target.files);
    const imageFiles = files.filter((file) => file.type.startsWith("image/"));

    const imageURLs = imageFiles.map((file) => ({
      file,
      url: URL.createObjectURL(file),
    }));

    setFiles((prev) => [...prev, ...imageURLs]);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);

    const files = Array.from(e.dataTransfer.files);

    const imageFiles = files.filter((file) => file.type.startsWith("image/"));

    const imageURLs = imageFiles.map((file) => ({
      file,
      url: URL.createObjectURL(file),
    }));

    setFiles((prev) => [...prev, ...imageURLs]);
  };

  const handleDragLeave = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(true);
  };

  const handleDragEnter = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(true);
  };

  const removeImage = (url) => {
    setFiles(files.filter((file) => file.url !== url));
  };

  const data = {
    ...inputs,
    selectedAppPlatforms,
    selectedFrontend,
    selectedDatabase,
    selectedCloud,
    selectedDesign,
    backendStacks,
    files,
  };

  console.log(files);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!fullName || !email || !industry || !budget) {
      return toast.error("Full name, email, industry and range are required!");
    }
  };

  return (
    <div className="quote">
      <Toaster position="top-right" richColors />

      <div className="container">
        <div className="top">
          <h1>Get a Quote</h1>
          <p>
            You are one step closer to build your perfect product and enhance
            your online presence. Please fill out the form below or contact us
            by clicking the chat button at the bottom right.
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
              <span
                style={{
                  fontWeight: "bold",
                  fontSize: "16px",
                  color: "var(--color-orange)",
                }}
              >
                24
              </span>{" "}
              hours
            </p>
            <form className="form" onSubmit={handleSubmit}>
              <input
                type="text"
                placeholder="Your name"
                name="fullName"
                value={fullName}
                onChange={handleChange}
                required
              />
              <input
                type="email"
                placeholder="Your email"
                name="email"
                value={email}
                onChange={handleChange}
                required
              />
              <input
                type="text"
                placeholder="Your phone"
                name="phone"
                value={phone}
                onChange={handleChange}
              />
              <input
                type="text"
                placeholder="Your company"
                name="company"
                value={company}
                onChange={handleChange}
              />
              <select onChange={handleChange} name="industry" value={industry}>
                <option required value="">
                  --SELECT INDUSTRY--
                </option>
                {industries.map((industry) => (
                  <option value={industry.name} key={industry.id}>
                    {industry.name}
                  </option>
                ))}
              </select>
              <select
                required
                onChange={handleChange}
                name="budget"
                value={budget}
              >
                <option value="">--SELECT BUDGET RANGE--</option>
                <option value="50-100">$ 50.00 - $ 100.00</option>
                <option value="100-500">$ 100.00 - $ 500.00</option>
                <option value="500-1000">$ 500.00 - $ 1,000.00</option>
                <option value="1000-5000">$ 1,000.00 - $ 5,000.00</option>
                <option value="5000-10000">$ 5,000.00 - $ 10,000.00</option>
                <option value="10000-100000">$ 10,000.00 - $ 100,000.00</option>
                <option value="above-100000">Above $ 100,000.00</option>
              </select>
              <div className="techs">
                <div
                  className="techs-title"
                  onClick={() => setOpen((prev) => !prev)}
                >
                  <span>
                    Choose prefered technologies, stacks and platforms
                  </span>
                  {open ? <FaCaretUp /> : <FaCaretDown />}
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
                              name={backendFramework}
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
                      <span className="tech-name">App Platforms</span>
                      <div className="check-boxes">
                        {appplatforms.map((a) => (
                          <div className="check-box" key={a}>
                            <span className="stack-name">{a}</span>
                            <input
                              type="checkbox"
                              onChange={handlePlatformChange}
                              name={appPlatform}
                              value={a}
                              checked={selectedAppPlatforms.includes(a)}
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
              <div
                onDragEnter={handleDragEnter}
                onSubmit={(e) => e.preventDefault()}
                onDrop={handleDrop}
                onDragLeave={handleDragLeave}
                onDragOver={handleDragOver}
                className="images-input"
              >
                <span>Do you have sample images of what you want?</span>
                <div className={dragActive ? "images drag-active" : "images"}>
                  {files && files.length > 0 ? (
                    <div className="img-list">
                      {files?.map((f, index) => (
                        <div key={index} className="img-list-item">
                          <img key={f} src={f.url} />
                          <span onClick={() => removeImage(f.url)}>x</span>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="drag">
                      <span>Drag and drop images here</span>
                      <FiImage
                        style={{
                          margin: "10px 0",
                          fontSize: "60px",
                          opacity: 0.2,
                        }}
                      />
                      or
                      <label
                        style={{
                          cursor: "pointer",
                          color: "var(--color-primary)",
                          fontWeight: 600,
                        }}
                        label
                        htmlFor="fileUpload"
                      >
                        Click to select
                      </label>
                    </div>
                  )}
                </div>
                <div className="buttons">
                  <label htmlFor="fileUpload">
                    <img src="/uploadicon.jpg" alt="" />
                    <span>
                      {files?.length > 0 ? "Add More" : "Select Images"}
                    </span>
                  </label>
                  <button disabled={files?.length === 0} className="upload-btn">
                    Upload
                  </button>
                </div>

                <input
                  type="file"
                  id="fileUpload"
                  style={{ display: "none" }}
                  multiple
                  onChange={handleFiles}
                />
              </div>
              <button type="submit" className="continue-btn">
                SEND
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Quote;
