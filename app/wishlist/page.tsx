"use client";

import Link from "next/link";
import { useStore } from "@/app/components/StoreProvider";

export default function WishlistPage() {
  const { wishlist, addToCart, removeFromWishlist } = useStore();

  if (wishlist.length === 0) {
    return (
      <div className="notice">
        <p>Your wishlist is empty. Save fragrances to revisit later.</p>
        <Link className="secondary-button" href="/">
          Browse perfumes
        </Link>
      </div>
    );
  }

  return (
    <section>
      <h1>Your wishlist</h1>
      <div className="grid">
        {wishlist.map((item) => (
          <article key={item.id} className="product-card">
            <span className="tag">{item.category}</span>
            <h4>{item.name}</h4>
            <p>{item.description}</p>
            <p>
              <strong>${item.price}</strong> · {item.size}
            </p>
            <div className="card-actions">
              <button className="primary-button" onClick={() => addToCart(item)}>
                Add to cart
              </button>
              <button className="secondary-button" onClick={() => removeFromWishlist(item.id)}>
                Remove
              </button>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
