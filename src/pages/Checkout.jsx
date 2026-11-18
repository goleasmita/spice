import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "../redux/slice";
import "./Checkout.css";

const Checkout = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const cartItems = useSelector((state) => state.cart.cartItems);

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    state: "",
    pincode: "",
    paymentMethod: "cod",
  });

  const [orderPlaced, setOrderPlaced] = useState(null);

  const subtotal = cartItems.reduce(
    (total, item) => total + Number(item.newPrice || 0) * item.quantity,
    0,
  );

  // Free shipping for this example
  const shipping = 0;
  const total = subtotal + shipping;

  const formatPrice = (price) =>
    `₹${Number(price).toLocaleString("en-IN", {
      maximumFractionDigits: 2,
    })}`;

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (cartItems.length === 0) {
      return;
    }

    const orderDetails = {
      orderNumber: `ORD-${Date.now().toString().slice(-8)}`,
      customer: { ...formData },
      items: cartItems.map((item) => ({ ...item })),
      subtotal,
      shipping,
      total,
      paymentMethod: formData.paymentMethod,
    };

    navigate("/confirmation", {
      state: { orderDetails },
    });

    dispatch(clearCart());
  };

  if (orderPlaced) {
    return (
      <div className="checkout-page " style={{ paddingTop: "100px" }}>
        <div className="checkout-success">
          <div className="success-icon">✓</div>
          <h2>Order placed successfully!</h2>
          <p>
            Thank you, {orderPlaced.customer.fullName}. Your order has been
            confirmed in this demo.
          </p>

          <div className="success-order-details">
            <p>
              <strong>Order number:</strong> {orderPlaced.orderNumber}
            </p>
            <p>
              <strong>Total:</strong> {formatPrice(orderPlaced.total)}
            </p>
            <p>
              <strong>Payment:</strong>{" "}
              {orderPlaced.paymentMethod === "cod"
                ? "Cash on Delivery"
                : "Online payment selected"}
            </p>
          </div>

          <button
            type="button"
            className="checkout-primary-btn"
            onClick={() => navigate("/products")}>
            Continue Shopping
          </button>
        </div>
      </div>
    );
  }

  if (cartItems.length === 0) {
    return (
      <div className="checkout-page">
        <div className="checkout-empty">
          <div className="checkout-empty-icon">🛒</div>
          <h2>Your cart is empty</h2>
          <p>Add some products before proceeding to checkout.</p>
          <NavLink to="/products" className="checkout-primary-btn">
            Shop Now
          </NavLink>
        </div>
      </div>
    );
  }

  return (
    <div className="checkout-page">
      <div className="checkout-container">
        <div className="checkout-heading">
          <h1>Checkout</h1>
          <p>Complete your details to place your order.</p>

          <div className="checkout-breadcrumb">
            <NavLink to="/products">Shop</NavLink>
            <span>/</span>
            <NavLink to="/cart">Cart</NavLink>
            <span>/</span>
            <strong>Checkout</strong>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="checkout-layout">
          <div className="checkout-form-column">
            <section className="checkout-card">
              <h3>
                <span className="checkout-section-number">1</span>
                Contact Information
              </h3>

              <div className="checkout-field">
                <label htmlFor="fullName">Full Name</label>
                <input
                  id="fullName"
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  placeholder="Enter your full name"
                  autoComplete="name"
                  required
                />
              </div>

              <div className="checkout-form-row">
                <div className="checkout-field">
                  <label htmlFor="email">Email Address</label>
                  <input
                    id="email"
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="you@example.com"
                    autoComplete="email"
                    required
                  />
                </div>

                <div className="checkout-field">
                  <label htmlFor="phone">Phone Number</label>
                  <input
                    id="phone"
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="10-digit mobile number"
                    autoComplete="tel"
                    pattern="[0-9]{10}"
                    maxLength={10}
                    inputMode="numeric"
                    title="Enter a 10-digit mobile number"
                    required
                  />
                </div>
              </div>
            </section>

            <section className="checkout-card">
              <h3>
                <span className="checkout-section-number">2</span>
                Shipping Address
              </h3>

              <div className="checkout-field">
                <label htmlFor="address">Street Address</label>
                <textarea
                  id="address"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  placeholder="House number, street, area"
                  rows={3}
                  autoComplete="street-address"
                  required
                />
              </div>

              <div className="checkout-form-row">
                <div className="checkout-field">
                  <label htmlFor="city">City</label>
                  <input
                    id="city"
                    type="text"
                    name="city"
                    value={formData.city}
                    onChange={handleChange}
                    placeholder="Enter city"
                    autoComplete="address-level2"
                    required
                  />
                </div>

                <div className="checkout-field">
                  <label htmlFor="state">State</label>
                  <input
                    id="state"
                    type="text"
                    name="state"
                    value={formData.state}
                    onChange={handleChange}
                    placeholder="Enter state"
                    autoComplete="address-level1"
                    required
                  />
                </div>
              </div>

              <div className="checkout-field">
                <label htmlFor="pincode">PIN Code</label>
                <input
                  id="pincode"
                  type="text"
                  name="pincode"
                  value={formData.pincode}
                  onChange={handleChange}
                  placeholder="6-digit PIN code"
                  pattern="[0-9]{6}"
                  maxLength={6}
                  inputMode="numeric"
                  autoComplete="postal-code"
                  title="Enter a 6-digit PIN code"
                  required
                />
              </div>
            </section>

            <section className="checkout-card">
              <h3>
                <span className="checkout-section-number">3</span>
                Payment Method
              </h3>

              <label className="checkout-payment-option">
                <input
                  type="radio"
                  name="paymentMethod"
                  value="cod"
                  checked={formData.paymentMethod === "cod"}
                  onChange={handleChange}
                />
                <span>
                  <strong>Cash on Delivery</strong>
                  <small>Pay when your order arrives.</small>
                </span>
              </label>

              <label className="checkout-payment-option">
                <input
                  type="radio"
                  name="paymentMethod"
                  value="online"
                  checked={formData.paymentMethod === "online"}
                  onChange={handleChange}
                />
                <span>
                  <strong>Online Payment</strong>
                  <small>Payment gateway integration required.</small>
                </span>
              </label>
            </section>
          </div>

          <aside className="checkout-summary">
            <h3>Order Summary</h3>

            <div className="checkout-summary-items">
              {cartItems.map((item) => (
                <div className="checkout-summary-item" key={item.id}>
                  <div className="checkout-summary-image">
                    <img src={item.img} alt={item.title} />
                    <span>{item.quantity}</span>
                  </div>

                  <div className="checkout-summary-product">
                    <strong>{item.title}</strong>
                    <small>{item.category}</small>
                  </div>

                  <strong className="checkout-line-price">
                    {formatPrice(Number(item.newPrice || 0) * item.quantity)}
                  </strong>
                </div>
              ))}
            </div>

            <div className="checkout-price-row">
              <span>Subtotal</span>
              <span>{formatPrice(subtotal)}</span>
            </div>

            <div className="checkout-price-row">
              <span>Shipping</span>
              <span>{shipping === 0 ? "Free" : formatPrice(shipping)}</span>
            </div>

            <div className="checkout-price-row checkout-grand-total">
              <strong>Total</strong>
              <strong>{formatPrice(total)}</strong>
            </div>

            <button type="submit" className="checkout-primary-btn">
              Place Order · {formatPrice(total)}
            </button>

            <p className="checkout-terms">
              By placing your order, you agree to the store's terms and
              conditions.
            </p>

            <NavLink to="/cart" className="checkout-back-link">
              ← Return to cart
            </NavLink>
          </aside>
        </form>
      </div>
    </div>
  );
};

export default Checkout;
