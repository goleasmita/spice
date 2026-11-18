import React from "react";
import "./Home.css";
import spice from "../assets/spice_bg.png";
import product from "../assets/spice2.jpeg";
import spices from "../assets/Package Design.jpg";
import spices2 from "../assets/nutmeg.jpg";
import spices3 from "../assets/Coriander.jpg";
import spices4 from "../assets/spice5.jpeg";
import { NavLink } from "react-router-dom";

export default function Home() {
  const data = [
    {
      id: "1",
      badge: "Organic",
      category: "Whole Spices",
      title: "Black Pepper",
      oldPrice: "350",
      newPrice: "250",
      rating: 5,
      img: spices,
    },
    {
      id: "2",
      badge: "Organic",
      category: "Whole Spices",
      title: "Nutmeg",
      oldPrice: "450",
      newPrice: "380",
      rating: 4,
      img: spices2,
    },
    {
      id: "3",
      badge: "Organic",
      category: "Ground Spices",
      title: "Coriander Powder",
      oldPrice: "220",
      newPrice: "180",
      rating: 5,
      img: spices3,
    },
    {
      id: "4",
      badge: "Organic",
      category: "Natural Powder",
      title: "Beetroot Powder",
      oldPrice: "320",
      newPrice: "260",
      rating: 4,
      img: spices4,
    },
  ];
  return (
    <>
      <section className="hero">
        <div className="container-fluid  g-0">
          <div className="row g-0 ">
            <div className="col-lg-6 py-5">
              <div className="hero-section">
                <span className="hero-tag">New Collection</span>

                <h1 className="text-center">
                  Discover <br /> Trendy Fashion For EveryOne
                </h1>

                <p>
                  Shop premium quality product with the latest styles at
                  affordable prices.
                </p>
                <button className="btn hero-btn  ">Shop Now</button>

                <button className="btn hero-btn2  ">Explore</button>
              </div>
            </div>
            <div className="col-lg-6 hero-img">
              <img src={spice} className="img-fluid w-100" alt="" />
            </div>
          </div>
        </div>
      </section>
      <div className="container-fluid home-section">
        <div className="container py-5">
          <div className="row g-4">
            {/* Large Card */}
            <div className="col-lg-6">
              <div className=" page-wrapper">
                <div className="page-inner">
                  <div className="row">
                    <div className="el-wrapper">
                      <div className="box-up">
                        <img className="img-fluid" src={product} alt />
                        <div className="img-info">
                          <div className="info-inner">
                            <span className="p-name">I feel like Pablo</span>
                            <span className="p-company">Yeezy</span>
                          </div>
                          <div className="a-size">
                            Available sizes :{" "}
                            <span className="size">S , M , L , XL</span>
                          </div>
                        </div>
                      </div>
                      <div className="box-down">
                        <div className="h-bg">
                          <div className="h-bg-inner" />
                        </div>
                        <a className="cart" href="#">
                          <span className="price">$120</span>
                          <span className="add-to-cart">
                            <span className="txt">Add To cart</span>
                          </span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side */}
            <div className="col-lg-6">
              <div className="row g-4">
                {data.map((item) => (
                  <div className="col-md-6" key={item}>
                    <div className="spice-card">
                      <img
                        src={item.img}
                        alt="Black Pepper"
                        className="spice-img"
                      />

                      <div className="spice-overlay">
                        <div className="card-top">
                          <span className="spice-badge">{item.badge}</span>

                          <span className="spice-heart">♡</span>
                        </div>

                        <div className="card-bottom">
                          <span className="spice-category">
                            {item.category}
                          </span>

                          <h4>{item.title}</h4>

                          <div className="spice-rating">
                            {[...Array(item.rating)].map((_, index) => (
                              <span key={index}>★</span>
                            ))}
                          </div>

                          <div className="spice-bottom">
                            <div>
                              <span className="old-price">{item.oldPrice}</span>
                              <h5>{item.newPrice}</h5>
                            </div>

                            <button>+</button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className=" d-flex align-items-center justify-content-center ">
          {" "}
          <NavLink
            className="btn btn-outline-light rounded-5 p-3"
            to="/products">
            View All Prodcuts
          </NavLink>
        </div>
      </div>
    </>
  );
}
