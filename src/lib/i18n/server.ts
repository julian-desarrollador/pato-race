import { cookies } from "next/headers";
import { LOCALE_COOKIE, parseLocale, type Locale } from "@/lib/i18n/config";
import { dictionaries, type Messages } from "@/lib/i18n/messages";

export async function getServerPrefs(): Promise<{
  locale: Locale;
  t: Messages;
}> {
  const jar = await cookies();
  const locale = parseLocale(jar.get(LOCALE_COOKIE)?.value);
  return { locale, t: dictionaries[locale] };
}
