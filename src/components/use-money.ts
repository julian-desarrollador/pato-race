"use client";

import { usePrefs } from "@/components/locale-provider";
import {
  formatMoney,
  fromArs,
  goalAmount,
  prizeAmount,
  ticketAmount,
} from "@/lib/campaign";

export function useMoney() {
  const { currency } = usePrefs();
  return {
    currency,
    ticket: () => formatMoney(ticketAmount(currency), currency),
    prize: () => formatMoney(prizeAmount(currency), currency),
    goal: () => formatMoney(goalAmount(currency), currency),
    fromRaisedArs: (raisedArs: number) =>
      formatMoney(fromArs(raisedArs, currency), currency),
    format: (amount: number) => formatMoney(amount, currency),
  };
}
