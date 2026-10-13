import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export async function POST(request: Request) {
  try {
    const formData = await request.formData();

    const name = String(formData.get("name") ?? "").trim();
    const email = String(formData.get("email") ?? "").trim();
    const company = String(formData.get("company") ?? "").trim();
    const service = String(formData.get("service") ?? "").trim();
    const message = String(formData.get("message") ?? "").trim();

    // Honeypot field for basic bot protection.
    const website = String(formData.get("website") ?? "").trim();

    if (website) {
      return NextResponse.json({ success: true });
    }

    if (!name || !email || !company) {
      return NextResponse.json(
        { error: "Name, email, and company are required." },
        { status: 400 }
      );
    }

    if (!isValidEmail(email)) {
      return NextResponse.json(
        { error: "Please enter a valid email address." },
        { status: 400 }
      );
    }

    const safeName = escapeHtml(name);
    const safeEmail = escapeHtml(email);
    const safeCompany = escapeHtml(company);
    const safeService = escapeHtml(service || "Not specified");
    const safeMessage = escapeHtml(message || "No additional message.");

    const { error } = await resend.emails.send({
      from:
        process.env.CONTACT_FROM_EMAIL ||
        "ROWTH Website <contact@rowth.io>",
      to: [
        process.env.CONTACT_TO_EMAIL ||
          "hello@rowth.io",
      ],
      replyTo: email,
      subject: `New ROWTH inquiry — ${company}`,
      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #13181B;">
          <h2>New ROWTH inquiry</h2>

          <p><strong>Name:</strong> ${safeName}</p>
          <p><strong>Email:</strong> ${safeEmail}</p>
          <p><strong>Company:</strong> ${safeCompany}</p>
          <p><strong>Service:</strong> ${safeService}</p>

          <hr style="border: 0; border-top: 1px solid #ddd; margin: 24px 0;" />

          <p><strong>Message:</strong></p>
          <p>${safeMessage.replaceAll("\n", "<br />")}</p>
        </div>
      `,
    });

    if (error) {
      console.error("Resend error:", error);

      return NextResponse.json(
        { error: "Unable to send inquiry." },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact form error:", error);

    return NextResponse.json(
      { error: "Something went wrong." },
      { status: 500 }
    );
  }
}