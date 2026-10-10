export const MERCH_SIZES = ["XS", "S", "M", "L", "XL"] as const;
export type MerchSize = (typeof MERCH_SIZES)[number];

export const MERCH_SLUGS = ["pato", "remera", "gorra", "tote", "stickers"] as const;
export type MerchSlug = (typeof MERCH_SLUGS)[number];

export type MerchProduct = {
  slug: MerchSlug;
  image: string;
  /** null hasta que la organización pase el precio. */
  priceArs: number | null;
  sizes: readonly MerchSize[] | null;
};

export const merchCatalog: readonly MerchProduct[] = [
  { slug: "pato", image: "/merch/pato.jpg", priceArs: null, sizes: null },
  { slug: "remera", image: "/merch/remera.jpg", priceArs: null, sizes: MERCH_SIZES },
  { slug: "gorra", image: "/merch/gorra.jpg", priceArs: null, sizes: null },
  { slug: "tote", image: "/merch/tote.jpg", priceArs: null, sizes: null },
  { slug: "stickers", image: "/merch/stickers.jpg", priceArs: null, sizes: null },
];

const LEGACY_MERCH_SLUGS: Record<string, MerchSlug> = {
  remeras: "remera",
  gorras: "gorra",
};

export function isMerchSlug(value: string): value is MerchSlug {
  return (MERCH_SLUGS as readonly string[]).includes(value);
}

export function isMerchSize(value: string): value is MerchSize {
  return (MERCH_SIZES as readonly string[]).includes(value);
}

export function getMerchProduct(slug: string): MerchProduct | null {
  return merchCatalog.find((item) => item.slug === slug) ?? null;
}

export function legacyMerchSlug(slug: string): MerchSlug | null {
  return LEGACY_MERCH_SLUGS[slug] ?? null;
}

export function merchCanPay(
  lines: { slug: MerchSlug }[],
): boolean {
  if (lines.length === 0) return false;
  return lines.every((line) => getMerchProduct(line.slug)?.priceArs != null);
}
