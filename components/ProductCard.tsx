"use client";

import Image from "next/image";
import { Product } from "@/lib/products";
import { useCart } from "./CartProvider";

export default function ProductCard({ p }: { p: Product }) {
  const { add } = useCart();
  return (
    <article className="card">
      <Image src={p.img} alt={p.name} width={400} height={400} />
      <div className="info">
        <div className="cat">{p.cat}</div>
        <h3>{p.name}</h3>
        <div className="row">
          <span className="price">${p.price}</span>
          <button className="add" onClick={() => add(p.id)}>Add</button>
        </div>
      </div>
    </article>
  );
}
