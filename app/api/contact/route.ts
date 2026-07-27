import nodemailer from "nodemailer";

export const runtime = "nodejs";

type ContactPayload = {
  fullName?: string;
  email?: string;
  phone?: string;
  subject?: string;
  message?: string;
};

const requiredEnv = ["EMAIL_USER", "EMAIL_PASS", "ALLOWED_ADMINS"] as const;

function getMissingEnv() {
  return requiredEnv.filter((key) => !process.env[key]);
}

function parseAdminEmails(value: string) {
  return value
    .split(/[,\s;]+/)
    .map((email) => email.trim())
    .filter(Boolean);
}

function isEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

function clean(value: unknown) {
  return typeof value === "string" ? value.trim() : "";
}

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function row(label: string, value: string) {
  return `
    <tr>
      <td style="padding:12px 0;color:#64748b;font-weight:600;width:140px;">${label}</td>
      <td style="padding:12px 0;color:#0f172a;font-weight:700;">${escapeHtml(value || "-")}</td>
    </tr>
  `;
}

function buildAdminTemplate(data: Required<ContactPayload>) {
  return `
    <div style="margin:0;background:#f8fafc;padding:28px;font-family:Arial,Helvetica,sans-serif;">
      <div style="max-width:680px;margin:0 auto;background:#ffffff;border:1px solid #e2e8f0;border-radius:16px;overflow:hidden;">
        <div style="background:#2563eb;padding:26px 30px;color:#ffffff;">
          <h1 style="margin:0;font-size:24px;line-height:1.25;">New Contact Message</h1>
          <p style="margin:8px 0 0;color:#dbeafe;font-size:14px;">A visitor submitted the Jobs360.lk contact form.</p>
        </div>
        <div style="padding:26px 30px;">
          <table style="width:100%;border-collapse:collapse;">
            ${row("Full Name", data.fullName)}
            ${row("Email", data.email)}
            ${row("Phone", data.phone)}
            ${row("Subject", data.subject)}
          </table>
          <div style="margin-top:18px;">
            <div style="color:#64748b;font-weight:700;margin-bottom:10px;">Message</div>
            <div style="white-space:pre-line;border:1px solid #e2e8f0;border-radius:12px;padding:16px;color:#0f172a;line-height:1.7;background:#f8fafc;">${escapeHtml(
              data.message || "-"
            )}</div>
          </div>
        </div>
      </div>
    </div>
  `;
}

function buildUserTemplate(data: Required<ContactPayload>) {
  return `
    <div style="margin:0;background:#f8fafc;padding:28px;font-family:Arial,Helvetica,sans-serif;">
      <div style="max-width:680px;margin:0 auto;background:#ffffff;border:1px solid #e2e8f0;border-radius:16px;overflow:hidden;">
        <div style="background:#0f172a;padding:26px 30px;color:#ffffff;">
          <h1 style="margin:0;font-size:24px;line-height:1.25;">We received your message</h1>
          <p style="margin:8px 0 0;color:#cbd5e1;font-size:14px;">Thanks for contacting Jobs360.lk.</p>
        </div>
        <div style="padding:26px 30px;color:#334155;line-height:1.7;">
          <p style="margin:0 0 16px;">Hi ${escapeHtml(data.fullName)},</p>
          <p style="margin:0 0 16px;">
            Our team has received your inquiry and will get back to you as soon as possible.
          </p>
          <div style="border:1px solid #e2e8f0;border-radius:12px;padding:16px;background:#f8fafc;">
            <div style="font-weight:700;color:#0f172a;margin-bottom:8px;">Your submitted details</div>
            <table style="width:100%;border-collapse:collapse;">
              ${row("Phone", data.phone)}
              ${row("Subject", data.subject)}
            </table>
            <div style="margin-top:12px;color:#64748b;font-weight:700;">Message</div>
            <p style="white-space:pre-line;margin:8px 0 0;color:#334155;">${escapeHtml(data.message || "-")}</p>
          </div>
          <p style="margin:18px 0 0;color:#64748b;">Jobs360.lk Support Team</p>
        </div>
      </div>
    </div>
  `;
}

function buildTextTemplate(data: Required<ContactPayload>, intro: string) {
  return `${intro}

Full Name: ${data.fullName}
Email: ${data.email}
Phone: ${data.phone}
Subject: ${data.subject || "-"}

Message:
${data.message || "-"}`;
}

export async function POST(request: Request) {
  try {
    const missingEnv = getMissingEnv();

    if (missingEnv.length > 0) {
      return Response.json({ message: "Email service is not configured." }, { status: 500 });
    }

    const body = (await request.json()) as ContactPayload;
    const data: Required<ContactPayload> = {
      fullName: clean(body.fullName),
      email: clean(body.email),
      phone: clean(body.phone),
      subject: clean(body.subject),
      message: clean(body.message),
    };

    if (!data.fullName || !data.email || !data.phone) {
      return Response.json({ message: "Full name, email, and phone number are required." }, { status: 400 });
    }

    if (!isEmail(data.email)) {
      return Response.json({ message: "Please enter a valid email address." }, { status: 400 });
    }

    const adminEmails = parseAdminEmails(process.env.ALLOWED_ADMINS ?? "");

    if (adminEmails.length === 0) {
      return Response.json({ message: "Admin recipients are not configured." }, { status: 500 });
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    await Promise.all([
      transporter.sendMail({
        from: `"Jobs360 Contact" <${process.env.EMAIL_USER}>`,
        to: adminEmails,
        replyTo: data.email,
        subject: `New contact message from ${data.fullName}`,
        text: buildTextTemplate(data, "A visitor submitted the Jobs360.lk contact form."),
        html: buildAdminTemplate(data),
      }),
      transporter.sendMail({
        from: `"Jobs360.lk" <${process.env.EMAIL_USER}>`,
        to: data.email,
        subject: "We received your message | Jobs360.lk",
        text: buildTextTemplate(data, "Thanks for contacting Jobs360.lk. We received your message."),
        html: buildUserTemplate(data),
      }),
    ]);

    return Response.json({ message: "Message sent successfully." });
  } catch (error) {
    console.error("Contact email send failed:", error);
    return Response.json({ message: "Unable to send message right now." }, { status: 500 });
  }
}
