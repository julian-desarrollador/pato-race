"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useId, useState } from "react";
import { useMerchCart } from "@/components/merch-cart";
import { usePrefs } from "@/components/locale-provider";
import { formatARS } from "@/lib/campaign";
import {
  getMerchProduct,
  merchCatalog,
  type MerchProduct,
  type MerchSize,
  type MerchSlug,
} from "@/lib/merch-catalog";

function ProductImage({ slug, alt }: { slug: MerchSlug; alt: string }) {
  const image = getMerchProduct(slug)?.image;
  return (
    <div className="relative aspect-square w-full bg-[#eceae4]">
      {image ? (
        <Image src={image} alt={alt} fill sizes="(max-width: 1024px) 50vw, 33vw" className="object-cover" />
      ) : null}
    </div>
  );
}

function ShopBackLink({ href }: { href: string }) {
  const { t } = usePrefs();
  return (
    <Link
      href={href}
      className="inline-flex items-center rounded-full border border-[#0e7c90]/30 bg-white px-4 py-2 text-sm font-black text-[#0e7c90] shadow-[0_3px_0_#c5ddd8] transition hover:border-[#0e7c90] hover:bg-[#e8f6f4]"
    >
      {t.participar.back}
    </Link>
  );
}

function PriceLabel({ slug, className = "" }: { slug: MerchSlug; className?: string }) {
  const { t } = usePrefs();
  const price = getMerchProduct(slug)?.priceArs;
  return <p className={className}>{price == null ? t.merch.pricePending : formatARS(price)}</p>;
}

function CatalogCard({ product }: { product: MerchProduct }) {
  const { t } = usePrefs();
  const { addItem, openCart } = useMerchCart();
  const copy = t.merch.items[product.slug];
  const [size, setSize] = useState<MerchSize | "">("");
  const [notice, setNotice] = useState<string | null>(null);

  function onAdd() {
    const chosen = product.sizes ? size || null : null;
    const ok = addItem(product.slug, chosen, 1);
    setNotice(ok ? t.merch.added : t.merch.sizeRequired);
    if (ok) openCart();
  }

  return (
    <article className="flex h-full flex-col overflow-hidden rounded-xl bg-white shadow-[0_1px_2px_rgba(20,32,40,0.06)] ring-1 ring-black/5">
      <Link href={`/merch/${product.slug}`}>
        <ProductImage slug={product.slug} alt={copy.name} />
      </Link>
      <div className="flex flex-1 flex-col gap-2 p-3 sm:p-4">
        <Link href={`/merch/${product.slug}`}>
          <h2 className="text-sm font-semibold text-[#142028] sm:text-base">{copy.name}</h2>
        </Link>
        <PriceLabel slug={product.slug} className="text-sm text-[#5c656b]" />
        {product.sizes ? (
          <div className="flex flex-wrap gap-1" role="group" aria-label={t.merch.sizeLabel}>
            {product.sizes.map((option) => (
              <button
                key={option}
                type="button"
                onClick={() => setSize(option)}
                className={`rounded-full border px-2 py-1 text-xs font-black ${
                  size === option
                    ? "border-duck bg-duck text-[#142028]"
                    : "border-[#d5d0c8] bg-white text-[#142028]"
                }`}
              >
                {option}
              </button>
            ))}
          </div>
        ) : null}
        <button
          type="button"
          onClick={onAdd}
          className="mt-auto inline-flex w-full items-center justify-center rounded-full bg-duck px-3 py-2.5 text-xs font-black text-[#142028] sm:text-sm"
        >
          {t.merch.add}
        </button>
        {notice ? <p className="text-xs text-[#142028]">{notice}</p> : null}
      </div>
    </article>
  );
}

