import { useEffect, useState } from "react";
import "./partners.scss";

const data = [
  "Partner1",
  "Partner2",
  "Partner3",
  "Partner4",
  "Partner5",
  "Partner6",
  "Partner7",
  "Partner8",
  "Partner9",
  "Partner10",
];

const Partners = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const autoplayTimer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % data.length);
    }, 3000);

    return () => {
      clearInterval(autoplayTimer);
    };
  }, [data.length, 3000]);

  return (
    <div className="partners">
      <h1>Our Trusted Partners</h1>
      <div className="partners-list">
        {data.map((partner, index) => (
          <div className="partners-list-item" key={index}>
            {partner}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Partners;
