import { NextResponse } from "next/server";
import { Resend } from "resend";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone, projectType, message } = body as {
      name?: string;
      email?: string;
      phone?: string;
      projectType?: string;
      message?: string;
    };

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Merci de renseigner votre nom, votre email et un message." },
        { status: 400 }
      );
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      return NextResponse.json({ error: "L'adresse email n'est pas valide." }, { status: 400 });
    }

    const apiKey = process.env.RESEND_API_KEY;
    const to = process.env.CONTACT_TO_EMAIL;

    if (!apiKey || !to) {
      console.error(
        "RESEND_API_KEY ou CONTACT_TO_EMAIL manquant. Voir .env.example pour la configuration."
      );
      return NextResponse.json(
        {
          error:
            "Le service d'envoi n'est pas encore configuré. Merci de réessayer plus tard ou de nous contacter directement.",
        },
        { status: 500 }
      );
    }

    const resend = new Resend(apiKey);

    const { error } = await resend.emails.send({
      from: "Build & Brand Concept <onboarding@resend.dev>",
      to,
      reply_to: email,
      subject: `Nouveau message de ${name} — site vitrine`,
      html: `
        <div style="font-family: sans-serif; line-height: 1.6;">
          <h2>Nouveau message depuis le site Build &amp; Brand Concept</h2>
          <p><strong>Nom :</strong> ${escapeHtml(name)}</p>
          <p><strong>Email :</strong> ${escapeHtml(email)}</p>
          <p><strong>Téléphone :</strong> ${escapeHtml(phone || "Non renseigné")}</p>
          <p><strong>Type de projet :</strong> ${escapeHtml(projectType || "Non renseigné")}</p>
          <p><strong>Message :</strong></p>
          <p>${escapeHtml(message).replace(/\n/g, "<br/>")}</p>
        </div>
      `,
    });

    if (error) {
      console.error("Erreur Resend:", error);
      return NextResponse.json(
        { error: "L'envoi du message a échoué. Merci de réessayer." },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Erreur API contact:", err);
    return NextResponse.json({ error: "Une erreur inattendue est survenue." }, { status: 500 });
  }
}

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}
