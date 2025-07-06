import { useState } from "react";
import "./createProject.scss";
import { industries } from "../../../utils/menuData";
import { FiImage } from "react-icons/fi";
import { FaCaretDown, FaCaretUp } from "react-icons/fa6";
import { toast } from "sonner";

const stacks = [
  "NodeJS",
  "NestJS",
  ".NET",
  "PHP",
  "Django",
  "Python",
  "Java",
  "Kotlin",
  "Java/SpringBoot",
  "MongoDB",
  "MYSQL",
  "Postgre",
  "Firebase",
  "React",
  "NextJS",
  "Angular",
  "Vue",
  "Vanilla",
  "Amazon Web Services (AWS)",
  "Google Cloud Platform (GCP)",
  "Microsoft Azure",
  "Digital Ocean",
];

const appplatforms = ["Web App", "Android App", "Apple App", "Desktop App"];

const CreateProject = ({ setOpen }) => {
  const [openPlatform, setOpenPlatform] = useState(false);
  const [files, setFiles] = useState([]);
  const [file, setFile] = useState(null);

  const [openStack, setOpenStack] = useState(false);
  const [dragFileActive, setDragFileActive] = useState(false);

  const [inputs, setInputs] = useState({
    name: "",
    overview: "",
    status: "",
    industry: "",
    platform: "",
  });

  const [feature, setFeature] = useState("");
  const [selectedStacks, setSelectedStacks] = useState([]);
  const [selectedAppPlatforms, setSelectedAppPlatforms] = useState([]);

  const stackFramework = "favoriteStackFramework";
  const appPlatform = "favoriteAppPlatform";

  const handleBackendChange = (e) => {
    const { value, checked } = e.target;
    if (checked) {
      setSelectedStacks([...selectedStacks, value]);
    } else {
      setSelectedStacks(selectedStacks.filter((item) => item !== value));
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

  const [features, setFeatures] = useState([]);

  const { name, overview, status, industry, platform } = inputs;

  const handleChange = (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
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
    setDragFileActive(false);

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
    setDragFileActive(false);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragFileActive(true);
  };

  const handleDragEnter = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragFileActive(true);
  };

  const removeImage = (url) => {
    setFiles(files.filter((file) => file.url !== url));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (files.length < 1 || file == null) {
      return toast.error("Project thumbnail and page photos are required.");
    }

    if (files.length < 5 || files.length > 15) {
      return toast.error(
        "Minimum of 5 and maximum of 15 project page photos is required."
      );
    }
  };

  console.log({
    file,
    files,
    inputs,
    features,
    selectedAppPlatforms,
    selectedStacks,
  });

  return (
    <div className="create-project">
      <div className="create-project-wrapper">
        <h1>Add Project</h1>
        <span className="close-btn" onClick={() => setOpen((prev) => !prev)}>
          X
        </span>
        <form onSubmit={handleSubmit}>
          <div className="form-input">
            <label>App Name</label>
            <input
              placeholder="Enter App name"
              type="text"
              name="name"
              value={name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-input">
            <label>Industry</label>
            <select
              required
              onChange={handleChange}
              name="industry"
              value={industry}
            >
              <option required value="">
                --SELECT INDUSTRY--
              </option>
              {industries.map((industry) => (
                <option value={industry.name} key={industry.id}>
                  {industry.name}
                </option>
              ))}
            </select>
          </div>
          <div className="form-input">
            <label>Status</label>
            <select
              required
              name="status"
              value={status}
              onChange={handleChange}
            >
              <option value="">--SELECT-STATUS---</option>
              <option value="completed">Completed</option>
              <option value="in-development">In Development</option>
            </select>
          </div>
          <div className="form-input">
            <label>Platforms</label>
            <div
              onClick={() => setOpenPlatform((prev) => !prev)}
              className="titles"
            >
              <span>Select App Platforms</span>
              {openPlatform ? <FaCaretUp /> : <FaCaretDown />}
            </div>

            {openPlatform && (
              <div className="check-boxes">
                {appplatforms.map((a) => (
                  <div className="check-box" key={a}>
                    <span className="stack-name">{a}</span>
                    <input
                      // required
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
            )}
          </div>
          <div className="form-input full">
            <label>Project Overview</label>
            <textarea
              required
              rows={5}
              cols={10}
              value={overview}
              name="overview"
              onChange={handleChange}
              placeholder="Give a brief description of the project"
            />
          </div>
          <div className="form-input full">
            <label>App Features</label>
            {features?.length > 0 &&
              features.map((f, index) => (
                <div className="feature-item">
                  <span className="feature-index">{index + 1}</span>
                  <p className="f-name">{f}</p>
                  <span
                    onClick={() =>
                      setFeatures(features.filter((feature) => feature !== f))
                    }
                    className="feature-index cancel"
                  >
                    x
                  </span>
                </div>
              ))}

            <textarea
              type="text"
              value={feature}
              rows={3}
              placeholder="Add Feature"
              onChange={(e) => setFeature(e.target.value)}
            />
            <div className="feature-buttons">
              {features.length > 0 && (
                <span
                  onClick={() => setFeatures([])}
                  className="feature-btn clear-all"
                >
                  Clear All
                </span>
              )}
              <span
                onClick={() => {
                  if (!feature) {
                    return;
                  }

                  setFeatures([...features, feature]);
                  setFeature("");
                }}
                className="feature-btn"
              >
                Add Feature
              </span>
            </div>
          </div>
          <div className="form-input full">
            <label>Stacks</label>
            <div
              onClick={() => setOpenStack((prev) => !prev)}
              className="titles"
            >
              <span>Select Stacks Used</span>
              {openStack ? <FaCaretUp /> : <FaCaretDown />}
            </div>
            {openStack && (
              <div className="check-boxes">
                {stacks.map((s) => (
                  <div className="check-box" key={s}>
                    <span className="stack-name">{s}</span>
                    <input
                      // required
                      type="checkbox"
                      onChange={handleBackendChange}
                      name={stackFramework}
                      value={s}
                      checked={selectedStacks.includes(s)}
                      className="check-box"
                    />
                  </div>
                ))}
              </div>
            )}
          </div>
          <div className="form-input full">
            <label>Select Thumbnail Image</label>
            {file ? (
              <div className="img-list-item">
                <img src={URL.createObjectURL(file)} />

                <span
                  className="single-image-close"
                  onClick={() => setFile(null)}
                >
                  x
                </span>
              </div>
            ) : (
              <>
                <label htmlFor="singleFile">
                  <img src="/uploadicon.jpg" alt="" />
                </label>
                <input
                  accept="image/*"
                  required
                  type="file"
                  id="singleFile"
                  style={{ display: "none" }}
                  onChange={(e) => setFile(e.target.files[0])}
                />
              </>
            )}
          </div>
          <div
            className="form-input full"
            onDragEnter={handleDragEnter}
            onSubmit={(e) => e.preventDefault()}
            onDrop={handleDrop}
            onDragLeave={handleDragLeave}
            onDragOver={handleDragOver}
          >
            <label>Project Page Images (5 Minimum, 15Maximum)</label>
            <div className={dragFileActive ? "images drag-active" : "images"}>
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
                <span>{files?.length > 0 ? "Add More" : "Select Images"}</span>
              </label>
              {files.length > 0 && (
                <button
                  onClick={() => setFiles([])}
                  className="upload-btn clear"
                >
                  Clear All
                </button>
              )}
              <button disabled={files?.length === 0} className="upload-btn">
                Upload
              </button>
            </div>
            <input
              accept="image/*"
              type="file"
              id="fileUpload"
              style={{ display: "none" }}
              multiple
              onChange={handleFiles}
            />
          </div>
          <button type="submit" className="form-input full create-btn">
            CREATE
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreateProject;
