import "./home.scss";
import { Link } from "react-router-dom";
import Features from "../../components/features/Features";
import Welcome from "../../components/welcome/Welcome";
import { useEffect, useState } from "react";
import Testimonials from "../../components/testimonials/Testimonials";
import Slider from "../../components/slider/Slider";

const data = [
  {
    id: 1,
    title: "always fresh & always crispy & always hot",
    image: "/assets/bg2.jpg",
    bg: "/assets/bg4.jpg",
  },
  {
    id: 2,
    title: "we deliver your order wherever you are in NY",
    image: "/assets/img3.jpg",
    bg: "/assets/bg.jpg",
  },
  {
    id: 3,
    title: "the best pizza to share with your family",
    image: "/assets/img2.jpg",
    bg: "/assets/img8.jpg",
  },
];

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(
      () =>
        setCurrentSlide((prev) => (prev === data.length - 1 ? 0 : prev + 1)),
      7000
    );
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="home">
      <div
        className="homeContainer"
        style={{
          backgroundImage: `url(${data[currentSlide].bg})`,
          transition: "background-image 5s ease-in-out",
        }}
      >
        <div className="heroText">
          <p className="title">
            <span>TechBravery:</span>
            <br />
            Delivering Next-Level Software Solutions!
          </p>
          <Link to="/quote">
            <button>Get a Quote</button>
          </Link>
        </div>
        <div className="heroImg">
          <img src={data[currentSlide].image} alt="" />
        </div>
      </div>
      <Welcome />
      <Features />
      <Testimonials autoplayInterval={2000} />
    </div>
  );
};

export default Home;
