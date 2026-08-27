import { NextResponse } from "next/server";
import { getParticipantByTicket, getPaymentByParticipantId } from "@/lib/db/store";
import { getServerPrefs } from "@/lib/i18n/server";

export async function POST(request: Request) {
  const { t } = await getServerPrefs();
  let body: { ticketCode?: string; email?: string };
  try {
    body = (await request.json()) as { ticketCode?: string; email?: string };
  } catch {
    return NextResponse.json(
      { ok: false, error: t.errors.lookupGeneric },
      { status: 400 },
    );
  }

  const raw = String(body.ticketCode ?? "")
    .trim()
    .toUpperCase()
    .replace(/\s+/g, "");
  const email = String(body.email ?? "").trim().toLowerCase();

  if (!raw || !email) {
    return NextResponse.json(
      {
        ok: false,
        error: t.errors.lookupMissing,
      },
      { status: 400 },
    );
  }

  const digits = raw.replace(/^PR-?/, "");
  const normalized = `PR-${digits}`;

  const participant = await getParticipantByTicket(normalized);
  if (!participant || participant.email.toLowerCase() !== email) {
    return NextResponse.json(
      {
        ok: false,
        error: t.errors.lookupNotFound,
      },
      { status: 404 },
    );
  }

  const payment = await getPaymentByParticipantId(participant.id);

  return NextResponse.json({
    ok: true,
    profileId: participant.id,
    ticketCode: participant.ticketCode,
    paymentStatus: payment?.status ?? "pending",
  });
}
