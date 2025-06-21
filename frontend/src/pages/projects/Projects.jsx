import { useEffect, useState } from "react";
import "./projects.scss";
import { HiMiniComputerDesktop } from "react-icons/hi2";
import { Link } from "react-router-dom";
import { industries } from "../../utils/menuData";
import { products } from "../../mockData";

const projects = [
  {
    id: 1,
    name: "TexAfrik",
    type: "mobile",
    img: "/home_hero.png",
    industry: "Technology and Software",
  },
  {
    id: 2,
    name: "Technomo",
    type: "web",
    img: "/hero-bg.png",
    industry: "Finance and Banking",
  },
  {
    id: 3,
    name: "Tech Arena",
    type: "desktop",
    img: "/feature.png",
    industry: "Health Care and Life Sciences",
  },
  {
    id: 4,
    name: "Tech POS",
    type: "mobile",
    img: "/home_hero.png",
    industry: "E-commerce and Retail",
  },
  {
    id: 5,
    name: "Techi Pay",
    type: "web",
    img: "/home_cards.png",
    industry: "Technology and Software",
  },
  {
    id: 6,
    name: "Tech Growth",
    type: "desktop",
    img: "/mockup.png",
    industry: "Media and Entertainment",
  },
  {
    id: 7,
    name: "Tech Profit",
    type: "mobile",
    img: "/home_hero.png",
    industry: "Travel and Hospitality",
  },
  {
    id: 8,
    name: "Tech Hub",
    type: "web",
    img: "/hero-bg.png",
    industry: "Real Estate and Property",
  },
  {
    id: 9,
    name: "Tech Varsity",
    type: "desktop",
    img: "/feature.png",
    industry: "Manufacturing and Engineering",
  },
];

const Projects = () => {
  const [search, setSearch] = useState("");
  const [industry, setIndustry] = useState("");

  const [activeTab, setActiveTab] = useState("all");
  const [projectList, setProjectList] = useState(products);

  console.log(industry);

  useEffect(() => {
    if (search) {
      setProjectList(
        products.filter((project) =>
          project.name.toLowerCase().includes(search.toLowerCase())
        )
      );
    } else if (industry) {
      setProjectList(
        products.filter((project) =>
          project.industry.toLowerCase().includes(industry.toLowerCase())
        )
      );
    } else if (activeTab === "mobile") {
      setProjectList(products.filter((project) => project.type === "mobile"));
    } else if (activeTab === "web") {
      setProjectList(products.filter((project) => project.type === "web"));
    } else if (activeTab === "desktop") {
      setProjectList(products.filter((project) => project.type === "desktop"));
    } else if (activeTab === "all") {
      setProjectList(products);
    }
  }, [activeTab, search, industry]);

  const handleClick = (type) => {
    setIndustry("");
    setSearch("");
    setActiveTab(type);
  };

  return (
    <div className="projects">
      <div className="container">
        <div className="project-top">
          <h1>Our Projects</h1>
          <p>
            You can browse some of the projects we have worked on and maybe you
            can find any that interests you or aligns with your idea so we can
            get to work and have it customized according to your prefered
            features.
          </p>
          <div className="search-bar">
            <div className="searches">
              <div className="search-input">
                <input
                  type="text"
                  placeholder="Search by name..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                />
                <HiMiniComputerDesktop className="search-icon" />
              </div>
              <select
                className="select-search"
                onChange={(e) => {
                  setIndustry(e.target.value);
                  setSearch("");
                }}
                value={industry}
              >
                <option value="">--Select Industry--</option>
                {industries.map((industry) => (
                  <option key={industry.id}>{industry.name}</option>
                ))}
              </select>
            </div>
            <div className="filter-tabs">
              <button
                onClick={() => handleClick("all")}
                className={activeTab === "all" && "active"}
              >
                All
              </button>
              <button
                onClick={() => handleClick("web")}
                className={activeTab === "web" && "active"}
              >
                Web
              </button>
              <button
                onClick={() => handleClick("mobile")}
                className={activeTab === "mobile" && "active"}
              >
                Android/iOS
              </button>
              <button
                onClick={() => handleClick("desktop")}
                className={activeTab === "desktop" && "active"}
              >
                Desktop
              </button>
            </div>
          </div>
          <div className="projects-list">
            {projectList.length === 0
              ? "no item matched your search"
              : projectList.map((p, index) => (
                  <Link
                    to={`/product/${p.id}`}
                    state={p}
                    className={index % 2 !== 0 ? "project success" : "project"}
                    key={p.id}
                  >
                    <span className="project-name">{p.name}</span>
                    <img src={p.img} alt="" />
                  </Link>
                ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
