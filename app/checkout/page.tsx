"use client";

import { useStore } from "@/app/components/StoreProvider";

export default function CheckoutPage() {
  const { cart } = useStore();
  const subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const shipping = subtotal > 120 ? 0 : cart.length > 0 ? 12 : 0;
  const total = subtotal + shipping;

  return (
    <section className="hero">
      <div className="hero-card">
        <h1>Checkout</h1>
        <p>Complete your order in minutes.</p>
        <input className="input" placeholder="Full name" />
        <input className="input" placeholder="Email" />
        <input className="input" placeholder="Street address" />
        <input className="input" placeholder="City" />
        <input className="input" placeholder="Postal code" />
        <button className="primary-button">Place order</button>
      </div>
      <div className="hero-card">
        <h2>Order summary</h2>
        <p>{cart.length} items</p>
        <div className="cart-row">
          <span>Subtotal</span>
          <span>${subtotal.toFixed(2)}</span>
        </div>
        <div className="cart-row">
          <span>Shipping</span>
          <span>{shipping === 0 ? "Free" : `$${shipping.toFixed(2)}`}</span>
        </div>
        <div className="cart-row">
          <strong>Total</strong>
          <strong>${total.toFixed(2)}</strong>
        </div>
        <div className="notice">
          Secure payments via card, Apple Pay, and Klarna.
        </div>
      </div>
    </section>
  );
}
