import { useLocation } from "react-router-dom";
import "./product.scss";
import { products } from "../../mockData";
import { useState } from "react";

const images = [
  "/home_hero.png",
  "/hero-bg.png",
  "/feature.png",
  "/home_cards.png",
  "/mockup.png",
  "/home_hero.png",
];

const Product = () => {
  const { state } = useLocation();

  const [currentImage, setCurrentImage] = useState(state.img);
  const [active, setActive] = useState(state.img);
  const [activeTab, setActiveTab] = useState("overview");

  console.log(state);

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
            {products.slice(0, 5).map((item) => (
              <img
                onClick={() => handleClick(item.img)}
                className={
                  active === item.img
                    ? "carousel-image active"
                    : "carousel-image"
                }
                src={item.img}
                alt=""
              />
            ))}
          </div>
        </div>
        <div className="product-contents">
          <h1>{state?.name}</h1>
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
              Tech Stacks
            </button>
            <button
              onClick={() => setActiveTab("platforms")}
              className={activeTab === "platforms" && "active-tab"}
            >
              Platforms
            </button>
          </div>
          {activeTab === "overview"
            ? "Overview"
            : activeTab === "features"
            ? "Features"
            : activeTab === "stacks"
            ? "Stacks"
            : "Platforms"}
        </div>
      </div>
    </div>
  );
};

export default Product;
