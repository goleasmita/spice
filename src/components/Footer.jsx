import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./footer.css";

export default function Footer() {
  const [email, setEmail] = useState("");

  const handleSubscribe = (e) => {
    e.preventDefault();

    if (!email.trim()) return;

    // Connect your newsletter API here.
    alert("Newsletter subscription is not connected yet.");
    setEmail("");
  };

  return (
    <footer className="site-footer">
      {/* NEWSLETTER */}
      <div className="footer-newsletter">
        <div className="container-fluid footer-container">
          <div className="row align-items-center g-4">
            <div className="col-12 col-lg-6">
              <span className="footer-eyebrow">STAY IN THE LOOP</span>

              <h2>Good things, delivered.</h2>

              <p>
                Subscribe to receive updates about new arrivals, latest
                products, and special offers.
              </p>
            </div>

            <div className="col-12 col-lg-6">
              <form className="newsletter-form" onSubmit={handleSubscribe}>
                <label className="visually-hidden" htmlFor="footer-email">
                  Email address
                </label>

                <input
                  id="footer-email"
                  type="email"
                  placeholder="Enter your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  autoComplete="email"
                  required
                />

                <button type="submit">
                  Subscribe <span aria-hidden="true">→</span>
                </button>
              </form>

              <small className="newsletter-note">
                Stay connected with us. Unsubscribe anytime.
              </small>
            </div>
          </div>
        </div>
      </div>

      {/* MAIN FOOTER */}
      <div className="footer-main">
        <div className="container-fluid footer-container">
          <div className="row g-4 g-lg-5">
            {/* BRAND */}
            <div className="col-12 col-md-6 col-lg-4">
              <NavLink to="/" className="footer-brand">
                <span className="footer-brand-icon">✦</span>
                <span>
                  Masala<span className="brand-green">King</span>
                </span>
              </NavLink>

              <p className="footer-description">
                Your destination for discovering products you love. We aim to
                make everyday shopping simple, convenient, and enjoyable.
              </p>

              <div className="footer-socials">
                <a
                  href="https://www.instagram.com/"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Instagram">
                  ig
                </a>

                <a
                  href="https://www.facebook.com/"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Facebook">
                  f
                </a>

                <a
                  href="https://www.pinterest.com/"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Pinterest">
                  p
                </a>
              </div>
            </div>

            {/* QUICK LINKS */}
            <div className="col-6 col-md-6 col-lg-2">
              <h5 className="footer-heading">Quick Links</h5>

              <ul className="footer-links">
                <li>
                  <NavLink to="/">Home</NavLink>
                </li>
                <li>
                  <NavLink to="/products">Products</NavLink>
                </li>
                <li>
                  <NavLink to="/about">About Us</NavLink>
                </li>
                <li>
                  <NavLink to="/contact">Contact</NavLink>
                </li>
              </ul>
            </div>

            {/* CUSTOMER SERVICE */}
            <div className="col-6 col-md-6 col-lg-3">
              <h5 className="footer-heading">Customer Care</h5>

              <ul className="footer-links">
                <li>
                  <NavLink to="/cart">Shopping Cart</NavLink>
                </li>
                <li>
                  <NavLink to="/orders">My Orders</NavLink>
                </li>
                <li>
                  <NavLink to="/privacy">Privacy Policy</NavLink>
                </li>
                <li>
                  <NavLink to="/terms">Terms &amp; Conditions</NavLink>
                </li>
              </ul>
            </div>

            {/* CONTACT */}
            <div className="col-12 col-md-6 col-lg-3">
              <h5 className="footer-heading">Get in Touch</h5>

              <ul className="footer-contact">
                <li>
                  <span className="contact-icon">@</span>
                  <div>
                    <small>Email us</small>
                    <a href="mailto:hello@example.com">hello@example.com</a>
                  </div>
                </li>

                <li>
                  <span className="contact-icon">⌖</span>
                  <div>
                    <small>Customer support</small>
                    <span>We're here to help</span>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* COPYRIGHT */}
      <div className="footer-bottom">
        <div className="container-fluid footer-container">
          <div className="row align-items-center g-3">
            <div className="col-12 col-md-6">
              <p className="copyright-text">
                © {new Date().getFullYear()} MasalaKing. All rights reserved.
              </p>
            </div>

            <div className="col-12 col-md-6">
              <p className="footer-made">
                Made with <span>♥</span> for better shopping
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
