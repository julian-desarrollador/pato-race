"use client";

import { useState } from "react";
import Link from "next/link";
import { usePrefs } from "@/components/locale-provider";
import { useMoney } from "@/components/use-money";
import { interpolate } from "@/lib/i18n/messages";

type FieldErrors = Partial<
  Record<
    "name" | "dni" | "email" | "phone" | "form" | "acceptedBases" | "ageConfirmed",
    string
  >
>;

export function ParticipateForm() {
  const { t, currency } = usePrefs();
  const money = useMoney();
  const [errors, setErrors] = useState<FieldErrors>({});
  const [loading, setLoading] = useState(false);
  const [acceptedBases, setAcceptedBases] = useState(false);
  const [ageConfirmed, setAgeConfirmed] = useState(false);
  const [marketingOptIn, setMarketingOptIn] = useState(false);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setErrors({});
    setLoading(true);
    const form = e.currentTarget;
    const data = new FormData(form);
    const payload = {
      name: String(data.get("name") ?? ""),
      dni: String(data.get("dni") ?? ""),
      email: String(data.get("email") ?? ""),
      phone: String(data.get("phone") ?? ""),
      currency,
      acceptedBases,
      ageConfirmed,
      marketingOptIn,
    };

    try {
      const res = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const json = (await res.json()) as {
        ok?: boolean;
        initPoint?: string;
        error?: string;
        fieldErrors?: FieldErrors;
      };

      if (!res.ok || !json.initPoint) {
        setErrors(
          json.fieldErrors ?? {
            form: json.error ?? t.errors.checkoutStart,
          },
        );
        setLoading(false);
        return;
      }

      window.location.href = json.initPoint;
    } catch {
      setErrors({ form: t.errors.connection });
      setLoading(false);
    }
  }

  return (
    <form onSubmit={onSubmit} className="space-y-5">
      <Field
        label={t.participar.name}
        name="name"
        autoComplete="name"
        error={errors.name}
      />
      <Field
        label={t.participar.dni}
        name="dni"
        inputMode="numeric"
        placeholder="12345678"
        error={errors.dni}
      />
      <Field
        label={t.participar.email}
        name="email"
        type="email"
        autoComplete="email"
        error={errors.email}
      />
      <Field
        label={t.participar.phone}
        name="phone"
        type="tel"
        autoComplete="tel"
        placeholder="+54 11 1234-5678"
        error={errors.phone}
      />

      {errors.form ? (
        <p className="rounded-xl border border-coral/40 bg-coral/10 px-4 py-3 text-sm text-foam">
          {errors.form}
        </p>
      ) : null}

      <div className="rounded-2xl border-2 border-duck/60 bg-duck/10 p-4">
        <p className="font-[family-name:var(--font-display)] text-2xl tracking-wide text-duck">
          {t.participar.benefitTitle}
        </p>
        <p className="mt-1 text-sm leading-relaxed text-ink-muted">
          {t.participar.benefitBody}
        </p>
      </div>

      <div className="rounded-2xl border border-line bg-bg/40 p-4 text-sm text-ink-muted">
        {interpolate(t.participar.payNote, { price: money.ticket() })}
      </div>

      {currency === "USD" ? (
        <p className="rounded-2xl border border-water/40 bg-water/10 px-4 py-3 text-sm text-water-bright">
          {t.participar.payUsdNote}
        </p>
      ) : null}

      <label className="flex items-start gap-3 text-sm text-ink">
        <input
          type="checkbox"
          className="mt-1 h-4 w-4 shrink-0 accent-duck"
          checked={acceptedBases}
          onChange={(e) => setAcceptedBases(e.target.checked)}
        />
        <span>
          {t.participar.acceptBases}{" "}
          <Link href="/legal/bases" className="font-semibold text-duck underline underline-offset-2">
            {t.participar.acceptBasesLink}
          </Link>
          .
          {errors.acceptedBases ? (
            <span className="mt-1 block text-coral">{errors.acceptedBases}</span>
          ) : null}
        </span>
      </label>

      <label className="flex items-start gap-3 text-sm text-ink">
        <input
          type="checkbox"
          className="mt-1 h-4 w-4 shrink-0 accent-duck"
          checked={ageConfirmed}
          onChange={(e) => setAgeConfirmed(e.target.checked)}
        />
        <span>
          {t.participar.ageConfirm}
          {errors.ageConfirmed ? (
            <span className="mt-1 block text-coral">{errors.ageConfirmed}</span>
          ) : null}
        </span>
      </label>

      <label className="flex items-start gap-3 text-sm text-ink-muted">
        <input
          type="checkbox"
          className="mt-1 h-4 w-4 shrink-0 accent-duck"
          checked={marketingOptIn}
          onChange={(e) => setMarketingOptIn(e.target.checked)}
        />
        <span>{t.participar.marketing}</span>
      </label>

      <button
        type="submit"
        disabled={loading}
        className="w-full rounded-full bg-duck px-6 py-3.5 text-base font-semibold text-bg transition hover:bg-duck-deep disabled:opacity-60"
      >
        {loading ? t.participar.submitting : t.participar.submit}
      </button>
    </form>
  );
}

function Field({
  label,
  name,
  error,
  ...props
}: {
  label: string;
  name: string;
  error?: string;
} & React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <label className="block">
      <span className="mb-2 block text-sm text-ink-muted">{label}</span>
      <input
        name={name}
        required
        className="w-full rounded-2xl border border-line bg-bg px-4 py-3 text-ink outline-none transition placeholder:text-ink-muted/50 focus:border-water"
        {...props}
      />
      {error ? <span className="mt-1 block text-sm text-coral">{error}</span> : null}
    </label>
  );
}
