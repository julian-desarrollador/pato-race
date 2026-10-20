"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import {
  getMerchProduct,
  isMerchSize,
  isMerchSlug,
  merchCanPay,
  type MerchSize,
  type MerchSlug,
} from "@/lib/merch-catalog";

const STORAGE_KEY = "pato-race-merch-cart";
const MAX_QTY = 10;

export type CartLine = {
  slug: MerchSlug;
  size: MerchSize | null;
  qty: number;
};

type MerchCartValue = {
  lines: CartLine[];
  count: number;
  canPay: boolean;
  cartOpen: boolean;
  openCart: () => void;
  closeCart: () => void;
  addItem: (slug: MerchSlug, size: MerchSize | null, qty: number) => boolean;
  flash: string | null;
  showFlash: (message: string) => void;
  setQty: (slug: MerchSlug, size: MerchSize | null, qty: number) => void;
  removeLine: (slug: MerchSlug, size: MerchSize | null) => void;
  clear: () => void;
};

const MerchCartContext = createContext<MerchCartValue | null>(null);

function sameLine(line: CartLine, slug: MerchSlug, size: MerchSize | null) {
  return line.slug === slug && line.size === size;
}

function clampQty(qty: number) {
  return Math.min(MAX_QTY, Math.max(1, Math.round(qty)));
}

function readStored(): CartLine[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw) as unknown;
    if (!Array.isArray(parsed)) return [];
    return parsed.flatMap((entry) => {
      if (!entry || typeof entry !== "object") return [];
      const slug = "slug" in entry ? String(entry.slug) : "";
      const sizeRaw = "size" in entry ? entry.size : null;
      const qty = "qty" in entry ? Number(entry.qty) : 0;
      if (!isMerchSlug(slug) || !Number.isFinite(qty) || qty < 1) return [];
      const product = getMerchProduct(slug);
      if (!product) return [];
      const size = typeof sizeRaw === "string" && isMerchSize(sizeRaw) ? sizeRaw : null;
      if (product.sizes && (!size || !product.sizes.includes(size))) return [];
      if (!product.sizes && size) return [];
      return [{ slug, size, qty: clampQty(qty) }];
    });
  } catch {
    return [];
  }
}

export function MerchCartProvider({ children }: { children: React.ReactNode }) {
  const [lines, setLines] = useState<CartLine[]>([]);
  const [ready, setReady] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);
  const [flash, setFlash] = useState<string | null>(null);
  const flashTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const openCart = useCallback(() => setCartOpen(true), []);
  const closeCart = useCallback(() => setCartOpen(false), []);

  const showFlash = useCallback((message: string) => {
    setFlash(message);
    if (flashTimer.current) clearTimeout(flashTimer.current);
    flashTimer.current = setTimeout(() => setFlash(null), 3000);
  }, []);

  useEffect(() => {
    return () => {
      if (flashTimer.current) clearTimeout(flashTimer.current);
    };
  }, []);

  useEffect(() => {
    setLines(readStored());
    setReady(true);
  }, []);

  useEffect(() => {
    if (!ready) return;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(lines));
  }, [lines, ready]);

  const addItem = useCallback((slug: MerchSlug, size: MerchSize | null, qty: number) => {
    const product = getMerchProduct(slug);
    if (!product) return false;
    if (product.sizes) {
      if (!size || !product.sizes.includes(size)) return false;
    } else if (size) {
      return false;
    }
    const nextQty = clampQty(qty);
    setLines((current) => {
      const existing = current.find((line) => sameLine(line, slug, size));
      if (!existing) return [...current, { slug, size, qty: nextQty }];
      return current.map((line) =>
        sameLine(line, slug, size)
          ? { ...line, qty: Math.min(MAX_QTY, line.qty + nextQty) }
          : line,
      );
    });
    return true;
  }, []);

  const setQty = useCallback((slug: MerchSlug, size: MerchSize | null, qty: number) => {
    setLines((current) =>
      current.map((line) =>
        sameLine(line, slug, size) ? { ...line, qty: clampQty(qty) } : line,
      ),
    );
  }, []);

  const removeLine = useCallback((slug: MerchSlug, size: MerchSize | null) => {
    setLines((current) => current.filter((line) => !sameLine(line, slug, size)));
  }, []);

  const clear = useCallback(() => setLines([]), []);

  const value = useMemo<MerchCartValue>(
    () => ({
      lines,
      count: lines.reduce((sum, line) => sum + line.qty, 0),
      canPay: merchCanPay(lines),
      cartOpen,
      openCart,
      closeCart,
      addItem,
      flash,
      showFlash,
      setQty,
      removeLine,
      clear,
    }),
    [lines, cartOpen, openCart, closeCart, addItem, flash, showFlash, setQty, removeLine, clear],
  );

  return <MerchCartContext.Provider value={value}>{children}</MerchCartContext.Provider>;
}

export function useMerchCart() {
  const value = useContext(MerchCartContext);
  if (!value) throw new Error("useMerchCart debe usarse dentro de MerchCartProvider");
  return value;
}
