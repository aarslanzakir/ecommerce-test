import type { Metadata } from "next";
import "./globals.css";
import CartProvider from "@/components/CartProvider";
import Header from "@/components/Header";
import CartDrawer from "@/components/CartDrawer";

export const metadata: Metadata = {
  title: "Northwind Shop",
  description: "Everyday gear, thoughtfully made.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <CartProvider>
          <Header />
          {children}
          <footer>© 2026 Northwind Shop. Demo store.</footer>
          <CartDrawer />
        </CartProvider>
      </body>
    </html>
  );
}
