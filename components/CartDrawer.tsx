"use client";

import Image from "next/image";
import { useCart } from "./CartProvider";
import { PRODUCTS } from "@/lib/products";

export default function CartDrawer() {
  const { lines, total, open, setOpen, remove } = useCart();
  return (
    <aside id="drawer" className={open ? "open" : ""}>
      <div className="head">
        <span>Your cart</span>
        <button onClick={() => setOpen(false)} aria-label="Close">×</button>
      </div>
      <div id="items">
        {lines.length === 0 && <p className="empty">Your cart is empty.</p>}
        {lines.map((l) => {
          const p = PRODUCTS.find((x) => x.id === l.id)!;
          return (
            <div className="item" key={p.id}>
              <Image src={p.img} alt={p.name} width={58} height={58} />
              <div>
                <b>{p.name}</b>
                {l.qty} × ${p.price}
              </div>
              <button onClick={() => remove(p.id)} aria-label="Remove">✕</button>
            </div>
          );
        })}
      </div>
      <div className="foot">
        <div className="total"><span>Total</span><span>${total}</span></div>
        <button className="btn" style={{ width: "100%" }} onClick={() => alert("Demo store — checkout not connected.")}>
          Checkout
        </button>
      </div>
    </aside>
  );
}
