import React from "react";
import "./About.css";
import { NavLink } from "react-router-dom";

export default function About() {
  return (
    <div className="about-page">
      {/* HERO SECTION */}
      <section className="about-hero">
        <div className="container-fluid about-container">
          <div className="row align-items-center g-4 g-lg-5">
            <div className="col-12 col-lg-6">
              <div className="about-hero-content">
                <span className="about-tag">
                  <span className="tag-dot"></span>
                  ABOUT OUR STORE
                </span>

                <h1>
                  Fresh Choices,
                  <span className="green-text d-block">Better Living.</span>
                </h1>

                <p>
                  We believe shopping for your everyday essentials should be
                  simple, enjoyable, and full of quality. Discover products
                  selected with care to make your everyday life better.
                </p>

                <div className="about-hero-actions">
                  <NavLink to="/products" className="about-btn">
                    Explore Products
                    <span aria-hidden="true"> ↗</span>
                  </NavLink>

                  <a href="#our-story" className="about-text-link">
                    Discover Our Story
                  </a>
                </div>

                <div className="about-highlights row g-3">
                  <div className="col-6">
                    <div className="highlight-item">
                      <span className="highlight-icon">✓</span>
                      <span>Thoughtful Selection</span>
                    </div>
                  </div>

                  <div className="col-6">
                    <div className="highlight-item">
                      <span className="highlight-icon">♡</span>
                      <span>Customer Focused</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-12 col-lg-6">
              <div className="about-hero-visual">
                <div className="hero-image-frame">
                  <img
                    src="https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=1200&q=85"
                    alt="Fresh produce displayed in a market"
                    fetchPriority="high"
                    className="hero-main-image"
                  />
                </div>

                <div className="hero-floating-card">
                  <span className="floating-icon">✦</span>
                  <div>
                    <strong>Made for Everyday</strong>
                    <p>A better shopping experience</p>
                  </div>
                </div>

                <div className="hero-decoration"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* OUR STORY */}
      <section className="about-story" id="our-story">
        <div className="container-fluid about-container">
          <div className="row align-items-center g-4 g-lg-5">
            <div className="col-12 col-lg-6">
              <div className="story-visual">
                <img
                  src="https://images.unsplash.com/photo-1543168256-418811576931?auto=format&fit=crop&w=1000&q=85"
                  alt="Products arranged for shopping"
                  loading="lazy"
                  className="story-image"
                />

                <div className="story-image-label">
                  <span>Our philosophy</span>
                  <strong>Simple. Thoughtful. Convenient.</strong>
                </div>
              </div>
            </div>

            <div className="col-12 col-lg-6">
              <div className="story-content">
                <span className="about-tag">OUR STORY</span>

                <h2>
                  More Than Just
                  <span className="green-text d-block">Shopping.</span>
                </h2>

                <p>
                  Our journey began with a simple idea: make it easier for
                  people to find products they love in one place. We focus on a
                  convenient shopping experience, thoughtful product selection,
                  and friendly service.
                </p>

                <p>
                  From discovering something new to finding your everyday
                  favourites, we want every visit to our store to feel easy and
                  worthwhile.
                </p>

                <div className="row g-3 mt-3">
                  <div className="col-12 col-sm-6">
                    <div className="story-point">
                      <span className="story-point-icon">✦</span>
                      <h5>Quality First</h5>
                      <p>Products selected with care.</p>
                    </div>
                  </div>

                  <div className="col-12 col-sm-6">
                    <div className="story-point">
                      <span className="story-point-icon">♡</span>
                      <h5>Customer Focus</h5>
                      <p>Your shopping experience matters.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* OUR VALUES */}
      <section className="about-values">
        <div className="container-fluid about-container">
          <div className="section-heading text-center">
            <span className="about-tag">WHAT WE STAND FOR</span>
            <h2>
              The Values Behind
              <span className="green-text"> Our Store</span>
            </h2>
            <p>The principles that shape the way we serve you.</p>
          </div>

          <div className="row g-4">
            <div className="col-12 col-md-6 col-xl-4">
              <div className="value-card h-100">
                <div className="value-card-top">
                  <div className="value-icon">✦</div>
                  <span className="value-number">01</span>
                </div>

                <h4>Quality Products</h4>

                <p>
                  We aim to offer a thoughtful selection of products that meet
                  our standards for quality and value.
                </p>

                <div className="value-bottom-line"></div>
              </div>
            </div>

            <div className="col-12 col-md-6 col-xl-4">
              <div className="value-card h-100">
                <div className="value-card-top">
                  <div className="value-icon">♡</div>
                  <span className="value-number">02</span>
                </div>

                <h4>Customer Satisfaction</h4>

                <p>
                  We strive to make every step of your shopping experience
                  smooth, helpful, and convenient.
                </p>

                <div className="value-bottom-line"></div>
              </div>
            </div>

            <div className="col-12 col-md-6 col-xl-4">
              <div className="value-card h-100">
                <div className="value-card-top">
                  <div className="value-icon">✓</div>
                  <span className="value-number">03</span>
                </div>

                <h4>Trust &amp; Transparency</h4>

                <p>
                  Clear product information and honest communication help build
                  lasting customer relationships.
                </p>

                <div className="value-bottom-line"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CALL TO ACTION */}
      <section className="about-cta">
        <div className="container-fluid about-container">
          <div className="cta-inner text-center">
            <span className="cta-label">YOUR NEXT FAVOURITE AWAITS</span>

            <h2>
              Good Finds.
              <span className="cta-highlight"> Great Choices.</span>
            </h2>

            <p>
              Explore our collection and discover products that fit your
              everyday needs.
            </p>

            <NavLink to="/products" className="about-btn cta-btn">
              Shop Our Collection
              <span aria-hidden="true"> →</span>
            </NavLink>
          </div>
        </div>
      </section>
    </div>
  );
}
