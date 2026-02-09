"use client";

import Link from "next/link";
import { Product } from "@/lib/products";
import { useStore } from "./StoreProvider";

export default function ProductCard({ product }: { product: Product }) {
  const { addToCart, addToWishlist, wishlist } = useStore();
  const isWishlisted = wishlist.some((item) => item.id === product.id);

  return (
    <article className="product-card">
      <div className="product-meta">
        <span className="tag">{product.category}</span>
        {product.bestseller && <span className="tag">Bestseller</span>}
      </div>
      <h4>{product.name}</h4>
      <p>{product.description}</p>
      <p>
        <strong>${product.price}</strong> · {product.size}
      </p>
      <div className="product-meta">
        <span>{product.intensity} intensity</span>
        <span>{product.mood}</span>
      </div>
      <div className="card-actions">
        <button className="primary-button" onClick={() => addToCart(product)}>
          Add to cart
        </button>
        <button className="secondary-button" onClick={() => addToWishlist(product)}>
          {isWishlisted ? "Wishlisted" : "Wishlist"}
        </button>
      </div>
      <Link className="secondary-button" href={`/product/${product.id}`}>
        View details
      </Link>
    </article>
  );
}
