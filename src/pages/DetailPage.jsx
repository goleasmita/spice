import React, { useState } from "react";
import { useParams } from "react-router-dom";
import products from "../components/products";
import { FaStar } from "react-icons/fa";

export default function DetailPage() {
  const { id } = useParams();

  const product = products.find((item) => item.id === Number(id));

  if (!product) {
    return (
      <div className="container py-5 text-center">
        <h2>Product Not Found</h2>
      </div>
    );
  }
  return (
    <>
      <section className="py-5">
        <div className="container pt-5 mt-5">
          <div className="row align-items-center g-5 ">
            {/* Product Image */}
            <div className="col-lg-6">
              <div className="border rounded-4 p-4 shadow-sm">
                <img
                  src={product.img}
                  alt={product.title}
                  className="img-fluid rounded-4 w-100"
                  style={{ height: "500px", objectFit: "cover" }}
                />
              </div>
            </div>

            {/* Product Details */}
            <div className="col-lg-6">
              <span className="badge bg-success mb-3 fs-6">
                {product.badge}
              </span>

              <h2 className="fw-bold">{product.title}</h2>

              <p className="text-muted fs-5">Category : {product.category}</p>

              {/* Rating */}
              <div className="mb-3">
                {[...Array(product.rating)].map((_, index) => (
                  <FaStar key={index} color="#ffc107" />
                ))}
              </div>

              {/* Price */}
              <div className="mb-4">
                <span className="text-decoration-line-through text-muted fs-5 me-3">
                  ₹{product.oldPrice}
                </span>

                <span className="fs-2 fw-bold text-success">
                  ₹{product.newPrice}
                </span>
              </div>

              <p className="text-secondary">
                Our premium quality {product.title.toLowerCase()} is carefully
                sourced and hygienically packed to retain its natural aroma,
                freshness, and taste. Perfect for daily cooking and healthy
                recipes.
              </p>

              <div className="d-flex gap-3 mt-4">
                <button className="btn btn-success px-4 py-2">
                  Add to Cart
                </button>

                <button className="btn btn-outline-dark px-4 py-2">
                  Buy Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
