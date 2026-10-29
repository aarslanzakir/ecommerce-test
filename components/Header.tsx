"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCart } from "./CartProvider";

export default function Header() {
  const path = usePathname();
  const { count, setOpen } = useCart();
  return (
    <header>
      <div className="wrap">
        <Link className="logo" href="/">
          north<span>wind</span>
        </Link>
        <nav>
          <Link className={path === "/" ? "active" : ""} href="/">Home</Link>
          <Link className={path === "/shop" ? "active" : ""} href="/shop">Shop</Link>
          <button className="cart-btn" onClick={() => setOpen(true)}>
            Cart ({count})
          </button>
        </nav>
      </div>
    </header>
  );
}
