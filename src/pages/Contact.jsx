import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Contact.css";

const images = {
  hero: "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=1200&q=85",
  email:
    "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=700&q=80",
  support:
    "https://images.unsplash.com/photo-1501139083538-0139583c060f?auto=format&fit=crop&w=700&q=80",
  care: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=700&q=80",
  desk: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=85",
  store:
    "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=900&q=85",
};

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    setStatus("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus(
      "Your form is ready! Connect an email service to send your message.",
    );
  };

  return (
    <main className="contact-page">
      {/* HERO */}
      <section className="contact-hero">
        <div className="container contact-container">
          <div className="row align-items-center g-5">
            <div className="col-12 col-lg-6">
              <span className="contact-eyebrow">
                <span>✦</span> WE'RE HERE TO HELP
              </span>

              <h1>
                Let's Start a
                <span className="contact-green d-block">Conversation.</span>
              </h1>

              <p className="contact-hero-text">
                Have a question about our products or need help with your
                shopping experience? We'd love to hear from you.
              </p>

              <div className="contact-hero-actions">
                <a href="#contact-form" className="contact-hero-btn">
                  Send Us a Message <span>→</span>
                </a>

                <NavLink to="/shop" className="contact-outline-btn">
                  Explore Our Shop
                </NavLink>
              </div>

              <div className="contact-trust-row">
                <div>
                  <span className="contact-trust-icon">♧</span>
                  <div>
                    <strong>Friendly Support</strong>
                    <small>We're here to help</small>
                  </div>
                </div>

                <div>
                  <span className="contact-trust-icon">✓</span>
                  <div>
                    <strong>Safe & Secure</strong>
                    <small>Your information matters</small>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-12 col-lg-6">
              <div className="contact-hero-image">
                <div className="contact-image-circle"></div>
                <img
                  src={images.hero}
                  alt="Beautiful lifestyle products and greenery"
                />

                <div className="contact-image-note">
                  <span>✦</span>
                  <div>
                    <strong>We're always here</strong>
                    <small>for you.</small>
                  </div>
                </div>

                <div className="contact-image-label">
                  Thoughtful service, every time.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT CARDS */}
      <section className="contact-info-section">
        <div className="container contact-container">
          <div className="row g-4 justify-content-center">
            <div className="col-12 col-md-6 col-xl-4">
              <article className="contact-info-card">
                <img src={images.email} alt="A welcoming workspace" />
                <div className="contact-card-content">
                  <span className="contact-info-icon">✉</span>
                  <h3>Email Us</h3>
                  <p>Send us your questions and we'll be happy to help.</p>
                  <a href="mailto:hello@example.com">hello@example.com →</a>
                </div>
              </article>
            </div>

            <div className="col-12 col-md-6 col-xl-4">
              <article className="contact-info-card">
                <img
                  src={images.support}
                  alt="Clock representing support hours"
                />
                <div className="contact-card-content">
                  <span className="contact-info-icon">◷</span>
                  <h3>Support Hours</h3>
                  <p>Have a question? We'd love to hear from you.</p>
                  <span className="contact-card-link">Monday – Saturday</span>
                </div>
              </article>
            </div>

            <div className="col-12 col-md-6 col-xl-4">
              <article className="contact-info-card">
                <img
                  src={images.care}
                  alt="Comfortable customer service workspace"
                />
                <div className="contact-card-content">
                  <span className="contact-info-icon">♡</span>
                  <h3>Customer Care</h3>
                  <p>
                    We're here for product questions, orders, and enquiries.
                  </p>
                  <a href="#contact-form">Send us a message →</a>
                </div>
              </article>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT FORM */}
      <section className="contact-form-section" id="contact-form">
        <div className="container contact-container">
          <div className="row align-items-center g-5">
            <div className="col-12 col-lg-5">
              <div className="contact-form-visual">
                <img src={images.desk} alt="A calm, welcoming workspace" />

                <div className="contact-visual-caption">
                  <span>✦</span>
                  <div>
                    <strong>Personal Support</strong>
                    <p>We're happy to answer your questions.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-12 col-lg-7">
              <div className="contact-form-intro">
                <span className="contact-eyebrow">✦ GET IN TOUCH</span>
                <h2>
                  Send Us a<span className="contact-green"> Message.</span>
                </h2>
                <p>
                  Fill out the form and tell us how we can help. Fields marked
                  with * are required.
                </p>
              </div>

              <div className="contact-form-card">
                <form onSubmit={handleSubmit}>
                  <div className="row g-3">
                    <div className="col-12 col-md-6">
                      <label htmlFor="contact-name">Full Name *</label>
                      <input
                        id="contact-name"
                        type="text"
                        name="name"
                        placeholder="Enter your name"
                        value={formData.name}
                        onChange={handleChange}
                        autoComplete="name"
                        maxLength={100}
                        required
                      />
                    </div>

                    <div className="col-12 col-md-6">
                      <label htmlFor="contact-email">Email Address *</label>
                      <input
                        id="contact-email"
                        type="email"
                        name="email"
                        placeholder="you@example.com"
                        value={formData.email}
                        onChange={handleChange}
                        autoComplete="email"
                        maxLength={254}
                        required
                      />
                    </div>

                    <div className="col-12">
                      <label htmlFor="contact-subject">Subject *</label>
                      <input
                        id="contact-subject"
                        type="text"
                        name="subject"
                        placeholder="How can we help?"
                        value={formData.subject}
                        onChange={handleChange}
                        maxLength={150}
                        required
                      />
                    </div>

                    <div className="col-12">
                      <label htmlFor="contact-message">Your Message *</label>
                      <textarea
                        id="contact-message"
                        name="message"
                        rows="5"
                        placeholder="Write your message here..."
                        value={formData.message}
                        onChange={handleChange}
                        maxLength={3000}
                        required
                      />
                    </div>

                    <div className="col-12">
                      <button type="submit" className="contact-submit-btn">
                        Send Message <span>→</span>
                      </button>
                    </div>

                    {status && (
                      <div className="col-12">
                        <p className="contact-form-status" role="status">
                          {status}
                        </p>
                      </div>
                    )}
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* STORE SECTION */}
      <section className="contact-store-section">
        <div className="container contact-container">
          <div className="row align-items-center g-4">
            <div className="col-12 col-lg-5">
              <span className="contact-eyebrow">✦ OUR LOCATION</span>
              <h2>
                Visit <span className="contact-green">Our Store.</span>
              </h2>
              <p>
                We'd love to see you in person. Get in touch with us for store
                details and product enquiries.
              </p>

              <div className="contact-store-detail">
                <span>⌖</span>
                <p>Update this with your store address</p>
              </div>

              <div className="contact-store-detail">
                <span>☎</span>
                <p>Update this with your contact number</p>
              </div>

              <div className="contact-store-detail">
                <span>✉</span>
                <a href="mailto:hello@example.com">hello@example.com</a>
              </div>
            </div>

            <div className="col-12 col-lg-7">
              <div className="contact-store-images">
                <div className="contact-map-placeholder">
                  <span>⌖</span>
                  <strong>Your Store Location</strong>
                  <small>Add your Google Maps embed here</small>
                </div>
                <img src={images.store} alt="Modern retail store interior" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BOTTOM CTA */}
      <section className="contact-bottom-cta">
        <div className="container contact-container">
          <div className="row align-items-center g-3">
            <div className="col-12 col-md-8">
              <h2>Still Have Questions?</h2>
              <p>Our team is here to help you with anything you need.</p>
            </div>

            <div className="col-12 col-md-4 text-md-end">
              <a href="#contact-form" className="contact-cta-btn">
                Get Support <span>→</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
