"use client";

import { useEffect, useState } from "react";
import { usePrefs } from "@/components/locale-provider";

type Parts = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
};

function getParts(target: Date): Parts {
  const diff = Math.max(0, target.getTime() - Date.now());
  const days = Math.floor(diff / 86_400_000);
  const hours = Math.floor((diff % 86_400_000) / 3_600_000);
  const minutes = Math.floor((diff % 3_600_000) / 60_000);
  const seconds = Math.floor((diff % 60_000) / 1000);
  return { days, hours, minutes, seconds };
}

export function Countdown({ targetIso }: { targetIso: string }) {
  const { t } = usePrefs();
  const target = new Date(targetIso);
  const [parts, setParts] = useState<Parts | null>(null);

  useEffect(() => {
    const tick = () => setParts(getParts(target));
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, [targetIso]);

  const display = parts ?? { days: 0, hours: 0, minutes: 0, seconds: 0 };

  const items = [
    { label: t.hero.countdownDays, value: display.days },
    { label: t.hero.countdownHours, value: display.hours },
    { label: t.hero.countdownMin, value: display.minutes },
    { label: t.hero.countdownSec, value: display.seconds },
  ];

  return (
    <div className="grid grid-cols-4 gap-2 sm:gap-3">
      {items.map((item) => (
        <div
          key={item.label}
          className="rounded-2xl border border-line bg-bg/40 px-2 py-3 text-center backdrop-blur-sm"
        >
          <div className="font-[family-name:var(--font-display)] text-3xl leading-none tracking-wide text-duck sm:text-4xl">
            {String(item.value).padStart(2, "0")}
          </div>
          <div className="mt-1 text-[10px] uppercase tracking-[0.2em] text-ink-muted sm:text-xs">
            {item.label}
          </div>
        </div>
      ))}
    </div>
  );
}
