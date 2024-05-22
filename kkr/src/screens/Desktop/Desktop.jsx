import React from "react";
import "./style.css";

export const Desktop = () => {
  return (
    <div className="desktop">
      <div className="overlap-wrapper">
        <div className="overlap">
          <div className="overlap-group">
            <img className="ellipse" alt="Ellipse" src="/img/ellipse-1.png" />
            <img className="kkrw" alt="Kkrw" src="/img/kkrw-1.png" />
            <div className="text-wrapper">KARTHIKESH ROBOTICS</div>
            <div className="about-us">ABOUT US</div>
            <div className="home">HOME</div>
          </div>
          <div className="div">
            <img className="img" alt="Ellipse" src="/img/ellipse-2.png" />
            <div className="text-wrapper-2">OUR VISSION</div>
            <img className="vector" alt="Vector" src="/img/vector-1.png" />
            <p className="OUR-AUTONOMOUS-WILL">
              OUR AUTONOMOUS WILL ROBOTS
              <br />
              SIMPLFY YOUR WORK
            </p>
            <img className="image" alt="Image" src="/img/image-6.png" />
          </div>
          <div className="text-wrapper-3">OUR MISSION</div>
          <div className="text-wrapper-4">OUR PRODUCTS</div>
        </div>
      </div>
    </div>
  );
};
