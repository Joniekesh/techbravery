import "./home.scss";
import Features from "../../components/features/Features";
import Welcome from "../../components/welcome/Welcome";
import Testimonials from "../../components/testimonials/Testimonials";
import Hero from "../../components/hero/Hero";
import Service from "../../components/service/Service";
import Products from "../../components/products/Products";
import Partners from "../../components/partners/Partners";
import Faqs from "../../components/faqs/Faqs";
import { useEffect, useRef } from "react";
import Packages from "../../components/packages/Packages";

const Home = () => {
  const boxRef = useRef(null);

  useEffect(() => {
    const boxElement = boxRef.current;

    if (!boxElement) return;

    const updateAnimation = () => {
      const currentAngle = parseFloat(
        boxElement.style.getPropertyValue("--angle") || "0"
      );

      const newAngle = (currentAngle + 0.5) % 360;

      boxElement.style.setProperty("--angle", `${newAngle}deg`);
      requestAnimationFrame(updateAnimation);
    };
    requestAnimationFrame(updateAnimation);
  }, []);

  return (
    <div className="home">
      <Hero />
      <div className="welcome">
        <div className="heading">
          <h1>Expert Software design, development, support & maintenance!</h1>
        </div>
        <div
          style={{
            "--angle": "0deg",
            "--border-color":
              "linear-gradient(var(--angle),#4169e1,#e6a960,#5f9261,orangered,#ffe86e,#9747ff,teal,orange,#4b0082)",
          }}
          ref={boxRef}
          className="desc"
        >
          Unlock the true potential of your online presence with our premier web
          development agency. At Techbravery Software Solutions, we pride
          ourselves on delivering stunning, secure and responsive websites that
          captivate audiences, drive conversions, and elevate your brand to new
          heights. With our expert team of developers, designers, and digital
          strategists, we are committed to crafting tailor-made solutions that
          exceed your expectations.
        </div>
        <img src="/big-bg2.jpg" alt="" />
      </div>
      <Service />
      <Welcome />
      <Features />
      <Packages />
      <Products />
      <Partners />
      <Testimonials autoplayInterval={2000} />
      <Faqs />
    </div>
  );
};

export default Home;
