import "./testimonials.scss";
import TestimonialItem from "../testimonialItem/TestimonialItem";
import { useEffect, useState } from "react";
import { FaStar } from "react-icons/fa6";

const data = [
  {
    id: 1,
    img: "/assets/myprofilepic.jpg",
    name: "John Smith",
    company: "CEO Own Company",
    comment: "Another",
  },
  {
    id: 2,
    img: "/assets/bg1.jpg",
    name: "John Smith",
    company: "CEO Own Company",
    comment:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiissapiente,explicabo quidem quod exercitationem aspernatu repellendus",
  },
  {
    id: 3,
    img: "/assets/bg2.jpg",
    name: "John Smith",
    company: "CEO Own Company",
    comment:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiissapiente,explicabo quidem quod exercitationem aspernatu repellendus",
  },
  {
    id: 4,
    img: "/assets/bg3.jpg",
    name: "John Smith",
    company: "CEO Own Company",
    comment:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiissapiente,explicabo quidem quod exercitationem aspernatu repellendus",
  },
  {
    id: 5,
    img: "/assets/bg4.jpg",
    name: "John Smith",
    company: "CEO Own Company",
    comment:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiissapiente,explicabo quidem quod exercitationem aspernatu repellendus",
  },
  {
    id: 6,
    img: "/assets/bg5.jpg",
    name: "John Smith",
    company: "CEO Own Company",
    comment:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiissapiente,explicabo quidem quod exercitationem aspernatu repellendus",
  },
];

const Testimonials = () => {
  // const [currentSlide, setCurrentSlide] = useState(0);

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setCurrentSlide((prev) => (prev === data.length - 1 ? 0 : prev + 1));
  //   }, 7000);

  //   return () => clearInterval(interval);
  // }, []);

  return (
    <div className="testimonials">
      <div className="container">
        <div className="top">
          <h1>What our Clients say about us!</h1>
          <p>
            Our clients send us bunch of smiles with our services and we love
            them.
          </p>
        </div>
        <div className="items">
          {data.map((item) => (
            <TestimonialItem key={item.id} item={item} />
          ))}
        </div>
      </div>
      <div class="slanted-line"></div>
    </div>
  );
};

export default Testimonials;
