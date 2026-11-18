import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  increaseQuantity,
  decreaseQuantity,
  removeFromCart,
  clearCart,
} from "../redux/slice";
import "./Cart.css";

export default function Cart() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const cartItems = useSelector((state) => state.cart.cartItems);

  const cartTotal = cartItems.reduce(
    (total, item) => total + Number(item.newPrice || 0) * item.quantity,
    0,
  );

  const totalItems = cartItems.reduce(
    (total, item) => total + item.quantity,
    0,
  );

  const formatPrice = (price) =>
    Number(price || 0).toLocaleString("en-IN", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });

  // Empty cart
  if (cartItems.length === 0) {
    return (
      <div className="cart-page">
        <div className="empty-cart">
          <div className="empty-cart-icon">🛒</div>

          <h2>Your cart is empty</h2>

          <p>Looks like you haven't added any products to your cart yet.</p>

          <NavLink to="/products" className="continue-shopping-btn">
            Continue Shopping
          </NavLink>
        </div>
      </div>
    );
  }

  return (
    <div className="cart-page">
      <div className="container">
        {/* PAGE HEADER */}
        <div className="cart-header">
          <div>
            <h1>Shopping Cart</h1>
            <p>
              You have {totalItems} item
              {totalItems !== 1 ? "s" : ""} in your cart.
            </p>
          </div>

          <button
            type="button"
            className="clear-cart-btn"
            onClick={() => dispatch(clearCart())}>
            Clear Cart
          </button>
        </div>

        <div className="row g-4">
          {/* CART ITEMS */}
          <div className="col-12 col-lg-8">
            <div className="cart-items-list">
              {cartItems.map((item) => (
                <div className="cart-item" key={item.id}>
                  {/* IMAGE */}
                  <div className="cart-item-image">
                    <img src={item.img} alt={item.title} />
                  </div>

                  {/* PRODUCT DETAILS */}
                  <div className="cart-item-details">
                    <span className="cart-item-category">{item.category}</span>

                    <h3>{item.title}</h3>

                    <div className="cart-item-prices">
                      <span className="cart-item-price">
                        ₹{formatPrice(item.newPrice)}
                      </span>

                      {item.oldPrice != null && (
                        <span className="cart-item-old-price">
                          ₹{formatPrice(item.oldPrice)}
                        </span>
                      )}
                    </div>

                    {/* QUANTITY CONTROLS */}
                    <div className="cart-item-actions">
                      <div className="quantity-control">
                        <button
                          type="button"
                          aria-label={`Decrease quantity of ${item.title}`}
                          disabled={item.quantity <= 1}
                          onClick={() => dispatch(decreaseQuantity(item.id))}>
                          −
                        </button>

                        <span>{item.quantity}</span>

                        <button
                          type="button"
                          aria-label={`Increase quantity of ${item.title}`}
                          onClick={() => dispatch(increaseQuantity(item.id))}>
                          +
                        </button>
                      </div>

                      <button
                        type="button"
                        className="remove-item-btn"
                        onClick={() => dispatch(removeFromCart(item.id))}>
                        Remove
                      </button>
                    </div>
                  </div>

                  {/* ITEM TOTAL */}
                  <div className="cart-item-total">
                    ₹{formatPrice(Number(item.newPrice || 0) * item.quantity)}
                  </div>
                </div>
              ))}
            </div>

            <NavLink to="/products" className="back-to-shopping">
              ← Continue Shopping
            </NavLink>
          </div>

          {/* ORDER SUMMARY */}
          <div className="col-12 col-lg-4">
            <div className="cart-summary">
              <h2>Order Summary</h2>

              <div className="summary-row">
                <span>Items ({totalItems})</span>
                <span>₹{formatPrice(cartTotal)}</span>
              </div>

              <div className="summary-row">
                <span>Shipping</span>
                <span className="free-shipping">Calculated at checkout</span>
              </div>

              <div className="summary-divider" />

              <div className="summary-row summary-total">
                <span>Subtotal</span>
                <span>₹{formatPrice(cartTotal)}</span>
              </div>

              <p className="summary-note">
                Shipping charges and any applicable taxes will be confirmed at
                checkout.
              </p>

              <button
                type="button"
                className="checkout-btn"
                onClick={() => navigate("/checkout")}>
                Proceed to Checkout →
              </button>

              <div className="secure-checkout">🔒 Secure checkout</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
