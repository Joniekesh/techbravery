import "./home.scss";
import { Link, useNavigate } from "react-router-dom";
import Features from "../../components/features/Features";
import Welcome from "../../components/welcome/Welcome";
import { useEffect, useState } from "react";
import Testimonials from "../../components/testimonials/Testimonials";
import Slider from "../../components/slider/Slider";
import Hero from "../../components/hero/Hero";
import Services from "../../components/services/Services";
import Products from "../../components/products/Products";
import Partners from "../../components/partners/Partners";
import Faqs from "../../components/faqs/Faqs";

const data = [
  {
    id: 1,
    image: "/img3upd.jpg",
    bg: "/bg.jpg",
  },
  {
    id: 2,
    image: "/img2upd.jpg",
    bg: "/img8.jpg",
  },
];

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const navigate = useNavigate();

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
      <Hero />
      <div className="welcome">
        <div className="heading">
          <h1>Expert Software design, development, support & maintenance!</h1>
        </div>
        <div className="desc">
          <p>
            Unlock the true potential of your online presence with our premier
            web development agency. At Techbravery Software Solutions, we pride
            ourselves on delivering stunning secure and responsive websites that
            captivate audiences, drive conversions, and elevate your brand to
            new heights. With our expert team of developers, designers, and
            digital strategists, we are committed to crafting tailor-made
            solutions that exceed your expectations.
          </p>
        </div>
      </div>
      <Services />
      <Welcome />
      <Features />
      <Products />
      <Partners />
      <Testimonials autoplayInterval={2000} />
      <Faqs />
    </div>
  );
};

export default Home;
