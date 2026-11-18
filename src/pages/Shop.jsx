import React, { useMemo, useState } from "react";
import { NavLink } from "react-router-dom";
import products from "../components/products";
import "./Shop.css";

export default function Shop() {
  const [category, setCategory] = useState("All");
  const [sort, setSort] = useState("default");
  const [search, setSearch] = useState("");

  const categories = ["All", ...new Set(products.map((item) => item.category))];

  const filteredProducts = useMemo(() => {
    let result = products.filter((product) => {
      const matchesCategory =
        category === "All" || product.category === category;

      const matchesSearch = `${product.title} ${product.category}`
        .toLowerCase()
        .includes(search.trim().toLowerCase());

      return matchesCategory && matchesSearch;
    });

    if (sort === "lowToHigh") {
      result.sort((a, b) => parseFloat(a.newPrice) - parseFloat(b.newPrice));
    } else if (sort === "highToLow") {
      result.sort((a, b) => parseFloat(b.newPrice) - parseFloat(a.newPrice));
    } else if (sort === "rating") {
      result.sort((a, b) => b.rating - a.rating);
    }

    return result;
  }, [category, sort, search]);

  return (
    <main className="shop-page container-fluid g-0">
      {/* SHOP HERO */}

      {/* PREMIUM SHOP HERO */}
      <section className="shop-hero px-5">
        <div className="container-fluid shop-container">
          <div className="row align-items-center g-4 g-xl-5">
            {/* LEFT CONTENT */}
            <div className="col-12 col-lg-6">
              <div className="shop-hero-content">
                <span className="shop-hero-tag">
                  <span className="shop-tag-icon">✦</span>
                  DISCOVER YOUR FAVOURITES
                </span>

                <h1>
                  Shop Products
                  <span className="shop-green d-block">for Better Living.</span>
                </h1>

                <p className="shop-hero-description">
                  Discover our carefully selected collection of quality
                  products, thoughtfully chosen to make your everyday life more
                  enjoyable.
                </p>

                <div className="shop-hero-actions">
                  <a href="#shop-products" className="shop-hero-btn">
                    Explore Collection <span>→</span>
                  </a>

                  <button
                    type="button"
                    className="shop-secondary-btn"
                    onClick={() => {
                      const section = document.getElementById("shop-products");
                      section?.scrollIntoView({ behavior: "smooth" });
                    }}>
                    Browse Categories <span>↘</span>
                  </button>
                </div>

                {/* TRUST HIGHLIGHTS */}
                <div className="shop-hero-highlights">
                  <div className="shop-highlight">
                    <span className="shop-highlight-icon">✓</span>
                    <span>Quality Selection</span>
                  </div>

                  <div className="shop-highlight">
                    <span className="shop-highlight-icon">♡</span>
                    <span>Customer First</span>
                  </div>
                </div>
              </div>
            </div>

            {/* RIGHT VISUAL */}
            <div className="col-12 col-lg-6">
              <div className="shop-hero-visual">
                <div className="shop-hero-orbit"></div>

                <div className="shop-hero-image">
                  <img
                    src="https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=1200&q=85"
                    alt="Explore a beautiful selection of fresh products"
                    fetchPriority="high"
                  />
                </div>

                {/* FLOATING CARD */}
                <div className="shop-floating-card">
                  <span className="shop-floating-icon">✦</span>
                  <div>
                    <strong>Made for Everyday</strong>
                    <p>Discover something you love</p>
                  </div>
                </div>

                {/* DECORATIVE BADGE */}
                <div className="shop-round-badge">
                  <span>GOOD</span>
                  <strong>FINDS</strong>
                  <span>GOOD FEELING</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SHOP CONTENT */}
      <section className="shop-content" id="shop-products">
        <div className="container-fluid shop-container">
          <div className="shop-heading">
            <div>
              <span className="shop-eyebrow">OUR COLLECTION</span>
              <h2>Shop All Products</h2>
              <p>Find your next favourite from our collection.</p>
            </div>

            <span className="shop-count">
              {filteredProducts.length} products
            </span>
          </div>

          {/* SEARCH AND SORT */}
          <div className="row g-3 mb-4">
            <div className="col-12 col-md-6 col-lg-7">
              <div className="shop-search">
                <span aria-hidden="true">⌕</span>
                <input
                  type="search"
                  placeholder="Search products..."
                  aria-label="Search products"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                />
              </div>
            </div>

            <div className="col-12 col-md-6 col-lg-5">
              <div className="shop-sort">
                <label htmlFor="shop-sort">Sort by:</label>
                <select
                  id="shop-sort"
                  className="form-select"
                  value={sort}
                  onChange={(e) => setSort(e.target.value)}>
                  <option value="default">Featured</option>
                  <option value="lowToHigh">Price: Low to High</option>
                  <option value="highToLow">Price: High to Low</option>
                  <option value="rating">Highest Rating</option>
                </select>
              </div>
            </div>
          </div>

          {/* CATEGORY FILTERS */}
          <div className="shop-categories">
            {categories.map((item) => (
              <button
                key={item}
                type="button"
                className={`category-chip ${category === item ? "active" : ""}`}
                onClick={() => setCategory(item)}
                aria-pressed={category === item}>
                {item}
              </button>
            ))}
          </div>

          {/* PRODUCT GRID */}
          {filteredProducts.length === 0 ? (
            <div className="shop-empty">
              <div className="empty-icon">⌕</div>
              <h3>No products found</h3>
              <p>Try another search or choose a different category.</p>

              <button
                type="button"
                className="shop-hero-btn"
                onClick={() => {
                  setCategory("All");
                  setSearch("");
                  setSort("default");
                }}>
                Clear Filters
              </button>
            </div>
          ) : (
            <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 g-4">
              {filteredProducts.map((product) => (
                <div className="col" key={product.id}>
                  <article className="shop-product-card h-100">
                    <div className="shop-product-image">
                      <img
                        src={product.img}
                        alt={product.title}
                        loading="lazy"
                      />

                      {product.badge && (
                        <span className="shop-sale-badge">{product.badge}</span>
                      )}

                      <NavLink
                        to={`/detail/${product.id}`}
                        className="shop-quick-view"
                        aria-label={`Quick view ${product.title}`}>
                        Quick View
                      </NavLink>
                    </div>

                    <div className="shop-product-info">
                      <span className="shop-product-category">
                        {product.category}
                      </span>

                      <h3>{product.title}</h3>

                      <div
                        className="shop-rating"
                        aria-label={`Rating: ${product.rating} out of 5`}>
                        {[
                          ...Array(
                            Math.max(
                              0,
                              Math.min(5, Number(product.rating) || 0),
                            ),
                          ),
                        ].map((_, index) => (
                          <span key={index}>★</span>
                        ))}
                      </div>

                      <div className="shop-product-price">
                        <span>{product.newPrice}</span>
                        {product.oldPrice && <del>{product.oldPrice}</del>}
                      </div>

                      <NavLink
                        to={`/detail/${product.id}`}
                        className="shop-add-button">
                        View Product <span>→</span>
                      </NavLink>
                    </div>
                  </article>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
