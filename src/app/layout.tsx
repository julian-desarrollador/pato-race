import type { Metadata } from "next";
import { cookies } from "next/headers";
import { Barlow_Condensed, Bebas_Neue, DM_Sans } from "next/font/google";
import { LocaleProvider } from "@/components/locale-provider";
import { MerchCartProvider } from "@/components/merch-cart";
import {
  CURRENCY_COOKIE,
  LOCALE_COOKIE,
  parseCurrency,
  parseLocale,
} from "@/lib/i18n/config";
import { getServerPrefs } from "@/lib/i18n/server";
import "./globals.css";

const display = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-display",
});

const body = DM_Sans({
  subsets: ["latin"],
  variable: "--font-body",
});

const hero = Barlow_Condensed({
  weight: ["300", "500", "800"],
  style: "italic",
  subsets: ["latin"],
  variable: "--font-hero",
});

function metadataBaseUrl() {
  const explicit = process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "");
  if (explicit && !explicit.includes("localhost")) return explicit;
  if (process.env.VERCEL_PROJECT_PRODUCTION_URL) {
    return `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`;
  }
  if (process.env.VERCEL_URL) return `https://${process.env.VERCEL_URL}`;
  return explicit || "http://localhost:6632";
}

export async function generateMetadata(): Promise<Metadata> {
  const { locale, t } = await getServerPrefs();
  return {
    metadataBase: new URL(metadataBaseUrl()),
    title: t.meta.homeTitle,
    description: t.meta.homeDesc,
    openGraph: {
      title: "Pato Race 2026",
      description: t.meta.ogDesc,
      locale: locale === "en" ? "en_US" : "es_AR",
      type: "website",
      images: [{ url: "/og.jpg", width: 1200, height: 1200, alt: "Pato Race 2026" }],
    },
  };
}

export default async function RootLayout({ children }: LayoutProps<"/">) {
  const jar = await cookies();
  const locale = parseLocale(jar.get(LOCALE_COOKIE)?.value);
  const currency = parseCurrency(jar.get(CURRENCY_COOKIE)?.value);

  return (
    <html
      lang={locale}
      className={`${display.variable} ${body.variable} ${hero.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-bg text-ink">
        <LocaleProvider initialLocale={locale} initialCurrency={currency}>
          <MerchCartProvider>{children}</MerchCartProvider>
        </LocaleProvider>
      </body>
    </html>
  );
}