export function MerchIndexView() {
  const { t } = usePrefs();

  return (
    <div className="mx-auto max-w-6xl px-5 py-10 text-[#142028] md:px-8 md:py-14">
      <ShopBackLink href="/#merch" />
      <p className="mt-6 text-xs font-black uppercase tracking-[0.25em] text-[#0e7c90]">
        {t.merch.originals}
      </p>
      <h1 className="mt-3 font-[family-name:var(--font-display)] text-5xl tracking-wide text-[#142028] md:text-6xl">
        {t.merch.pageLead}
      </h1>
      <p className="mt-6 text-xs font-black uppercase tracking-[0.2em] text-[#9a7400]">{t.merch.dropKicker}</p>
      <p className="mt-2 font-[family-name:var(--font-display)] text-4xl tracking-wide">{t.merch.dropTitle}</p>
      <div className="mt-10 grid grid-cols-2 gap-3 sm:gap-5 lg:grid-cols-3">
        {merchCatalog.map((product) => (
          <CatalogCard key={product.slug} product={product} />
        ))}
      </div>
      <p className="mt-8 text-sm text-[#3d4a50]">
        {t.merch.pickup} {t.merch.independent}
      </p>
    </div>
  );
}

export function MerchProductView({ slug }: { slug: MerchSlug }) {
  const { t } = usePrefs();
  const { addItem, openCart } = useMerchCart();
  const product = getMerchProduct(slug);
  const copy = t.merch.items[slug];
  const [size, setSize] = useState<MerchSize | "">("");
  const [qty, setQty] = useState(1);
  const [notice, setNotice] = useState<string | null>(null);

  if (!product) return null;

  function onAdd() {
    const chosen = product?.sizes ? (size || null) : null;
    const ok = addItem(slug, chosen, qty);
    setNotice(ok ? t.merch.added : t.merch.sizeRequired);
    if (ok) openCart();
  }

  return (
    <div className="mx-auto max-w-6xl px-5 py-10 text-[#142028] md:px-8 md:py-14">
      <ShopBackLink href="/merch" />
      <div className="mt-6 grid items-start gap-8 md:grid-cols-2">
        <div className="overflow-hidden rounded-xl bg-white ring-1 ring-black/5">
          <ProductImage slug={slug} alt={copy.name} />
        </div>
        <div>
          <p className="text-xs font-black uppercase tracking-[0.2em] text-[#0e7c90]">{copy.line}</p>
          <h1 className="mt-2 font-[family-name:var(--font-display)] text-5xl tracking-wide">{copy.name}</h1>
          <p className="mt-3 text-[#3d4a50]">{copy.detail}</p>
          <PriceLabel slug={slug} className="mt-4 text-lg font-semibold" />
          {product.sizes ? (
            <fieldset className="mt-6">
              <legend className="text-xs font-black uppercase tracking-[0.16em] text-[#5c656b]">
                {t.merch.sizeLabel}
              </legend>
              <div className="mt-3 flex flex-wrap gap-2">
                {product.sizes.map((option) => (
                  <button
                    key={option}
                    type="button"
                    onClick={() => setSize(option)}
                    className={`rounded-full border px-4 py-2 text-sm font-black ${
                      size === option
                        ? "border-duck bg-duck text-[#142028]"
                        : "border-[#d5d0c8] bg-white text-[#142028]"
                    }`}
                  >
                    {option}
                  </button>
                ))}
              </div>
            </fieldset>
          ) : null}
          <label className="mt-6 block text-xs font-black uppercase tracking-[0.16em] text-[#5c656b]">
            {t.merch.qty}
            <input
              type="number"
              min={1}
              max={10}
              value={qty}
              onChange={(event) => setQty(Number(event.target.value))}
              className="mt-2 block w-24 rounded-xl border border-[#d5d0c8] bg-white px-3 py-2 text-base font-semibold text-[#142028]"
            />
          </label>
          <button
            type="button"
            onClick={onAdd}
            className="mt-6 inline-flex rounded-full bg-duck px-7 py-3 text-sm font-black text-[#142028]"
          >
            {t.merch.add}
          </button>
          {notice ? <p className="mt-3 text-sm text-[#142028]">{notice}</p> : null}
          <p className="mt-6 text-sm text-[#3d4a50]">
            {t.merch.pickup} {t.merch.independent}
          </p>
        </div>
      </div>
    </div>
  );
}

