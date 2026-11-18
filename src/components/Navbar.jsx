import React, { useEffect, useState } from "react";
import {
  FaBars,
  FaSearch,
  FaShoppingCart,
  FaTimes,
  FaUser,
} from "react-icons/fa";
import { NavLink } from "react-router-dom";
import "./Navbar.css";
import logo from "../assets/logospice.webp";
import { useSelector } from "react-redux";

export default function Navbar() {
  const [menu, setMenu] = useState(false);
  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScroll(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const cartItems = useSelector((state) => state.cart.cartItems);

  const cartCount = cartItems.reduce((total, item) => total + item.quantity, 0);

  return (
    <div>
      <nav className={`navbar fixed-top ${scroll ? "transparent-nav" : ""}`}>
        <div className="container-fluid">
          <ul
            className={`${menu ? "nav-links active" : "nav-links"} ${
              scroll ? "transparent-nav-links" : ""
            }`}>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/products">Products</NavLink>
            </li>
            <li>
              <NavLink to="/about">About</NavLink>
            </li>
            <li>
              <NavLink to="/shop">Shop</NavLink>
            </li>
            <li>
              <NavLink to="/contact">Contact</NavLink>
            </li>

            <li>
              <NavLink to="/cart" className="nav-link">
                🛒 Cart
                <span className="badge bg-success ms-2">{cartCount}</span>
              </NavLink>
            </li>
          </ul>

          {/* logo */}
          <div className="logo">
            <NavLink to="/">
              <img src={logo} className="img-fluid" alt="" />
            </NavLink>
          </div>

          {/* right side  */}
          <div className="icons">
            <FaSearch className="icon" />
            <FaShoppingCart className="icon" />
            <FaUser className="icon" />

            <div className="menu-btn" onClick={() => setMenu(!menu)}>
              {menu ? <FaTimes /> : <FaBars />}
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
