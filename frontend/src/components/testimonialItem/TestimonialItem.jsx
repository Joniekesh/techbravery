import "./testimonialItem.scss";
import { FaStar } from "react-icons/fa6";
import { useEffect, useState } from "react";

const TestimonialItem = ({ item }) => {
  return (
    <div className="slide">
      <div className="testimonialContainer">
        <div className="top">
          <div className="left">
            <img src={item.img} alt="" />
          </div>
          <div className="right">
            <div className="icons">
              <span>
                <FaStar />
              </span>
              <span>
                <FaStar />
              </span>
              <span>
                <FaStar />
              </span>
              <span>
                <FaStar />
              </span>
              <span>
                <FaStar />
              </span>
            </div>
            <div className="userInfo">
              <span className="name">{item.name}</span>
              <span className="org">{item.company}</span>
            </div>
          </div>
        </div>
        <div className="bottom">
          <p>{item.comment}</p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialItem;
