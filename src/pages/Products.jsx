import React, { useState } from "react";
import "./Product.css";
import products from "../components/products";
import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/slice";

export default function Products() {
  const [category, setCategory] = useState("All");
  const [sort, setSort] = useState("default");

  const dispatch = useDispatch();

  // Get unique product categories
  const categories = ["All", ...new Set(products.map((item) => item.category))];

  // Filter products by category
  let filteredProducts = products.filter((product) => {
    return category === "All" || product.category === category;
  });

  // Sort products
  if (sort === "lowToHigh") {
    filteredProducts.sort(
      (a, b) => parseFloat(a.newPrice) - parseFloat(b.newPrice),
    );
  }

  if (sort === "highToLow") {
    filteredProducts.sort(
      (a, b) => parseFloat(b.newPrice) - parseFloat(a.newPrice),
    );
  }

  if (sort === "rating") {
    filteredProducts.sort((a, b) => b.rating - a.rating);
  }

  // Reset all filters
  const clearFilters = () => {
    setCategory("All");
    setSort("default");
  };

  return (
    <div className="product">
      <div className="product-layout">
        {/* LEFT SIDEBAR */}
        <aside className="product-sidebar">
          <div className="product-filter">
            <h4 className="mb-4">Filters</h4>

            {/* CATEGORY FILTER */}
            <div className="mb-4">
              <label htmlFor="category" className="form-label fw-semibold">
                Category
              </label>

              <select
                id="category"
                className="form-select"
                value={category}
                onChange={(e) => setCategory(e.target.value)}>
                {categories.map((item) => (
                  <option key={item} value={item}>
                    {item}
                  </option>
                ))}
              </select>
            </div>

            {/* SORT FILTER */}
            <div className="mb-4">
              <label htmlFor="sort" className="form-label fw-semibold">
                Sort By
              </label>

              <select
                id="sort"
                className="form-select"
                value={sort}
                onChange={(e) => setSort(e.target.value)}>
                <option value="default">Default</option>
                <option value="lowToHigh">Price: Low to High</option>
                <option value="highToLow">Price: High to Low</option>
                <option value="rating">Highest Rating</option>
              </select>
            </div>

            {/* CLEAR FILTERS */}
            <button
              type="button"
              className="btn btn-outline-success w-100"
              onClick={clearFilters}>
              Clear Filters
            </button>
          </div>
        </aside>

        {/* RIGHT PRODUCT SECTION */}
        <main className="product-main">
          {/* PAGE HEADING */}
          <div className="d-flex justify-content-between align-items-center flex-wrap gap-2 mb-4">
            <h2 className="mb-0">Our Products</h2>

            <span className="text-muted">
              {filteredProducts.length} Products
            </span>
          </div>

          {/* PRODUCT LIST */}
          {filteredProducts.length === 0 ? (
            <div className="alert alert-light text-center">
              <h4>No products found</h4>
              <p>Try selecting another category.</p>
            </div>
          ) : (
            <div className="row row-cols-1 row-cols-sm-2 row-cols-xl-3 g-4 py-2">
              {filteredProducts.map((v) => (
                <div className="col" key={v.id}>
                  <div className="product-card h-100">
                    {/* PRODUCT IMAGE */}
                    <div className="product-image">
                      <img src={v.img} alt={v.title} />

                      {v.badge && <span className="sale-badge">{v.badge}</span>}

                      {/* WISHLIST */}
                      <span className="wishlist">♥</span>

                      {/* QUICK VIEW */}
                      <div className="quick-view">
                        <NavLink to={`/detail/${v.id}`}>Quick View</NavLink>
                      </div>
                    </div>

                    {/* PRODUCT DETAILS */}
                    <div className="product-content d-flex flex-column">
                      <span className="category">{v.category}</span>

                      <h3>{v.title}</h3>

                      {/* RATING */}
                      <div className="spice-rating mb-3">
                        {[...Array(v.rating)].map((_, index) => (
                          <span key={index}>⭐</span>
                        ))}
                      </div>

                      {/* PRICE */}
                      <div className="price-box mt-auto">
                        <span className="price">₹{v.newPrice}</span>

                        <span className="old-price">₹{v.oldPrice}</span>
                      </div>

                      {/* ADD TO CART */}

                      <button
                        type="button"
                        className="product-btn"
                        onClick={() => {
                          dispatch(addToCart(v));
                          alert(`${v.title} added to cart!`);
                        }}>
                        Add to Cart
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </main>
      </div>
    </div>
  );
}
