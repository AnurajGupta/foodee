import React from "react";
import { menu } from "../Data";

const Menu = () => {
  return (
    <>
      <section className="menu" id="menu">
        <h1 className="heading">
          our <span>menu</span>
        </h1>
        <div className="box-container">
          {menu.map((item, index) => (
            <div className="box" key={index}>
              <img src={item.img} alt="" />
              <h3>Fresh & Delicious</h3>
              <div className="price">
                $15.99 <span>$20.00</span>
              </div>
              <a href="#" className="btn">
                Add to Cart
              </a>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Menu;
