import { useEffect, useState } from "react";
import "./slider.scss";
import TestimonialItem from "../testimonialItem/TestimonialItem";

const data = [
  {
    id: 1,
    img: "/myprofilepic.jpg",
    name: "John Smith",
    company: "CEO Own Company",
    comment: "Another",
  },
  {
    id: 2,
    img: "/bg1.jpg",
    name: "John Smith",
    company: "CEO Own Company",
    comment:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiissapiente,explicabo quidem quod exercitationem aspernatu repellendus",
  },
  {
    id: 3,
    img: "/bg2.jpg",
    name: "John Smith",
    company: "CEO Own Company",
    comment:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiissapiente,explicabo quidem quod exercitationem aspernatu repellendus",
  },
  {
    id: 4,
    img: "/bg3.jpg",
    name: "John Smith",
    company: "CEO Own Company",
    comment:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiissapiente,explicabo quidem quod exercitationem aspernatu repellendus",
  },
  {
    id: 5,
    img: "/bg4.jpg",
    name: "John Smith",
    company: "CEO Own Company",
    comment:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiissapiente,explicabo quidem quod exercitationem aspernatu repellendus",
  },
  {
    id: 6,
    img: "/bg5.jpg",
    name: "John Smith",
    company: "CEO Own Company",
    comment:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiissapiente,explicabo quidem quod exercitationem aspernatu repellendus",
  },
];

const Slider = ({ autoplayInterval }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const autoplayTimer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % data.length);
    }, autoplayInterval);

    return () => {
      clearInterval(autoplayTimer);
    };
  }, [data.length, autoplayInterval]);

  return (
    <div className="slider">
      <div className="slide-container">
        {data.map((item) => (
          <TestimonialItem item={item} key={item.id} />
        ))}
      </div>
    </div>
  );
};

export default Slider;
