import Link from "next/link";
import ProductCard from "@/components/ProductCard";
import { PRODUCTS } from "@/lib/products";

export default function Home() {
  return (
    <>
      <div className="hero">
        <div className="wrap">
          <h1>Everyday gear, thoughtfully made.</h1>
          <p>Discover sneakers, watches, bags and tech picked for style and built to last. Free shipping over $75.</p>
          <Link className="btn" href="/shop">Shop the collection</Link>
        </div>
      </div>

      <div className="wrap">
        <div className="perks">
          <div className="perk">Free shipping<small>On orders over $75</small></div>
          <div className="perk">30-day returns<small>No questions asked</small></div>
          <div className="perk">Secure checkout<small>Your data stays safe</small></div>
          <div className="perk">24/7 support<small>We&apos;re here to help</small></div>
        </div>

        <section>
          <h2>Featured products</h2>
          <div className="grid">
            {PRODUCTS.slice(0, 4).map((p) => <ProductCard key={p.id} p={p} />)}
          </div>
        </section>

        <section style={{ paddingTop: 0 }}>
          <div className="banner">
            <div><h2>Browse everything</h2><p>See all {PRODUCTS.length} products and filter by category.</p></div>
            <Link className="btn" href="/shop">Go to shop</Link>
          </div>
        </section>
      </div>
    </>
  );
}
