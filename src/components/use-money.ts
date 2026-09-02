"use client";

import { usePrefs } from "@/components/locale-provider";
import { formatMoney, fromArs, ticketAmount } from "@/lib/campaign";

export function useMoney() {
  const { currency } = usePrefs();
  return {
    currency,
    ticket: () => formatMoney(ticketAmount(currency), currency),
    fromRaisedArs: (raisedArs: number) =>
      formatMoney(fromArs(raisedArs, currency), currency),
    format: (amount: number) => formatMoney(amount, currency),
  };
}
