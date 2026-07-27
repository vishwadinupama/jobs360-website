import nodemailer from "nodemailer";

export const runtime = "nodejs";

type NewsletterPayload = {
  email?: string;
};

const requiredEnv = ["EMAIL_USER", "EMAIL_PASS", "ALLOWED_ADMINS"] as const;

function getMissingEnv() {
  return requiredEnv.filter((key) => !process.env[key]);
}

function clean(value: unknown) {
  return typeof value === "string" ? value.trim() : "";
}

function isEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

function parseAdminEmails(value: string) {
  return value
    .split(/[,\s;]+/)
    .map((email) => email.trim())
    .filter(Boolean);
}

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function buildSubscriberTemplate(email: string) {
  return `
    <div style="margin:0;background:#f8fafc;padding:28px;font-family:Arial,Helvetica,sans-serif;">
      <div style="max-width:620px;margin:0 auto;background:#ffffff;border:1px solid #e2e8f0;border-radius:16px;overflow:hidden;">
        <div style="background:#0f172a;padding:26px 30px;color:#ffffff;">
          <h1 style="margin:0;font-size:24px;line-height:1.25;">Subscription confirmed</h1>
          <p style="margin:8px 0 0;color:#cbd5e1;font-size:14px;">Thanks for subscribing to Jobs360.lk.</p>
        </div>
        <div style="padding:26px 30px;color:#334155;line-height:1.7;">
          <p style="margin:0 0 16px;">Hi there,</p>
          <p style="margin:0 0 16px;">
            Your subscription has been added successfully. We will send you selected job updates,
            hiring news, and practical career tips.
          </p>
          <div style="border:1px solid #e2e8f0;border-radius:12px;padding:16px;background:#f8fafc;">
            <div style="font-weight:700;color:#0f172a;margin-bottom:12px;">Subscription details</div>
            <table style="width:100%;border-collapse:collapse;">
              <tr>
                <td style="padding:10px 0;color:#64748b;font-weight:600;width:140px;">Email</td>
                <td style="padding:10px 0;color:#0f172a;font-weight:700;">${escapeHtml(email)}</td>
              </tr>
              <tr>
                <td style="padding:10px 0;color:#64748b;font-weight:600;width:140px;">Status</td>
                <td style="padding:10px 0;color:#0f172a;font-weight:700;">Subscribed</td>
              </tr>
            </table>
          </div>
          <p style="margin:18px 0 0;color:#64748b;">Jobs360.lk Support Team</p>
        </div>
      </div>
    </div>
  `;
}

function buildAdminTemplate(email: string) {
  return `
    <div style="margin:0;background:#f8fafc;padding:28px;font-family:Arial,Helvetica,sans-serif;">
      <div style="max-width:620px;margin:0 auto;background:#ffffff;border:1px solid #e2e8f0;border-radius:16px;overflow:hidden;">
        <div style="background:#2563eb;padding:24px 30px;color:#ffffff;">
          <h1 style="margin:0;font-size:22px;line-height:1.25;">New newsletter subscriber</h1>
          <p style="margin:8px 0 0;color:#dbeafe;font-size:14px;">A visitor subscribed from the Jobs360.lk footer.</p>
        </div>
        <div style="padding:24px 30px;color:#334155;">
          <p style="margin:0;font-size:15px;"><strong>Email:</strong> ${escapeHtml(email)}</p>
        </div>
      </div>
    </div>
  `;
}

export async function POST(request: Request) {
  try {
    const missingEnv = getMissingEnv();

    if (missingEnv.length > 0) {
      return Response.json({ message: "Newsletter email service is not configured." }, { status: 500 });
    }

    const body = (await request.json()) as NewsletterPayload;
    const email = clean(body.email);

    if (!email || !isEmail(email)) {
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
        from: `"Jobs360.lk" <${process.env.EMAIL_USER}>`,
        to: email,
        subject: "Subscription confirmed | Jobs360.lk",
        text: `Thanks for subscribing to Jobs360.lk.\n\nEmail: ${email}\nStatus: Subscribed\n\nJobs360.lk Support Team`,
        html: buildSubscriberTemplate(email),
      }),
      transporter.sendMail({
        from: `"Jobs360 Newsletter" <${process.env.EMAIL_USER}>`,
        to: adminEmails,
        subject: "New newsletter subscriber | Jobs360.lk",
        text: `A visitor subscribed from the Jobs360.lk footer.\n\nEmail: ${email}`,
        html: buildAdminTemplate(email),
      }),
    ]);

    return Response.json({ message: "Subscription confirmed." });
  } catch (error) {
    console.error("Newsletter subscription failed:", error);
    return Response.json({ message: "Unable to complete your subscription right now." }, { status: 500 });
  }
}
