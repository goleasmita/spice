import React from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import "./Confirmation.css";

const Confirmation = () => {
  const { state } = useLocation();
  const navigate = useNavigate();

  const order = state?.orderDetails;

  const formatPrice = (price) =>
    `₹${Number(price || 0).toLocaleString("en-IN", {
      maximumFractionDigits: 2,
    })}`;

  // If someone opens the confirmation page directly,
  // redirect them to the products page.
  if (!order) {
    return (
      <div className="confirmation-page">
        <div className="confirmation-card confirmation-missing">
          <h2>Order details not found</h2>
          <p>Please place an order before viewing confirmation.</p>
          <button
            className="confirmation-primary-btn"
            onClick={() => navigate("/products")}>
            Continue Shopping
          </button>
        </div>
      </div>
    );
  }

  const customer = order.customer || {};
  const items = order.items || [];

  return (
    <div className="confirmation-page">
      <div className="confirmation-container">
        <div className="confirmation-card">
          <div className="confirmation-success-icon">✓</div>

          <p className="confirmation-eyebrow">ORDER CONFIRMATION</p>
          <h1>Thank you for your order!</h1>
          <p className="confirmation-subtitle">
            Your order has been received successfully.
          </p>

          <div className="confirmation-order-number">
            <span>Order Number</span>
            <strong>{order.orderNumber}</strong>
          </div>

          <p className="confirmation-notice">
            This is a demo confirmation. Your order details have not been saved
            to the server.
          </p>

          <div className="confirmation-divider" />

          <section className="confirmation-section">
            <h2>Order Items</h2>

            {items.map((item) => (
              <div className="confirmation-item" key={item.id}>
                <div className="confirmation-item-image">
                  <img src={item.img} alt={item.title} />
                </div>

                <div className="confirmation-item-info">
                  <strong>{item.title}</strong>
                  <span>{item.category}</span>
                  <small>Quantity: {item.quantity}</small>
                </div>

                <strong className="confirmation-item-price">
                  {formatPrice(Number(item.newPrice || 0) * item.quantity)}
                </strong>
              </div>
            ))}
          </section>

          <div className="confirmation-divider" />

          <section className="confirmation-section">
            <h2>Delivery Details</h2>

            <div className="confirmation-details-grid">
              <div>
                <span>Customer</span>
                <strong>{customer.fullName || "—"}</strong>
              </div>

              <div>
                <span>Email</span>
                <strong>{customer.email || "—"}</strong>
              </div>

              <div>
                <span>Phone</span>
                <strong>{customer.phone || "—"}</strong>
              </div>

              <div>
                <span>Shipping Address</span>
                <strong>
                  {[
                    customer.address,
                    customer.city,
                    customer.state,
                    customer.pincode,
                  ]
                    .filter(Boolean)
                    .join(", ") || "—"}
                </strong>
              </div>

              <div>
                <span>Payment Method</span>
                <strong>
                  {order.paymentMethod === "cod"
                    ? "Cash on Delivery"
                    : "Online Payment"}
                </strong>
              </div>
            </div>
          </section>

          <div className="confirmation-divider" />

          <section className="confirmation-total-section">
            <div>
              <span>Subtotal</span>
              <strong>{formatPrice(order.subtotal)}</strong>
            </div>

            <div>
              <span>Shipping</span>
              <strong>
                {Number(order.shipping || 0) === 0
                  ? "Free"
                  : formatPrice(order.shipping)}
              </strong>
            </div>

            <div className="confirmation-grand-total">
              <span>Total Paid / Payable</span>
              <strong>{formatPrice(order.total)}</strong>
            </div>
          </section>

          <div className="confirmation-actions">
            <NavLink to="/products" className="confirmation-primary-btn">
              Continue Shopping
            </NavLink>

            <button
              type="button"
              className="confirmation-secondary-btn"
              onClick={() => window.print()}>
              Print Confirmation
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Confirmation;
