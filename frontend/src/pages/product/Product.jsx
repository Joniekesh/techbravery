import { useLocation } from "react-router-dom";
import "./product.scss";
import { useState } from "react";

const Product = () => {
  const { state } = useLocation();
  const [currentImage, setCurrentImage] = useState(state?.img);
  const [active, setActive] = useState(state?.img);
  const [activeTab, setActiveTab] = useState("overview");

  const handleClick = (img) => {
    setCurrentImage(img);
    setActive(img);
  };

  return (
    <div className="product-page">
      <div className="product-wrapper">
        <div className="image-container">
          <img src={currentImage} alt="" />
          <div className="images">
            {state?.photos.map((photo) => (
              <img
                onClick={() => handleClick(photo)}
                className={
                  active === photo ? "carousel-image active" : "carousel-image"
                }
                src={photo}
                alt=""
              />
            ))}
          </div>
        </div>
        <div className="product-contents">
          <div className="pc-top">
            <div className="titles">
              <h1 className="product-title">{state?.name}</h1>
              <span className="product-platform">({state?.platforms})</span>
            </div>
            <div className="status">
              <span className="status-title">Status:</span>
              <span
                className={
                  state?.status === "Completed"
                    ? "status-value completed"
                    : "status-value"
                }
              >
                {state?.status}
              </span>
            </div>

            <div className="top-nav">
              <button
                onClick={() => setActiveTab("overview")}
                className={activeTab === "overview" && "active-tab"}
              >
                Overview
              </button>
              <button
                onClick={() => setActiveTab("features")}
                className={activeTab === "features" && "active-tab"}
              >
                Features
              </button>
              <button
                onClick={() => setActiveTab("stacks")}
                className={activeTab === "stacks" && "active-tab"}
              >
                Stacks
              </button>
              <button
                onClick={() => setActiveTab("platforms")}
                className={activeTab === "platforms" && "active-tab"}
              >
                Platforms
              </button>
            </div>
            <div className="details">
              {activeTab === "overview" ? (
                <p>{state?.overview}</p>
              ) : activeTab === "features" ? (
                <ul>
                  {state?.features.map((f, index) => (
                    <li key={f.id}>
                      <span className="sn">{index + 1}</span>
                      <span className="l-name">{f.name}</span>
                    </li>
                  ))}
                </ul>
              ) : activeTab === "stacks" ? (
                <ul>
                  {state?.techStacks.map((s, index) => (
                    <li key={s.id}>
                      <span className="sn">{index + 1}</span>
                      <span className="l-name">{s.name}</span>
                    </li>
                  ))}
                </ul>
              ) : (
                <p>{state?.platforms}</p>
              )}
            </div>
          </div>
          <div className="app-links">
            <span>Visit site</span>
            <span>Download Android App</span>
            <span>Download iOS App</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
