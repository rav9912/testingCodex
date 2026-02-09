"use client";

import Link from "next/link";
import { useStore } from "@/app/components/StoreProvider";

export default function CartPage() {
  const { cart, removeFromCart, updateQuantity } = useStore();
  const subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const shipping = subtotal > 120 ? 0 : cart.length > 0 ? 12 : 0;
  const total = subtotal + shipping;

  if (cart.length === 0) {
    return (
      <div className="notice">
        <p>Your cart is empty. Discover your next signature scent.</p>
        <Link className="secondary-button" href="/">
          Browse perfumes
        </Link>
      </div>
    );
  }

  return (
    <section>
      <h1>Your cart</h1>
      <div className="cart-grid">
        <div className="cart-card">
          {cart.map((item) => (
            <div key={item.id} className="cart-row">
              <div>
                <strong>{item.name}</strong>
                <p>{item.size}</p>
                <button className="secondary-button" onClick={() => removeFromCart(item.id)}>
                  Remove
                </button>
              </div>
              <div>
                <input
                  className="input"
                  type="number"
                  min={1}
                  value={item.quantity}
                  onChange={(event) => updateQuantity(item.id, Number(event.target.value))}
                />
                <p>${item.price * item.quantity}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="cart-card">
          <h2>Order summary</h2>
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
          <Link className="primary-button" href="/checkout">
            Proceed to checkout
          </Link>
        </div>
      </div>
    </section>
  );
}
