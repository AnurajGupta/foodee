import React from "react";
import { blog } from "../Data";

const Blogs = () => {
  return (
    <>
      <section className="blogs" id="blogs">
        <h1 className="heading">
          Our <span>Blogs</span>
        </h1>
        <div className="box-container">
          {blog.map((item, index) => (
            <div className="box" key={index}>
              <div className="image">
                <img src={item.img} alt="" />
              </div>
              <div className="content">
                <a href="#" className="title">
                  Fresh & Juicy
                </a>
                <span>by admin / 16th september , 2023</span>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa
                  reprehenderit ipsum eligendi.
                </p>
                <a href="#" className="btn">
                  Read More
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Blogs;
