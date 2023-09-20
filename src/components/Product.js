import React from "react";
import { product } from "../Data";
import { FaShoppingCart } from "react-icons/fa";
import { AiFillHeart, AiFillEye } from "react-icons/ai";
import { BsStarFill, BsStarHalf } from "react-icons/bs";

const Product = () => {
  return (
    <>
      <section className="products" id="products">
        <h1 className="heading">
          Our <span>Products</span>
        </h1>
        <div className="box-container">
          {product.map((item, index) => (
            <div className="box" key={index}>
              <div className="icons">
                <a href="#" className="product-icon">
                  <FaShoppingCart />
                </a>
                <a href="#" className="product-icon">
                  <AiFillHeart />
                </a>
                <a href="#" className="product-icon">
                  <AiFillEye />
                </a>
              </div>
              <div className="image">
                <img src={item.img} alt="" />
              </div>
              <div className="content">
                <h3>Fresh & Delicious</h3>
                <div className="stars">
                  <BsStarFill />
                  <BsStarFill />
                  <BsStarFill />
                  <BsStarFill />
                  <BsStarHalf />
                </div>
                <div className="price">
                  $15.99 <span>$20.00</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Product;
