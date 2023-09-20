import React from "react";
import AboutImg from "../assets/images/about-img.jpg";

const About = () => {
  return (
    <>
      <section className="about" id="about">
        <h1 className="heading">
          <span>About</span> Us
        </h1>
        <div className="row">
          <div className="image">
            <img src={AboutImg} alt="" />
          </div>
          <div className="content">
            <h3>What's unique about us?</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
              sapiente, tempora ipsam explicabo nulla sint?
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Repudiandae, culpa?
            </p>
            <a href="#" className="btn">
              Learn More
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
