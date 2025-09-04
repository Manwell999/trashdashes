import { NextRequest, NextResponse } from "next/server";
import { randomUUID } from "node:crypto";
import { mkdir, writeFile } from "node:fs/promises";
import { join } from "node:path";
import nodemailer from "nodemailer";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function POST(req: NextRequest) {
  try {
    const formData = await req.formData();

    const id = randomUUID();
    const name = String(formData.get("name") ?? "");
    const email = String(formData.get("email") ?? "");
    const phone = String(formData.get("phone") ?? "");
    const message = String(formData.get("message") ?? "");
    const images = formData.getAll("images");

    // Use a writable base directory that works locally and on Vercel
    // Prefer VERCE L_TMP_DIR or OS tmp when available, otherwise fall back to project dir
    const writableBase =
      (process.env.VERCEL_TMP_DIR as string | undefined) ||
      (process.env.TMPDIR as string | undefined) ||
      (process.env.TEMP as string | undefined) ||
      (process.env.TMP as string | undefined) ||
      join(process.cwd(), "uploads");
    const baseDir = join(writableBase, "uploads", id);
    await mkdir(baseDir, { recursive: true });

    const savedFiles: string[] = [];
    const attachments: { filename: string; content: Buffer }[] = [];
    let totalBytes = 0;
    for (const img of images) {
      if (img && typeof img === "object" && "arrayBuffer" in img) {
        const file = img as unknown as File;
        const buffer = Buffer.from(await file.arrayBuffer());
        const safeName = file.name.replace(/[^a-zA-Z0-9._-]/g, "_");
        const targetPath = join(baseDir, safeName);
        await writeFile(targetPath, buffer);
        savedFiles.push(targetPath);

        // Collect attachments but keep email size reasonable (~20MB cap)
        if (totalBytes < 20 * 1024 * 1024) {
          attachments.push({ filename: safeName, content: buffer });
          totalBytes += buffer.length;
        }
      }
    }

    // Also store a small JSON alongside for easy lookup
    const record = { id, name, email, phone, message, files: savedFiles, createdAt: new Date().toISOString() };
    await writeFile(join(baseDir, "submission.json"), Buffer.from(JSON.stringify(record, null, 2)));

    // Attempt to send an email notification via SMTP (iCloud)
    const {
      SMTP_HOST,
      SMTP_PORT,
      SMTP_SECURE,
      SMTP_REQUIRE_TLS,
      SMTP_USER,
      SMTP_PASS,
      NOTIFY_EMAIL,
      SMTP_FROM,
      SMTP_TO,
    } = process.env as Record<string, string | undefined>;

    if (SMTP_HOST && SMTP_PORT && SMTP_USER && SMTP_PASS && (NOTIFY_EMAIL || SMTP_TO)) {
      const transporter = nodemailer.createTransport({
        host: SMTP_HOST,
        port: Number(SMTP_PORT),
        secure: String(SMTP_SECURE ?? "false") === "true", // iCloud typically uses STARTTLS on 587
        requireTLS: String(SMTP_REQUIRE_TLS ?? "true") === "true",
        auth: { user: SMTP_USER, pass: SMTP_PASS },
      });

      const to = NOTIFY_EMAIL || SMTP_TO || SMTP_USER;
      const from = SMTP_FROM || SMTP_USER;

      const text = [
        `New Quote Request: ${id}`,
        "",
        `Name: ${name}`,
        `Phone: ${phone}`,
        `Email: ${email || "(not provided)"}`,
        "",
        `Message:`,
        message || "(none)",
        "",
        savedFiles.length ? `Saved files: ${savedFiles.join(", ")}` : "No files uploaded.",
      ].join("\n");

      const html = `
        <div>
          <h2>New Quote Request: ${id}</h2>
          <p><strong>Name:</strong> ${name || "(none)"}</p>
          <p><strong>Phone:</strong> ${phone || "(none)"}</p>
          <p><strong>Email:</strong> ${email || "(not provided)"}</p>
          <p><strong>Message:</strong></p>
          <pre style="white-space:pre-wrap;font-family:inherit">${message || "(none)"}</pre>
          <p><strong>Attachments:</strong> ${attachments.length} included${attachments.length < savedFiles.length ? " (some skipped due to size)" : ""}.</p>
        </div>
      `;

      try {
        await transporter.sendMail({
          from,
          to,
          subject: `New Quote Request ${id}`,
          text,
          html,
          attachments,
        });
      } catch (mailErr) {
        console.error("Email send failed:", mailErr);
        // Do not fail the request just because email failed
      }
    } else {
      console.warn("SMTP env vars not fully set; skipping email send.");
    }

    return NextResponse.json({ id });
  } catch (err) {
    console.error(err);
    return new NextResponse("Upload failed", { status: 500 });
  }
}


