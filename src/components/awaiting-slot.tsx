"use client";

import { usePrefs } from "@/components/locale-provider";

export function AwaitingSlot({
  title,
  hint,
  className = "",
  tall = false,
}: {
  title: string;
  hint: string;
  className?: string;
  tall?: boolean;
}) {
  const { t } = usePrefs();
  return (
    <div
      className={`flex flex-col items-center justify-center rounded-3xl border-2 border-dashed border-duck/55 bg-duck/5 px-4 text-center ${tall ? "min-h-48 py-10 sm:min-h-64" : "min-h-28 py-6"} ${className}`}
    >
      <p className="rounded-full bg-coral px-2.5 py-0.5 text-[10px] font-black uppercase tracking-[0.16em] text-white">
        {t.fill.badge}
      </p>
      <p className="mt-3 font-[family-name:var(--font-display)] text-xl tracking-wide text-duck sm:text-2xl">
        {title}
      </p>
      <p className="mt-1 max-w-xs text-sm leading-relaxed text-ink/85">{hint}</p>
    </div>
  );
}
