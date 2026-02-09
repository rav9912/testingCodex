"use client";

import Link from "next/link";
import { useStore } from "./StoreProvider";

export default function Header() {
  const { cart, wishlist } = useStore();
  const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <header className="header">
      <div className="container header-content">
        <Link className="logo" href="/">
          BLIBLABLU ATELIER
        </Link>
        <nav className="nav-links">
          <Link href="/">Shop</Link>
          <Link href="/about">Maison</Link>
          <Link href="/delivery">Delivery</Link>
          <Link href="/contact">Contact</Link>
        </nav>
        <div className="actions">
          <Link href="/wishlist">Wishlist
            {wishlist.length > 0 && <span className="badge">{wishlist.length}</span>}
          </Link>
          <Link href="/cart">Cart
            {cartCount > 0 && <span className="badge">{cartCount}</span>}
          </Link>
        </div>
      </div>
    </header>
  );
}
