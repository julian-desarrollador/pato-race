import type { Metadata } from "next";
import { cookies } from "next/headers";
import { Bebas_Neue, DM_Sans } from "next/font/google";
import { LocaleProvider } from "@/components/locale-provider";
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

export async function generateMetadata(): Promise<Metadata> {
  const { locale, t } = await getServerPrefs();
  return {
    title: t.meta.homeTitle,
    description: t.meta.homeDesc,
    openGraph: {
      title: "Pato Race 2026",
      description: t.meta.ogDesc,
      locale: locale === "en" ? "en_US" : "es_AR",
      type: "website",
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
      className={`${display.variable} ${body.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-bg text-ink">
        <LocaleProvider initialLocale={locale} initialCurrency={currency}>
          {children}
        </LocaleProvider>
      </body>
    </html>
  );
}