export function MerchCartView() {
  const { t } = usePrefs();
  const { lines, setQty, removeLine, clear, canPay } = useMerchCart();

  return (
    <div className="mx-auto max-w-3xl px-5 py-12 md:px-8 md:py-16">
      <Link href="/merch" className="text-sm text-ink-muted transition hover:text-ink">
        {t.merch.keepShopping}
      </Link>
      <h1 className="mt-4 font-[family-name:var(--font-display)] text-5xl tracking-wide">{t.merch.cartTitle}</h1>
      {lines.length === 0 ? (
        <p className="mt-6 text-ink/85">{t.merch.empty}</p>
      ) : (
        <>
          <ul className="mt-8 space-y-4">
            {lines.map((line) => {
              const copy = t.merch.items[line.slug];
              const price = getMerchProduct(line.slug)?.priceArs;
              return (
                <li
                  key={`${line.slug}-${line.size ?? "na"}`}
                  className="rounded-3xl border border-line bg-bg-elevated p-5"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h2 className="font-[family-name:var(--font-display)] text-2xl text-duck">{copy.name}</h2>
                      {line.size ? (
                        <p className="mt-1 text-sm text-ink-muted">
                          {t.merch.sizeLabel} {line.size}
                        </p>
                      ) : null}
                      <p className="mt-1 text-sm text-ink">{price == null ? t.merch.pricePending : formatARS(price)}</p>
                    </div>
                    <button
                      type="button"
                      onClick={() => removeLine(line.slug, line.size)}
                      className="text-sm text-ink-muted underline"
                    >
                      {t.merch.remove}
                    </button>
                  </div>
                  <label className="mt-4 block text-xs font-black uppercase tracking-[0.16em] text-ink-muted">
                    {t.merch.qty}
                    <input
                      type="number"
                      min={1}
                      max={10}
                      value={line.qty}
                      onChange={(event) => setQty(line.slug, line.size, Number(event.target.value))}
                      className="mt-2 block w-24 rounded-2xl border border-line bg-bg px-3 py-2 text-base font-semibold text-ink"
                    />
                  </label>
                </li>
              );
            })}
          </ul>
          <p className="mt-6 text-sm font-black uppercase tracking-[0.14em] text-ink">
            {t.merch.total}:{" "}
            {canPay
              ? formatARS(
                  lines.reduce(
                    (sum, line) => sum + (getMerchProduct(line.slug)?.priceArs ?? 0) * line.qty,
                    0,
                  ),
                )
              : t.merch.pricePending}
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link href="/merch/checkout" className="inline-flex rounded-full bg-duck px-7 py-3 text-sm font-black text-bg">
              {t.merch.toCheckout}
            </Link>
            <button type="button" onClick={clear} className="rounded-full border border-line px-6 py-3 text-sm text-ink">
              {t.merch.clear}
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export function MerchCheckoutView() {
  const { t } = usePrefs();
  const { lines, canPay } = useMerchCart();

  return (
    <div className="mx-auto max-w-3xl px-5 py-12 md:px-8 md:py-16">
      <Link href="/merch/carrito" className="text-sm text-ink-muted transition hover:text-ink">
        {t.participar.back}
      </Link>
      <h1 className="mt-4 font-[family-name:var(--font-display)] text-5xl tracking-wide">{t.merch.checkoutTitle}</h1>
      {lines.length === 0 ? (
        <p className="mt-6 text-ink/85">{t.merch.empty}</p>
      ) : (
        <form
          className="mt-8 space-y-4"
          onSubmit={(event) => {
            event.preventDefault();
          }}
        >
          <label className="block text-sm font-semibold text-ink">
            {t.merch.buyerName}
            <input name="name" autoComplete="name" className="mt-2 block w-full rounded-2xl border border-line bg-bg px-4 py-3" />
          </label>
          <label className="block text-sm font-semibold text-ink">
            {t.merch.buyerEmail}
            <input name="email" type="email" autoComplete="email" className="mt-2 block w-full rounded-2xl border border-line bg-bg px-4 py-3" />
          </label>
          <label className="block text-sm font-semibold text-ink">
            {t.merch.buyerPhone}
            <input name="tel" type="tel" autoComplete="tel" className="mt-2 block w-full rounded-2xl border border-line bg-bg px-4 py-3" />
          </label>
          <p className="text-sm text-ink-muted">{t.merch.independent}</p>
          <button
            type="button"
            disabled={!canPay}
            className="inline-flex rounded-full bg-duck px-7 py-3 text-sm font-black text-bg disabled:cursor-not-allowed disabled:opacity-50"
          >
            {t.merch.pay}
          </button>
          {!canPay ? <p className="text-sm text-ink">{t.merch.payDisabled}</p> : null}
        </form>
      )}
    </div>
  );
}

export function MerchCartDrawer() {
  const { t } = usePrefs();
  const { lines, setQty, removeLine, canPay, cartOpen, closeCart } = useMerchCart();
  const titleId = useId();

  useEffect(() => {
    if (!cartOpen) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") closeCart();
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = previous;
      window.removeEventListener("keydown", onKey);
    };
  }, [cartOpen, closeCart]);

  if (!cartOpen) return null;

  const total = canPay
    ? formatARS(lines.reduce((sum, line) => sum + (getMerchProduct(line.slug)?.priceArs ?? 0) * line.qty, 0))
    : t.merch.pricePending;

  return (
    <div className="fixed inset-0 z-50" role="dialog" aria-modal="true" aria-labelledby={titleId}>
      <button
        type="button"
        className="absolute inset-0 bg-black/55"
        aria-label={t.nav.close}
        onClick={closeCart}
      />
      <div className="absolute inset-y-0 right-0 flex w-full flex-col bg-white text-[#142028] shadow-2xl sm:max-w-md">
        <div className="flex items-center justify-between gap-3 border-b border-[#e6e1d8] px-5 py-4">
          <h2 id={titleId} className="font-[family-name:var(--font-display)] text-3xl tracking-wide">
            {t.merch.cartTitle}
          </h2>
          <button
            type="button"
            className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-[#d5d0c8]"
            aria-label={t.nav.close}
            onClick={closeCart}
          >
            <svg aria-hidden viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2.25" strokeLinecap="round">
              <path d="M6 6l12 12M18 6L6 18" />
            </svg>
          </button>
        </div>
        {lines.length === 0 ? (
          <p className="flex-1 px-5 py-8 text-sm text-[#3d4a50]">{t.merch.empty}</p>
        ) : (
          <ul className="flex-1 space-y-4 overflow-y-auto px-5 py-5">
            {lines.map((line) => {
              const copy = t.merch.items[line.slug];
              const price = getMerchProduct(line.slug)?.priceArs;
              return (
                <li key={`${line.slug}-${line.size ?? "na"}`} className="flex gap-3 border-b border-[#eeeae3] pb-4">
                  <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-lg bg-[#eceae4]">
                    <Image
                      src={getMerchProduct(line.slug)?.image ?? ""}
                      alt=""
                      fill
                      sizes="64px"
                      className="object-cover"
                    />
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="flex items-start justify-between gap-3">
                      <h3 className="font-semibold">{copy.name}</h3>
                      <button
                        type="button"
                        onClick={() => removeLine(line.slug, line.size)}
                        className="shrink-0 text-sm text-[#5c656b] underline"
                      >
                        {t.merch.remove}
                      </button>
                    </div>
                    {line.size ? (
                      <p className="mt-1 text-sm text-[#5c656b]">
                        {t.merch.sizeLabel} {line.size}
                      </p>
                    ) : null}
                    <p className="mt-1 text-sm">{price == null ? t.merch.pricePending : formatARS(price)}</p>
                    <label className="mt-3 block text-xs font-black uppercase tracking-[0.16em] text-[#5c656b]">
                      {t.merch.qty}
                      <input
                        type="number"
                        min={1}
                        max={10}
                        value={line.qty}
                        onChange={(event) => setQty(line.slug, line.size, Number(event.target.value))}
                        className="mt-2 block w-20 rounded-lg border border-[#d5d0c8] bg-white px-2 py-1.5 text-sm font-semibold text-[#142028]"
                      />
                    </label>
                  </div>
                </li>
              );
            })}
          </ul>
        )}
        <div className="border-t border-[#e6e1d8] px-5 py-4">
          {lines.length > 0 ? (
            <p className="text-sm font-semibold">
              {t.merch.total}: {total}
            </p>
          ) : null}
          <div className={`flex flex-col gap-2 ${lines.length > 0 ? "mt-4" : ""}`}>
            {lines.length > 0 ? (
              <Link
                href="/merch/checkout"
                onClick={closeCart}
                className="inline-flex items-center justify-center rounded-full bg-[#142028] px-6 py-3 text-sm font-black text-white"
              >
                {t.merch.toCheckout}
              </Link>
            ) : null}
            <button
              type="button"
              onClick={closeCart}
              className="rounded-full border border-[#d5d0c8] px-6 py-3 text-sm font-semibold"
            >
              {t.merch.keepShopping}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
