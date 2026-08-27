"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import {
  CURRENCY_COOKIE,
  LOCALE_COOKIE,
  type Currency,
  type Locale,
} from "@/lib/i18n/config";
import { dictionaries, type Messages } from "@/lib/i18n/messages";

type PrefsContextValue = {
  locale: Locale;
  currency: Currency;
  t: Messages;
  setLocale: (locale: Locale) => void;
  setCurrency: (currency: Currency) => void;
};

const PrefsContext = createContext<PrefsContextValue | null>(null);

function writeCookie(name: string, value: string) {
  document.cookie = `${name}=${value}; path=/; max-age=31536000; SameSite=Lax`;
}

export function LocaleProvider({
  children,
  initialLocale,
  initialCurrency,
}: {
  children: React.ReactNode;
  initialLocale: Locale;
  initialCurrency: Currency;
}) {
  const [locale, setLocaleState] = useState<Locale>(initialLocale);
  const [currency, setCurrencyState] = useState<Currency>(initialCurrency);

  useEffect(() => {
    document.documentElement.lang = locale;
  }, [locale]);

  const setLocale = useCallback((next: Locale) => {
    setLocaleState(next);
    writeCookie(LOCALE_COOKIE, next);
    try {
      localStorage.setItem(LOCALE_COOKIE, next);
    } catch {
      /* ignore */
    }
  }, []);

  const setCurrency = useCallback((next: Currency) => {
    setCurrencyState(next);
    writeCookie(CURRENCY_COOKIE, next);
    try {
      localStorage.setItem(CURRENCY_COOKIE, next);
    } catch {
      /* ignore */
    }
  }, []);

  const value = useMemo(
    () => ({
      locale,
      currency,
      t: dictionaries[locale],
      setLocale,
      setCurrency,
    }),
    [locale, currency, setLocale, setCurrency],
  );

  return <PrefsContext.Provider value={value}>{children}</PrefsContext.Provider>;
}

export function usePrefs() {
  const ctx = useContext(PrefsContext);
  if (!ctx) {
    throw new Error("usePrefs debe usarse dentro de LocaleProvider");
  }
  return ctx;
}
