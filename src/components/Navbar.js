import React, { useRef } from "react";
import Logo from "../assets/images/logo.png";
import { FaSearch, FaShoppingCart } from "react-icons/fa";
import { AiOutlineMenu, AiOutlineCloseCircle } from "react-icons/ai";
import { cart } from "../Data";

const Navbar = () => {
  const searchRef = useRef();
  const cartRef = useRef();
  const navbarRef = useRef();

  const searchHandler = () => {
    searchRef.current.classList.toggle("active");
    cartRef.current.classList.remove("active");
    navbarRef.current.classList.remove("active");
  };
  const cartHandler = () => {
    cartRef.current.classList.toggle("active");
    searchRef.current.classList.remove("active");
    navbarRef.current.classList.remove("active");
  };
  const navbarHandler = () => {
    navbarRef.current.classList.toggle("active");
    searchRef.current.classList.remove("active");
    cartRef.current.classList.remove("active");
  };
  return (
    <>
      <header className="header">
        <a href="#" className="logo">
          <img src={Logo} alt="" />
        </a>
        <nav className="navbar" ref={navbarRef}>
          <a href="#Home">Home</a>
          <a href="#About">About</a>
          <a href="#Menu">Menu</a>
          <a href="#Product">Product</a>
          <a href="#Review">Review</a>
          <a href="#Contact">Contact</a>
          <a href="#Blogs">Blogs</a>
        </nav>
        <div className="icons">
          <div>
            <FaSearch onClick={searchHandler} />
          </div>
          <div>
            <FaShoppingCart onClick={cartHandler} />
          </div>
          <div id="menu-btn">
            <AiOutlineMenu onClick={navbarHandler} />
          </div>
        </div>
        <div className="search-form" ref={searchRef}>
          <input type="search" placeholder="search here.." id="search-box" />
          <label htmlFor="search-box"></label>
        </div>
        <div className="cart-items-container" ref={cartRef}>
          {cart.map((item, index) => (
            <div className="cart-item" key={index}>
              <img src={item.img} alt="" />
              <div className="content">
                <h3>Cart Item 01</h3>
                <div className="price">$15.99</div>
              </div>
              <span className="cross">
                <AiOutlineCloseCircle />
              </span>
            </div>
          ))}
          <a href="#" className="btn">
            Order Now
          </a>
        </div>
      </header>
    </>
  );
};

export default Navbar;
