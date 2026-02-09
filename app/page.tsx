"use client";

import { useMemo, useState } from "react";
import ProductCard from "./components/ProductCard";
import { categories, intensities, products } from "@/lib/products";

export default function HomePage() {
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [selectedIntensity, setSelectedIntensity] = useState<string>("All");
  const [sort, setSort] = useState("featured");

  const filteredProducts = useMemo(() => {
    let filtered = products.filter((product) =>
      product.name.toLowerCase().includes(search.toLowerCase())
    );

    if (selectedCategory !== "All") {
      filtered = filtered.filter((product) => product.category === selectedCategory);
    }

    if (selectedIntensity !== "All") {
      filtered = filtered.filter((product) => product.intensity === selectedIntensity);
    }

    if (sort === "price-low") {
      filtered = [...filtered].sort((a, b) => a.price - b.price);
    }

    if (sort === "price-high") {
      filtered = [...filtered].sort((a, b) => b.price - a.price);
    }

    if (sort === "new") {
      filtered = [...filtered].sort((a, b) => (a.bestseller ? 1 : 0) - (b.bestseller ? 1 : 0));
    }

    return filtered;
  }, [search, selectedCategory, selectedIntensity, sort]);

  return (
    <div>
      <section className="hero">
        <div className="hero-card">
          <p className="tag">Inspired by bliblablu.com</p>
          <h1>Perfume rituals for a luminous everyday.</h1>
          <p>
            Curated eau de parfum collections, layered discovery sets, and signature
            scents that evolve with your mood.
          </p>
          <button className="primary-button">Explore the Atelier</button>
        </div>
        <div className="hero-card">
          <h2>Today's edit</h2>
          <p>Build a discovery flight of 3 minis, free velvet pouch included.</p>
          <div className="notice">
            Complimentary shipping over $120 · Easy returns within 30 days.
          </div>
        </div>
      </section>

      <section>
        <div className="filters">
          <div className="filter-card">
            <h3>Search</h3>
            <input
              className="input"
              placeholder="Search perfumes"
              value={search}
              onChange={(event) => setSearch(event.target.value)}
            />
          </div>
          <div className="filter-card">
            <h3>Category</h3>
            <div>
              <button
                className={`filter-chip ${selectedCategory === "All" ? "active" : ""}`}
                onClick={() => setSelectedCategory("All")}
              >
                All
              </button>
              {categories.map((category) => (
                <button
                  key={category}
                  className={`filter-chip ${
                    selectedCategory === category ? "active" : ""
                  }`}
                  onClick={() => setSelectedCategory(category)}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
          <div className="filter-card">
            <h3>Intensity</h3>
            <div>
              <button
                className={`filter-chip ${selectedIntensity === "All" ? "active" : ""}`}
                onClick={() => setSelectedIntensity("All")}
              >
                All
              </button>
              {intensities.map((intensity) => (
                <button
                  key={intensity}
                  className={`filter-chip ${
                    selectedIntensity === intensity ? "active" : ""
                  }`}
                  onClick={() => setSelectedIntensity(intensity)}
                >
                  {intensity}
                </button>
              ))}
            </div>
          </div>
          <div className="filter-card">
            <h3>Sort</h3>
            <select className="input" value={sort} onChange={(event) => setSort(event.target.value)}>
              <option value="featured">Featured</option>
              <option value="new">Newest</option>
              <option value="price-low">Price low to high</option>
              <option value="price-high">Price high to low</option>
            </select>
          </div>
        </div>

        <div className="grid">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>
    </div>
  );
}
