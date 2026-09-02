import { NextResponse } from "next/server";
import { createCheckoutPreference } from "@/lib/mp";
import { createParticipant, updatePayment } from "@/lib/db/store";
import { getServerPrefs } from "@/lib/i18n/server";
import { registerSchema } from "@/lib/validation";

export async function POST(request: Request) {
  const { t } = await getServerPrefs();
  try {
    const body = await request.json();
    const parsed = registerSchema.safeParse(body);

    if (!parsed.success) {
      const fieldErrors: Record<string, string> = {};
      for (const issue of parsed.error.issues) {
        const key = String(issue.path[0] ?? "form");
        const code = issue.message as keyof typeof t.errors;
        if (!fieldErrors[key]) {
          fieldErrors[key] = t.errors[code] ?? t.errors.checkoutStart;
        }
      }
      return NextResponse.json({ fieldErrors }, { status: 400 });
    }

    const currency = parsed.data.currency === "USD" ? "USD" : "ARS";
    const { name, dni, email, phone } = parsed.data;
    const { participant, payment } = await createParticipant({
      name,
      dni,
      email,
      phone,
      currency,
    });
    const preference = await createCheckoutPreference({
      paymentId: payment.id,
      participantId: participant.id,
      ticketCode: participant.ticketCode,
      payerEmail: participant.email,
      payerName: participant.name,
      currency,
    });

    await updatePayment(payment.id, {
      mpPreferenceId: preference.id,
    });

    return NextResponse.json({
      ok: true,
      initPoint: preference.initPoint,
      mock: preference.mock,
      participantId: participant.id,
      ticketCode: participant.ticketCode,
    });
  } catch (error) {
    console.error("checkout error", error);
    return NextResponse.json(
      { error: t.errors.checkoutStart },
      { status: 500 },
    );
  }
}
