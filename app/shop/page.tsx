"use client";

import { useState } from "react";
import ProductCard from "@/components/ProductCard";
import { PRODUCTS } from "@/lib/products";

const CATS = ["All", ...Array.from(new Set(PRODUCTS.map((p) => p.cat)))];

export default function Shop() {
  const [cat, setCat] = useState("All");
  const list = cat === "All" ? PRODUCTS : PRODUCTS.filter((p) => p.cat === cat);
  return (
    <div className="wrap">
      <section>
        <h2>All products</h2>
        <div className="filters">
          {CATS.map((c) => (
            <button key={c} className={c === cat ? "on" : ""} onClick={() => setCat(c)}>{c}</button>
          ))}
        </div>
        <div className="grid">
          {list.map((p) => <ProductCard key={p.id} p={p} />)}
        </div>
      </section>
    </div>
  );
}
