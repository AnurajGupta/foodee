import React from "react";
import { BsFacebook, BsLinkedin, BsTwitter, BsPinterest } from "react-icons/bs";
import { AiFillInstagram } from "react-icons/ai";

const Footer = () => {
  return (
    <>
      <section className="footer">
        <div className="share">
          <a href="#">
            <BsFacebook />
          </a>
          <a href="#">
            <AiFillInstagram />
          </a>
          <a href="#">
            <BsLinkedin />
          </a>
          <a href="#">
            <BsTwitter />
          </a>
          <a href="#">
            <BsPinterest />
          </a>
        </div>
        <div className="links">
          <a href="#">Home</a>
          <a href="#">About Us</a>
          <a href="#">Menu</a>
          <a href="#">Product</a>
          <a href="#">Review</a>
          <a href="#">Contact</a>
          <a href="#">Blog</a>
        </div>
        <div className="credit">
          Created by <span>Vengence</span> | © 2023 All Rights Reserved
        </div>
      </section>
    </>
  );
};

export default Footer;
