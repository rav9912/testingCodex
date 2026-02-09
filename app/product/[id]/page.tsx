"use client";

import Link from "next/link";
import { useParams } from "next/navigation";
import { products } from "@/lib/products";
import { useStore } from "@/app/components/StoreProvider";

export default function ProductDetailPage() {
  const params = useParams<{ id: string }>();
  const product = products.find((item) => item.id === params.id);
  const { addToCart, addToWishlist, wishlist } = useStore();

  if (!product) {
    return (
      <div className="notice">
        <p>We could not find that fragrance. Try exploring the full collection.</p>
        <Link className="secondary-button" href="/">
          Back to shop
        </Link>
      </div>
    );
  }

  const isWishlisted = wishlist.some((item) => item.id === product.id);

  return (
    <section className="hero">
      <div className="hero-card">
        <span className="tag">{product.category}</span>
        <h1>{product.name}</h1>
        <p>{product.description}</p>
        <p>
          <strong>${product.price}</strong> · {product.size}
        </p>
        <div className="card-actions">
          <button className="primary-button" onClick={() => addToCart(product)}>
            Add to cart
          </button>
          <button className="secondary-button" onClick={() => addToWishlist(product)}>
            {isWishlisted ? "Wishlisted" : "Add to wishlist"}
          </button>
        </div>
      </div>
      <div className="hero-card">
        <h2>Fragrance profile</h2>
        <p>
          <strong>Mood:</strong> {product.mood}
        </p>
        <p>
          <strong>Intensity:</strong> {product.intensity}
        </p>
        <p>
          <strong>Notes:</strong> {product.notes.join(", ")}
        </p>
        <div className="notice">
          Pair with a matching body oil and enjoy complimentary sample vials at checkout.
        </div>
      </div>
    </section>
  );
}
