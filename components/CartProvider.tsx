"use client";

import { createContext, useContext, useEffect, useState, ReactNode } from "react";
import { PRODUCTS } from "@/lib/products";

type Line = { id: number; qty: number };

type CartCtx = {
  lines: Line[];
  count: number;
  total: number;
  open: boolean;
  setOpen: (v: boolean) => void;
  add: (id: number) => void;
  remove: (id: number) => void;
};

const Ctx = createContext<CartCtx | null>(null);

export function useCart() {
  const c = useContext(Ctx);
  if (!c) throw new Error("useCart must be used inside CartProvider");
  return c;
}

export default function CartProvider({ children }: { children: ReactNode }) {
  const [lines, setLines] = useState<Line[]>([]);
  const [open, setOpen] = useState(false);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    try {
      setLines(JSON.parse(localStorage.getItem("cart") || "[]"));
    } catch {}
    setLoaded(true);
  }, []);

  useEffect(() => {
    if (loaded) localStorage.setItem("cart", JSON.stringify(lines));
  }, [lines, loaded]);

  const add = (id: number) => {
    setLines((ls) =>
      ls.some((l) => l.id === id)
        ? ls.map((l) => (l.id === id ? { ...l, qty: l.qty + 1 } : l))
        : [...ls, { id, qty: 1 }]
    );
    setOpen(true);
  };
  const remove = (id: number) => setLines((ls) => ls.filter((l) => l.id !== id));

  const count = lines.reduce((n, l) => n + l.qty, 0);
  const total = lines.reduce(
    (n, l) => n + l.qty * (PRODUCTS.find((p) => p.id === l.id)?.price ?? 0),
    0
  );

  return (
    <Ctx.Provider value={{ lines, count, total, open, setOpen, add, remove }}>
      {children}
    </Ctx.Provider>
  );
}
